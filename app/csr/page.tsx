import React from "react";
import { Globe, Users, GraduationCap, Store, ArrowRight, Heart, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { CsrForm } from "@/components/csr/CsrForm";

export const metadata = {
    title: "CSR - Website Profil Gratis | Clasnet",
    description: "Program CSR Clasnet: Pembuatan website profil gratis untuk UMKM, Pondok Pesantren, dan Usaha Kecil. Wujudkan kehadiran digital Anda sekarang!",
};

const benefits = [
    {
        icon: Globe,
        title: "Website Profil Profesional",
        desc: "Tampilan modern, responsif di semua perangkat, dan siap pakai untuk mempromosikan usaha/lembaga Anda.",
    },
    {
        icon: Shield,
        title: "Domain & Hosting Gratis",
        desc: "Domain subdomain clasnet.web.id dan hosting gratis selama program berlangsung. Tanpa biaya bulanan.",
    },
    {
        icon: Zap,
        title: "Fitur Lengkap",
        desc: "Halaman profil, galeri foto, informasi kontak, lokasi peta, dan tautan media sosial dalam satu paket.",
    },
    {
        icon: Users,
        title: "Pendampingan Penuh",
        desc: "Tim Clasnet akan mendampingi dari proses pembuatan, pelatihan pengelolaan konten, hingga publikasi.",
    },
];

const targets = [
    {
        icon: Store,
        title: "UMKM",
        desc: "Pelaku usaha mikro, kecil, dan menengah yang ingin memiliki identitas digital untuk menjangkau lebih banyak pelanggan.",
        color: "from-emerald-500/10 to-emerald-600/5",
        border: "border-emerald-500/20",
        badge: "EMERALD",
    },
    {
        icon: GraduationCap,
        title: "Pondok Pesantren",
        desc: "Lembaga pendidikan Islam yang membutuhkan platform informasi kegiatan, profil, dan penerimaan santri baru secara online.",
        color: "from-blue-500/10 to-blue-600/5",
        border: "border-blue-500/20",
        badge: "BLUE",
    },
    {
        icon: Heart,
        title: "Usaha Kecil",
        desc: "Pengusaha pemula, home industry, dan komunitas kreatif yang ingin go-digital tanpa biaya besar di awal.",
        color: "from-amber-500/10 to-amber-600/5",
        border: "border-amber-500/20",
        badge: "AMBER",
    },
];

export default function CsrPage() {
    return (
        <div className="pb-20">
            {/* Header Section */}
            <section className="bg-gradient-to-br from-primary via-primary to-secondary/90 text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
                    <Globe className="w-96 h-96" />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <Badge variant="outline" className="text-white border-white/30 mb-4 bg-white/10 backdrop-blur-sm">
                        Program CSR Clasnet
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Website Profil <span className="text-secondary-foreground">GRATIS</span>
                        <br />
                        untuk UMKM, Pesantren & Usaha Kecil
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
                        Wujudkan kehadiran digital Anda! Clasnet menghadirkan program CSR pembuatan website profil profesional
                        secara gratis sebagai bentuk kontribusi kami dalam mendorong transformasi digital Indonesia.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="#daftar" className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-all">
                            Daftar Sekarang <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link href="/layanan" className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20">
                            Pelajari Layanan Clasnet
                        </Link>
                    </div>
                </div>
            </section>

            {/* Target Penerima Manfaat */}
            <section className="container mx-auto px-4 -mt-10 relative z-20 mb-20">
                <div className="grid md:grid-cols-3 gap-6">
                    {targets.map((item) => (
                        <Card key={item.title} className={`bg-gradient-to-br ${item.color} ${item.border} shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}>
                            <CardContent className="p-6 text-center">
                                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Manfaat */}
            <section className="container mx-auto px-4 mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">Apa yang Anda Dapatkan?</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Semua fasilitas di bawah diberikan secara gratis tanpa biaya tersembunyi.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((item) => (
                        <Card key={item.title} className="border-border hover:border-secondary/50 transition-all hover:shadow-md group">
                            <CardContent className="p-6 text-center">
                                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-7 h-7 text-secondary" />
                                </div>
                                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Cara Mendaftar */}
            <section className="bg-surface py-20 border-y border-border">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-primary mb-4">Cara Mendaftar</h2>
                        <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                    </div>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
                        {[
                            { step: "1", title: "Isi Formulir", desc: "Lengkapi data diri dan usaha/lembaga Anda di formulir pendaftaran." },
                            { step: "2", title: "Konfirmasi", desc: "Tim kami akan menghubungi Anda melalui WhatsApp dalam 1x24 jam." },
                            { step: "3", title: "Pembuatan", desc: "Kami buatkan website profil sesuai kebutuhan Anda dalam 3-5 hari kerja." },
                            { step: "4", title: "Publikasi", desc: "Website siap digunakan! Anda akan mendapat akses untuk mengelola konten." },
                        ].map((item) => (
                            <div key={item.step} className="text-center">
                                <div className="w-12 h-12 rounded-full bg-secondary text-white font-bold text-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form Pendaftaran */}
            <section className="container mx-auto px-4 py-20" id="daftar">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <Badge variant="outline" className="text-secondary border-secondary mb-4 bg-secondary/10">GRATIS</Badge>
                        <h2 className="text-3xl font-bold text-primary mb-4">Daftar Sekarang</h2>
                        <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Isi formulir di bawah ini untuk memulai. Tim Clasnet akan menghubungi Anda dalam 1x24 jam.
                        </p>
                    </div>
                    <CsrForm />
                </div>
            </section>

            {/* FAQ / Penutup */}
            <section className="bg-muted/30 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-primary mb-4">Ada Pertanyaan?</h2>
                    <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                        Hubungi kami melalui WhatsApp atau email jika ada hal yang ingin ditanyakan seputar program CSR ini.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="https://api.whatsapp.com/send?phone=6285117041846" target="_blank" className="inline-flex items-center px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary/90 transition-all">
                            Hubungi WhatsApp
                        </Link>
                        <Link href="mailto:info@clasnet.id" className="inline-flex items-center px-6 py-3 border border-border text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all">
                            Email: info@clasnet.id
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}