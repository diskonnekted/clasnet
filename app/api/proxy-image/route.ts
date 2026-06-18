import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const url = request.nextUrl.searchParams.get('url');
    if (!url) return new NextResponse('Missing URL', { status: 400 });

    try {
        // Abaikan error SSL pada server lokal/remote saat proxy
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        
        const res = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            }
        });
        
        if (!res.ok) {
            return new NextResponse('Failed to fetch image', { status: res.status });
        }
        
        const arrayBuffer = await res.arrayBuffer();
        
        return new NextResponse(arrayBuffer, {
            headers: {
                'Content-Type': res.headers.get('content-type') || 'image/jpeg',
                'Cache-Control': 'public, max-age=86400',
            }
        });
    } catch (error) {
        console.error("Proxy image error:", error);
        return new NextResponse('Error fetching image', { status: 500 });
    }
}
