"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Heart, ExternalLink } from "lucide-react";
import { siFacebook, siWhatsapp, siInstagram, siYoutube, type SimpleIcon } from "simple-icons";

import { useTranslation } from "@/lib/useTranslation";
import { Logo, LogoVariant } from "@/components/ui/custom/Logo";

export function Footer() {
    const { t } = useTranslation();

    const quickLinks = [
        { href: "/", label: "Beranda" },
        { href: "/profil", label: "Profil Perusahaan" },
        { href: "/layanan", label: "Layanan & Solusi" },
        { href: "/produk", label: "Produk (Orion)" },
    ];

    const layananLinks = [
        { href: "/layanan", label: "Sistem Informasi Desa (SID)" },
        { href: "/layanan", label: "Dasbor SID" },
        { href: "/produk", label: "Orion CMS" },
        { href: "/produk", label: "Orion Versa (IoT)" },
    ];

    // Simple icon wrapper component for simple-icons
    const SimpleIcon = ({ icon, className, color }: { icon: SimpleIcon; className?: string; color?: string }) => {
        // Remove width and height from the original SVG to make it responsive
        const svgContent = icon.svg.replace(/width="[^"]*"/, "").replace(/height="[^"]*"/, "");

        // Add color to the SVG content
        const coloredSvgContent = svgContent.replace(/<path/g, `<path fill="${color || "currentColor"}"`);

        return <span className={className} dangerouslySetInnerHTML={{ __html: coloredSvgContent }} />;
    };

    const socialLinks = [
        {
            href: "https://www.facebook.com/clasnet",
            icon: siFacebook,
            label: "Facebook",
            color: "#0866FF",
        },
        {
            href: "https://api.whatsapp.com/send?phone=6285117041846",
            icon: siWhatsapp,
            label: "WhatsApp",
            color: "#2bb517",
        },
        {
            href: "https://www.instagram.com/clasnet",
            icon: siInstagram,
            label: "Instagram",
            color: "#FF0069",
        },
        { href: "https://www.youtube.com/@clasnet", icon: siYoutube, label: "YouTube", color: "#FF0000" },
    ];

    return (
        <footer className="bg-primary text-white" id="kontak">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* About Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <img src="/images/Clasnet Group - Clear Logo - white.png" alt="Clasnet Logo" className="h-10 w-auto object-contain" />
                            <div>
                                <h3 className="text-lg font-bold text-white">Clasnet</h3>
                                <p className="text-xs text-muted-foreground">Arsitek Transformasi Digital</p>
                            </div>
                        </div>
                        <p className="text-sm text-white/80 leading-relaxed">
                            Clasnet adalah perusahaan teknologi terdepan di Indonesia yang memposisikan diri sebagai Arsitek Transformasi Digital & Inovasi IoT.
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    className="w-10 h-10 bg-[#fffeff] rounded-lg flex items-center justify-center text-white hover:bg-[#caefff] hover:text-[#ddf0ff] transition-colors"
                                    aria-label={social.label}
                                >
                                    <SimpleIcon icon={social.icon} className="h-5 w-5" color={social.color} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">{t("footer.quickLinks")}</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    {link.external ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-[#ddf0ff] hover:text-[#3eafdf] transition-colors flex items-center"
                                        >
                                            <ExternalLink className="h-3 w-3 mr-2" />
                                            {link.label}
                                        </a>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-sm text-[#ddf0ff] hover:text-[#3eafdf] transition-colors flex items-center"
                                        >
                                            <ExternalLink className="h-3 w-3 mr-2" />
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">{t("footer.layanan")}</h4>
                        <ul className="space-y-2">
                            {layananLinks.map((link) => (
                                <li key={link.label}>
                                    {link.external ? (
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-[#ddf0ff] hover:text-[#3eafdf] transition-colors flex items-center"
                                        >
                                            <ExternalLink className="h-3 w-3 mr-2" />
                                            {link.label}
                                        </a>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-sm text-[#ddf0ff] hover:text-[#3eafdf] transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Hubungi Kami</h4>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                                <div className="text-sm text-white/80">
                                    <p>Perum Kalisemi Baru D5 No.7, Banjarnegara 53412, Indonesia</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-secondary shrink-0" />
                                <a
                                    href="tel:+6285117041846"
                                    className="text-sm text-white/80 hover:text-secondary transition-colors"
                                >
                                    +62 851 1704 1846
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-secondary shrink-0" />
                                <a
                                    href="mailto:info@clasnet.id"
                                    className="text-sm text-white/80 hover:text-secondary transition-colors"
                                >
                                    info@clasnet.id
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Clock className="h-5 w-5 text-secondary shrink-0" />
                                <span className="text-sm text-white/80">Senin - Jumat: 08:00 - 16:00 WIB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-white/10 mt-8">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-sm text-muted-foreground text-center md:text-left">
                            <p>&copy; 2026 Clasnet. All rights reserved.</p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-4">
                            <div className="flex items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                                <span>Developed by</span>
                                <a href="https://www.clasnet.co.id" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                    Clasnet
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
