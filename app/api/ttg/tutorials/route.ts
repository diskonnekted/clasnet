import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { createApiRouteHandler } from "@/lib/api-helpers";

type TtgTutorial = {
    id: string;
    title: string;
    excerpt: string;
    imageUrl: string | null;
    relativeTime: string | null;
    url: string;
};

const BASE_URL = "https://ttg.pondokrejo.id";

function toAbsoluteUrl(url: string): string {
    return new URL(url, BASE_URL).toString();
}

function decodeHtml(text: string): string {
    return text
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&nbsp;/g, " ");
}

function stripTags(html: string): string {
    return html.replace(/<[^>]*>/g, " ");
}

function normalizeText(text: string): string {
    return decodeHtml(text).replace(/\s+/g, " ").trim();
}

function parseTutorials(html: string, limit: number): TtgTutorial[] {
    const tutorials: TtgTutorial[] = [];
    const seen = new Set<string>();

    const re = /<a[^>]*href="tutorial\.php\?id=(\d+)"[^>]*>([\s\S]*?)<\/a>/gi;

    let m: RegExpExecArray | null;
    while ((m = re.exec(html)) && tutorials.length < limit) {
        const id = m[1];
        if (!id || seen.has(id)) continue;

        const chunk = m[2] || "";
        const title =
            normalizeText((chunk.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i)?.[1] ?? "")) ||
            normalizeText((chunk.match(/alt="([^"]+)"/i)?.[1] ?? ""));
        if (!title) continue;

        const imgSrc = chunk.match(/<img[^>]*src="([^"]+)"/i)?.[1] ?? null;
        const imageUrl = imgSrc ? toAbsoluteUrl(imgSrc) : null;

        const excerptRaw = chunk.match(/<p[^>]*>([\s\S]*?)<\/p>/i)?.[1] ?? "";
        const excerpt = normalizeText(stripTags(excerptRaw));

        const timeMatch = chunk.match(/(\d+\s+(?:hari|bulan|tahun)\s+yang\s+lalu)/i);
        const relativeTime = timeMatch ? normalizeText(timeMatch[1]) : null;

        if (!excerpt && !relativeTime) continue;

        seen.add(id);

        tutorials.push({
            id,
            title,
            excerpt,
            imageUrl,
            relativeTime,
            url: toAbsoluteUrl(`tutorial.php?id=${id}`),
        });
    }

    return tutorials;
}

export const { GET, OPTIONS } = createApiRouteHandler(async (request: NextRequest) => {
    const { searchParams } = new URL(request.url);
    const limit = Math.max(1, Math.min(60, Number(searchParams.get("limit") || "12") || 12));

    const res = await fetch(`${BASE_URL}/`, {
        method: "GET",
        headers: {
            "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        },
        next: { revalidate: 60 * 30, tags: ["ttg-home"] },
        signal: AbortSignal.timeout(30000),
    });

    if (!res.ok) {
        return NextResponse.json({ success: false, error: `Gagal mengambil konten TTG: HTTP ${res.status}` }, { status: res.status });
    }

    const html = await res.text();
    const tutorials = parseTutorials(html, limit);

    return NextResponse.json({ success: true, data: tutorials, total: tutorials.length });
});
