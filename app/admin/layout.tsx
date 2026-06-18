"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { LayoutDashboard, MessageSquare, LogOut, Settings } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        document.body.classList.add('admin-mode');
        return () => document.body.classList.remove('admin-mode');
    }, []);

    // Don't show sidebar on login page
    if (pathname === '/admin/login') {
        return <div className="bg-background min-h-screen">{children}</div>;
    }

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/admin/login');
        router.refresh();
    };

    return (
        <div className="min-h-screen bg-surface flex flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-primary text-white flex flex-col">
                <div className="p-6 border-b border-white/10">
                    <h2 className="text-2xl font-bold text-secondary">Clasnet Admin</h2>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <Link 
                        href="/admin" 
                        className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${pathname === '/admin' ? 'bg-secondary text-white' : 'hover:bg-primary-foreground/10'}`}
                    >
                        <MessageSquare className="w-5 h-5" />
                        <span>Pesan Masuk</span>
                    </Link>
                </nav>
                <div className="p-4 border-t border-white/10">
                    <button 
                        onClick={handleLogout}
                        className="flex items-center space-x-3 p-3 w-full rounded-lg hover:bg-red-500/20 text-red-300 transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        <span>Keluar</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-auto">
                {children}
            </main>
        </div>
    );
}
