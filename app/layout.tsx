import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNavigationWrapper } from "@/components/layout/MobileNavigationWrapper";
import { CustomToast } from "@/components/ui/custom/CustomToast";
import { BackToTop } from "@/components/ui/custom/BackToTop";
import { ThemeSwitcher } from "@/components/ui/custom/ThemeSwitcher";
import { env } from "process";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL || "https://www.clasnet.co.id"),
    title: "Clasnet - Arsitek Transformasi Digital & Inovasi IoT Indonesia",
    description:
        "Clasnet adalah perusahaan teknologi terdepan di Indonesia yang memposisikan diri sebagai Arsitek Transformasi Digital & Inovasi IoT.",
    keywords:
        "Clasnet, Transformasi Digital, IoT Indonesia, Orion CMS, Orion Versa, Smart Village, Sistem Informasi Desa",
    authors: [{ name: "Clasnet" }],
    openGraph: {
        title: "Clasnet - Arsitek Transformasi Digital & Inovasi IoT Indonesia",
        description: "Clasnet adalah perusahaan teknologi terdepan di Indonesia yang memposisikan diri sebagai Arsitek Transformasi Digital & Inovasi IoT.",
        type: "website",
        locale: "id_ID",
        url: "https://www.clasnet.co.id",
        siteName: env.APP_NAME || "Clasnet",
        images: [
            {
                url: "/favicon-512x512.png",
                width: 512,
                height: 512,
                alt: "Clasnet Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Clasnet - Arsitek Transformasi Digital & Inovasi IoT Indonesia",
        description: "Clasnet adalah perusahaan teknologi terdepan di Indonesia yang memposisikan diri sebagai Arsitek Transformasi Digital & Inovasi IoT.",
    },
    other: {
        "msapplication-TileColor": "#27262E",
        "msapplication-TileImage": "/favicon-144x144.png",
    },
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "16x16 32x32" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
            { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
            { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
        ],
        apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    manifest: "/manifest",
};

export function generateViewport() {
    return {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
        themeColor: "#27262E",
    };
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id" suppressHydrationWarning>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}>
                <div className="relative flex min-h-screen flex-col">
                    <Header />
                    <main className="flex-1 pt-16 md:pt-28">{children}</main>
                    <Footer />
                </div>
                <MobileNavigationWrapper />
                <ThemeSwitcher />
                <CustomToast />
                <BackToTop />
            </body>
        </html>
    );
}
