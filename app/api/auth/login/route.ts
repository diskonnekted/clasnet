import { NextResponse } from 'next/server';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'clasnet2026';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { username, password } = body;

        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            // Berhasil login
            const response = NextResponse.json({ success: true }, { status: 200 });
            
            // Set cookie auth
            response.cookies.set({
                name: 'admin_auth',
                value: 'authenticated',
                httpOnly: true,
                path: '/',
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 7 // 7 days
            });

            return response;
        }

        return NextResponse.json({ success: false, message: 'Username atau password salah' }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Terjadi kesalahan' }, { status: 500 });
    }
}
