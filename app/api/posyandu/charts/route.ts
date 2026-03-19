import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { createApiRouteHandler } from "@/lib/api-helpers";

type ChartPoint = { bulan: string; value: number };

type PosyanduChartsPayload = {
    totals: {
        penduduk: number | null;
        ibu: number | null;
        balita: number | null;
        posyandu: number | null;
    };
    charts: {
        beratBadan: ChartPoint[];
        tinggiBadan: ChartPoint[];
    };
    fetchedAt: string;
};

const POSYANDU_BASE_URL = "https://posyandu.sleman-desa.id";

function getEnv(name: string): string | undefined {
    const value = process.env[name];
    if (!value) return undefined;
    const trimmed = value.trim();
    return trimmed.length ? trimmed : undefined;
}

function applySetCookiesToJar(jar: Map<string, string>, setCookies: string[]) {
    setCookies.forEach((setCookie) => {
        const firstPart = setCookie.split(";")[0]?.trim();
        if (!firstPart) return;
        const idx = firstPart.indexOf("=");
        if (idx <= 0) return;
        const name = firstPart.slice(0, idx).trim();
        const value = firstPart.slice(idx + 1).trim();
        if (!name) return;
        jar.set(name, value);
    });
}

function cookieHeaderFromJar(jar: Map<string, string>): string {
    return Array.from(jar.entries())
        .map(([k, v]) => `${k}=${v}`)
        .join("; ");
}

function escapeRegExp(value: string) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function getSetCookies(headers: Headers): string[] {
    const anyHeaders = headers as unknown as { getSetCookie?: () => string[] };
    const multi = anyHeaders.getSetCookie?.();
    if (multi && Array.isArray(multi) && multi.length) return multi;
    const single = headers.get("set-cookie");
    return single ? [single] : [];
}

function parseEmbeddedArray<T>(html: string, name: string): T | null {
    const re = new RegExp(`${escapeRegExp(name)}\\s*=\\s*(\\[[\\s\\S]*?\\])\\s*;`, "i");
    const m = html.match(re);
    if (!m?.[1]) return null;
    try {
        return JSON.parse(m[1]) as T;
    } catch {
        return null;
    }
}

function extractTotal(html: string, label: string): number | null {
    const re = new RegExp(`${escapeRegExp(label)}\\s*<\\/p>\\s*<h5[^>]*>\\s*([0-9]+)\\s*<\\/h5>`, "i");
    const m = html.match(re);
    if (!m?.[1]) return null;
    const n = Number(m[1]);
    return Number.isFinite(n) ? n : null;
}

async function fetchPosyanduAdminHtml(username: string, password: string): Promise<string> {
    const jar = new Map<string, string>();
    const ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";

    const preRes = await fetch(`${POSYANDU_BASE_URL}/admin`, {
        method: "GET",
        redirect: "manual",
        headers: {
            "User-Agent": ua,
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
        signal: AbortSignal.timeout(30000),
        cache: "no-store",
    });
    applySetCookiesToJar(jar, getSetCookies(preRes.headers));

    const loginRes = await fetch(`${POSYANDU_BASE_URL}/auth`, {
        method: "POST",
        redirect: "manual",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Cookie: cookieHeaderFromJar(jar),
            Origin: POSYANDU_BASE_URL,
            Referer: `${POSYANDU_BASE_URL}/admin`,
            "User-Agent": ua,
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
        body: new URLSearchParams({ username, password }).toString(),
        signal: AbortSignal.timeout(30000),
    });
    applySetCookiesToJar(jar, getSetCookies(loginRes.headers));

    if (loginRes.status !== 302 && loginRes.status !== 303) {
        throw new Error("Login Posyandu gagal (status response tidak sesuai)");
    }

    const cookieHeader = cookieHeaderFromJar(jar);
    if (!cookieHeader) {
        throw new Error("Gagal login ke Posyandu (cookie sesi tidak ditemukan)");
    }

    const adminRes = await fetch(`${POSYANDU_BASE_URL}/admin`, {
        method: "GET",
        headers: {
            Cookie: cookieHeader,
            "User-Agent": ua,
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
        signal: AbortSignal.timeout(30000),
        cache: "no-store",
    });
    applySetCookiesToJar(jar, getSetCookies(adminRes.headers));

    if (!adminRes.ok) {
        throw new Error(`Gagal membuka dashboard Posyandu: HTTP ${adminRes.status}`);
    }

    const html = await adminRes.text();
    if (html.includes('id="loginForm"') || html.includes("Masuk ke Dasbor Posyandu")) {
        throw new Error("Login Posyandu gagal (akses dashboard masih mengarah ke halaman login)");
    }
    return html;
}

export const { GET, OPTIONS } = createApiRouteHandler(async (request: NextRequest) => {
    try {
        void request;
        const username = getEnv("POSYANDU_USERNAME");
        const password = getEnv("POSYANDU_PASSWORD");

        if (!username || !password) {
            return NextResponse.json(
                {
                    success: false,
                    error: "POSYANDU_USERNAME dan POSYANDU_PASSWORD belum diset",
                },
                { status: 500 }
            );
        }

        const html = await fetchPosyanduAdminHtml(username, password);

        const bulanLabels = parseEmbeddedArray<string[]>(html, "bulanLabels") ?? [];
        const bbData = parseEmbeddedArray<number[]>(html, "bbData") ?? [];
        const tbData = parseEmbeddedArray<number[]>(html, "tbData") ?? [];

        const beratBadan: ChartPoint[] = bulanLabels.map((bulan, idx) => ({
            bulan,
            value: Number(bbData[idx] ?? 0) || 0,
        }));

        const tinggiBadan: ChartPoint[] = bulanLabels.map((bulan, idx) => ({
            bulan,
            value: Number(tbData[idx] ?? 0) || 0,
        }));

        const payload: PosyanduChartsPayload = {
            totals: {
                penduduk: extractTotal(html, "Total Penduduk"),
                ibu: extractTotal(html, "Total Ibu"),
                balita: extractTotal(html, "Total Bayi / Balita"),
                posyandu: extractTotal(html, "Total Posyandu"),
            },
            charts: { beratBadan, tinggiBadan },
            fetchedAt: new Date().toISOString(),
        };

        return NextResponse.json({ success: true, data: payload });
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : "Gagal mengambil data Posyandu",
            },
            { status: 500 }
        );
    }
});
