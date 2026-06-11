import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const store: Map<string, { count: number; resetAt: number }> = new Map();

const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW_MS || "60000", 10);
const max = parseInt(process.env.RATE_LIMIT_MAX || "60", 10);

function getIp(req: NextRequest): string {
    const xff = req.headers.get("x-forwarded-for");
    if (xff) {
        const ip = xff.split(",")[0].trim();
        if (ip) return ip;
    }
    const xri = req.headers.get("x-real-ip");
    if (xri) return xri;
    return "0.0.0.0";
}

export default function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;
    if (!pathname.startsWith("/api")) return NextResponse.next();

    const ip = getIp(req);
    const key = `${ip}:api`;

    const now = Date.now();
    const entry = store.get(key);

    if (!entry || now > entry.resetAt) {
        store.set(key, { count: 1, resetAt: now + windowMs });
        const res = NextResponse.next();
        res.headers.set("X-RateLimit-Limit", max.toString());
        res.headers.set("X-RateLimit-Remaining", (max - 1).toString());
        res.headers.set("X-RateLimit-Reset", Math.floor((now + windowMs) / 1000).toString());
        return res;
    }

    if (entry.count >= max) {
        return new NextResponse(JSON.stringify({ success: false, error: "Too many requests" }), {
            status: 429,
            headers: { 
                "Content-Type": "application/json",
                "X-RateLimit-Limit": max.toString(),
                "X-RateLimit-Remaining": "0",
                "X-RateLimit-Reset": Math.floor(entry.resetAt / 1000).toString()
            },
        });
    }

    entry.count += 1;
    store.set(key, entry);
    const res = NextResponse.next();
    res.headers.set("X-RateLimit-Limit", max.toString());
    res.headers.set("X-RateLimit-Remaining", (max - entry.count).toString());
    res.headers.set("X-RateLimit-Reset", Math.floor(entry.resetAt / 1000).toString());
    return res;
}

export const config = {
    matcher: ["/api/:path*"],
};
