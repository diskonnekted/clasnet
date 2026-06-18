import React from "react";
import { Building2, Users, Target, Shield, Zap, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
    title: "Profil Perusahaan | Clasnet",
    description: "Profil perusahaan Clasnet, visi, misi, dan tim yang berdedikasi membangun transformasi digital di Indonesia.",
};

export default function ProfilPage() {
    return (
        <div className="pb-20">
            {/* Header Section */}
            <section className="bg-primary text-white pt-32 pb-16 mb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Clasnet</h1>
                    <p className="text-xl max-w-3xl mx-auto text-primary-foreground/80">
                        Kami adalah Arsitek Transformasi Digital & Inovasi IoT yang berdedikasi untuk menciptakan solusi teknologi yang terintegrasi, transparan, dan berdampak nyata bagi masyarakat.
                    </p>
                </div>
            </section>

            {/* Visi & Misi */}
            <section className="container mx-auto px-4 mb-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                            <Target className="mr-4 h-8 w-8 text-secondary" /> Visi Kami
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Menjadi penyedia solusi teknologi informasi terkemuka di Indonesia yang mendorong kemandirian digital melalui ekosistem yang terintegrasi, aman, dan inovatif, khususnya bagi pemerintahan desa dan sektor UMKM.
                        </p>

                        <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                            <Zap className="mr-4 h-8 w-8 text-secondary" /> Misi Kami
                        </h2>
                        <ul className="space-y-4">
                            {[
                                "Membangun infrastruktur digital yang andal dan mudah diakses.",
                                "Menciptakan ekosistem perangkat lunak yang Open Source dan kolaboratif.",
                                "Memberikan edukasi dan pendampingan teknologi berkelanjutan.",
                                "Mengintegrasikan teknologi IoT untuk menyelesaikan permasalahan nyata.",
                            ].map((misi, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="w-6 h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                        {i + 1}
                                    </span>
                                    <span className="text-muted-foreground">{misi}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary/5 rounded-3xl transform translate-x-4 translate-y-4"></div>
                        <img 
                            src="/uploads/Clasnet%20Group_files/carousel-2.jpg" 
                            alt="Tim Clasnet" 
                            className="rounded-3xl relative z-10 w-full object-cover aspect-square shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Nilai-Nilai Perusahaan */}
            <section className="bg-surface py-20 mb-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">Nilai Inti Kami</h2>
                        <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1: Profesional (Blue) */}
                        <Card className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 border-none shadow-sm hover:shadow-md transition-shadow group">
                            <Shield className="absolute -right-6 -bottom-6 w-40 h-40 text-blue-300/40 transform group-hover:scale-110 transition-transform duration-500" />
                            <CardContent className="p-8 text-center relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-6 shadow-inner">
                                    <Shield className="w-8 h-8 text-blue-700" />
                                </div>
                                <h3 className="text-xl font-bold text-blue-800 mb-4">Profesional & Akuntabel</h3>
                                <p className="text-blue-900/80 font-medium">Setiap solusi yang kami bangun didasarkan pada standar industri tertinggi dan dapat dipertanggungjawabkan keandalannya.</p>
                            </CardContent>
                        </Card>
                        
                        {/* Card 2: Kolaboratif (Emerald) */}
                        <Card className="relative overflow-hidden bg-gradient-to-br from-emerald-100 to-emerald-200 border-none shadow-sm hover:shadow-md transition-shadow group">
                            <Users className="absolute -left-6 -bottom-6 w-40 h-40 text-emerald-300/40 transform group-hover:scale-110 transition-transform duration-500" />
                            <CardContent className="p-8 text-center relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-6 shadow-inner">
                                    <Users className="w-8 h-8 text-emerald-700" />
                                </div>
                                <h3 className="text-xl font-bold text-emerald-800 mb-4">Kolaboratif</h3>
                                <p className="text-emerald-900/80 font-medium">Kami percaya pada kekuatan Open Source dan pengembangan yang melibatkan partisipasi aktif dari komunitas dan klien.</p>
                            </CardContent>
                        </Card>
                        
                        {/* Card 3: Pendampingan (Amber) */}
                        <Card className="relative overflow-hidden bg-gradient-to-br from-amber-100 to-amber-200 border-none shadow-sm hover:shadow-md transition-shadow group">
                            <Handshake className="absolute -right-6 -top-6 w-40 h-40 text-amber-300/40 transform group-hover:scale-110 transition-transform duration-500" />
                            <CardContent className="p-8 text-center relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mx-auto mb-6 shadow-inner">
                                    <Handshake className="w-8 h-8 text-amber-700" />
                                </div>
                                <h3 className="text-xl font-bold text-amber-800 mb-4">Pendampingan Berkelanjutan</h3>
                                <p className="text-amber-900/80 font-medium">Kami tidak hanya membangun sistem, tetapi juga memastikan pengguna memahami dan dapat memanfaatkannya secara maksimal.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Tim & Kepemimpinan */}
            <section className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-4">Kepemimpinan</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Di balik inovasi Clasnet, terdapat tim ahli yang berdedikasi tinggi.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Card className="overflow-hidden border-border">
                        <div className="md:flex">
                            <div className="md:w-2/5 bg-primary/5 flex items-center justify-center p-6 md:p-8">
                                <img 
                                    src="/uploads/tim.jpg" 
                                    alt="Tim Clasnet" 
                                    className="w-full aspect-square object-cover rounded-2xl shadow-lg"
                                />
                            </div>
                            <div className="p-8 md:p-10 md:w-3/5 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-primary mb-1">Tim Clasnet</h3>
                                <p className="text-secondary font-medium mb-4">Tim Ahli & Pengembang</p>
                                <p className="text-muted-foreground mb-4">
                                    Sebagai motor penggerak utama, Tim Clasnet memimpin visi teknis perusahaan. Melalui kolaborasi talenta-talenta terbaik dengan pengalaman bertahun-tahun dalam pengembangan perangkat lunak dan arsitektur infrastruktur, tim kami berfokus pada perancangan sistem yang efisien, aman, dan mudah diakses oleh berbagai lapisan masyarakat.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
}
