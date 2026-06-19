"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    Search,
    Bell,
    ChevronDown,
    Info,
    Home,
    Cpu,
    Building2,
    BarChart3,
    FileText,
    Globe,
    MessageSquare,
    BookCheck,
    Newspaper,
    Users,
    Heart,
    Sparkles,
    Shield,
    CreditCard,
    GraduationCap,
    Lightbulb,
    Video,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "@/lib/useTranslation";
import { Logo, LogoVariant } from "@/components/ui/custom/Logo";

export function Header() {
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const mainNavItems = [
        { href: "/", label: "Beranda", icon: Home },
        { href: "/profil", label: "Profil", icon: Building2 },
        { href: "/layanan", label: "Layanan", icon: Sparkles },
        { href: "/cctv", label: "CCTV", icon: Video },
        { href: "/portofolio", label: "Portofolio", icon: Users },
        { href: "/produk", label: "Produk", icon: Cpu },
        { href: "/inovasi", label: "Inovasi", icon: Lightbulb },
        { href: "/kontak", label: "Kontak", icon: MessageSquare },
    ];

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            // Implement search functionality
            // TODO: Implement actual search functionality
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 text-white shadow-lg shadow-primary/10">
            {/* Top Header Bar */}
            <div
                className={`border-b border-white/10 bg-foreground transition-opacity duration-300 ${
                    isScrolled ? "opacity-0 h-0" : "opacity-100 h-16"
                } overflow-hidden`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo Section - Left Side */}
                        <div className="flex items-center flex-shrink-0">
                            <Link
                                href="/"
                                className="flex items-center space-x-3 hover:opacity-80 transition-opacity cursor-pointer"
                            >
                                <img src="/images/Clasnet Group - Clear Logo - white.png" alt="Clasnet Logo" className="h-8 w-auto object-contain" />
                            </Link>
                        </div>

                        {/* Search Bar - Center with flexible space */}
                        <div className="hidden lg:flex flex-1 justify-center px-6">
                            <form onSubmit={handleSearch} className="relative w-full max-w-2xl">
                                <Input
                                    type="search"
                                    placeholder={t("navigation.cari")}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-10 py-2 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-secondary/40"
                                />
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
                                <Button
                                    type="submit"
                                    className="absolute right-0 top-0 bottom-0 px-3 rounded-l-none h-auto bg-secondary hover:bg-secondary/90 text-white border-none"
                                >
                                    <Search className="h-4 w-4" />
                                </Button>
                            </form>
                        </div>

                        {/* Right Section - Right Side */}
                        <div className="flex items-center flex-shrink-0 space-x-4">
                            {/* Mobile Search Toggle */}
                            <Button
                                variant="ghost"
                                size="icon"
                                className="lg:hidden text-white hover:bg-white/20! hover:text-white! cursor-pointer"
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                            >
                                <Search className="h-5 w-5" />
                            </Button>

                            {/* Notifications */}
                            {isMounted && (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="relative text-white hover:text-white! hover:bg-white/20! cursor-pointer"
                                        >
                                            <Bell className="h-5 w-5" />
                                            <Badge className="absolute -top-1 -right-1 w-5 h-5 bg-[#f87171] text-white text-xs rounded-full p-0 flex items-center justify-center">
                                                3
                                            </Badge>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-80">
                                        <DropdownMenuItem className="flex items-center justify-between data-highlighted:bg-secondary data-highlighted:text-white">
                                            <span>Rilis Orion CMS v1.0</span>
                                            <Badge variant="secondary">Baru</Badge>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="flex items-center justify-between data-highlighted:bg-secondary data-highlighted:text-white">
                                            <span>Update Dashboard SID</span>
                                            <Badge variant="outline">Info</Badge>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="data-highlighted:bg-primary/20">
                                            <Link href="/notifikasi" className="w-full cursor-pointer text-primary">
                                                Lihat Semua Notifikasi
                                            </Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )}

                            {/* User Account */}
                            {isMounted && (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-white hover:text-white! hover:bg-white/20! cursor-pointer px-0! ml-4! sm:ml-0!"
                                        >
                                            <Info className="h-4 w-4 mr-2" />
                                            <span className="hidden sm:inline">Info</span>
                                            <ChevronDown className="h-4 w-4 ml-1" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-96">
                                        <DropdownMenuItem disabled>
                                            <div className="space-y-1">
                                                <p className="text-sm">
                                                    Portal ini merupakan penampil konten dari berbagai layanan via API.
                                                </p>
                                                <p className="text-sm">
                                                    Tidak tersedia akun, dasbor, atau fitur login publik.
                                                </p>
                                            </div>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Search */}
                {isSearchOpen && (
                    <div className="lg:hidden border-t border-white/10 p-4">
                        <form onSubmit={handleSearch} className="relative w-full">
                            <Input
                                type="search"
                                placeholder={t("navigation.cari")}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-10 py-2 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20 focus:border-secondary/40"
                                autoFocus
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
                            <Button
                                type="submit"
                                className="absolute right-0 top-0 bottom-0 px-3 rounded-l-none h-auto bg-secondary hover:bg-secondary/90 text-white"
                            >
                                <Search className="h-4 w-4" />
                            </Button>
                        </form>
                    </div>
                )}
            </div>

            {/* Main Navigation - Desktop */}
            <nav className="hidden lg:block bg-primary/95 backdrop-blur-md border-t border-white/10 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center space-x-2 h-14">
                        {/* Main Navigation Items */}
                        {mainNavItems.map((item) => {
                            const IconComponent = item.icon;
                            if ((item as any).external) {
                                return (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/20 hover:text-white rounded-lg transition-all cursor-pointer flex items-center"
                                    >
                                        <IconComponent className="h-4 w-4 mr-2" />
                                        {item.label}
                                    </a>
                                );
                            }

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/20 hover:text-white rounded-lg transition-all cursor-pointer flex items-center"
                                >
                                    <IconComponent className="h-4 w-4 mr-2" />
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </header>
    );
}
