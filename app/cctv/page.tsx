import React from "react";
import { Video, ShieldCheck, ExternalLink, CalendarCheck, Calculator, ArrowRight, Camera, Info, Wrench, Shield, Coins, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getCCTVArticles } from "@/lib/fetchers";

export const metadata = {
    title: "Layanan CCTV | Clasnet",
    description: "Layanan pemasangan, perbaikan, dan informasi terkait sistem keamanan CCTV dari Clasnet.",
};

export default async function CCTVPage() {
    const articles = await getCCTVArticles();

    return (
        <div className="pb-20">
            {/* Header Section */}
            <section className="bg-primary text-white pt-32 pb-16 mb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
                    <Video className="w-96 h-96" />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <Badge variant="outline" className="text-secondary border-secondary mb-4 bg-secondary/10">Sistem Keamanan Terpadu</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Layanan CCTV Clasnet</h1>
                    <p className="text-xl max-w-3xl mx-auto text-primary-foreground/80">
                        Solusi sistem keamanan kamera pengawas (CCTV) terbaik untuk rumah, kantor, dan instansi Anda dengan dukungan teknisi profesional.
                    </p>
                </div>
            </section>

            {/* Quick Services CTA */}
            <section className="container mx-auto px-4 mb-20">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Booking Service (Blue) */}
                    <a href="https://cctv.clasnet.id/booking-service/" target="_blank" rel="noopener noreferrer" className="block group">
                        <Card className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 border-none shadow-sm hover:shadow-md transition-shadow h-full">
                            <CalendarCheck className="absolute -right-6 -bottom-6 w-40 h-40 text-blue-300/40 transform group-hover:scale-110 transition-transform duration-500" />
                            <CardContent className="p-8 relative z-10 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 shadow-inner">
                                    <CalendarCheck className="w-7 h-7 text-blue-700" />
                                </div>
                                <h3 className="text-xl font-bold text-blue-800 mb-3">Booking Service</h3>
                                <p className="text-blue-900/80 font-medium mb-6 flex-grow">Jadwalkan kunjungan teknisi kami untuk perbaikan atau pemeliharaan sistem CCTV Anda.</p>
                                <div className="flex items-center font-bold text-blue-700 text-sm mt-auto">
                                    Pesan Jadwal <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </CardContent>
                        </Card>
                    </a>

                    {/* Paket Pemasangan (Emerald) */}
                    <a href="https://cctv.clasnet.id/harga-paket-4-camera/" target="_blank" rel="noopener noreferrer" className="block group">
                        <Card className="relative overflow-hidden bg-gradient-to-br from-emerald-100 to-emerald-200 border-none shadow-sm hover:shadow-md transition-shadow h-full">
                            <Camera className="absolute -left-6 -bottom-6 w-40 h-40 text-emerald-300/40 transform group-hover:scale-110 transition-transform duration-500" />
                            <CardContent className="p-8 relative z-10 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 shadow-inner">
                                    <Camera className="w-7 h-7 text-emerald-700" />
                                </div>
                                <h3 className="text-xl font-bold text-emerald-800 mb-3">Paket Pemasangan</h3>
                                <p className="text-emerald-900/80 font-medium mb-6 flex-grow">Pilihan paket CCTV lengkap (kamera, DVR/NVR, kabel, hingga instalasi) yang transparan.</p>
                                <div className="flex items-center font-bold text-emerald-700 text-sm mt-auto">
                                    Lihat Paket <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </CardContent>
                        </Card>
                    </a>

                    {/* Kalkulator CCTV (Amber) */}
                    <a href="https://cctv.clasnet.id/kalkulator-paket-cctv/" target="_blank" rel="noopener noreferrer" className="block group">
                        <Card className="relative overflow-hidden bg-gradient-to-br from-amber-100 to-amber-200 border-none shadow-sm hover:shadow-md transition-shadow h-full">
                            <Calculator className="absolute -right-6 -top-6 w-40 h-40 text-amber-300/40 transform group-hover:scale-110 transition-transform duration-500" />
                            <CardContent className="p-8 relative z-10 flex flex-col h-full">
                                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 shadow-inner">
                                    <Calculator className="w-7 h-7 text-amber-700" />
                                </div>
                                <h3 className="text-xl font-bold text-amber-800 mb-3">Kalkulator CCTV</h3>
                                <p className="text-amber-900/80 font-medium mb-6 flex-grow">Estimasi biaya pemasangan CCTV secara mandiri sesuai dengan kebutuhan jumlah titik.</p>
                                <div className="flex items-center font-bold text-amber-700 text-sm mt-auto">
                                    Hitung Estimasi <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </CardContent>
                        </Card>
                    </a>
                </div>
            </section>

            {/* Mengapa Memilih Kami Section */}
            <section className="container mx-auto px-4 mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">Mengapa Memilih Clasnet?</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto">Kami memberikan layanan terbaik dengan mengutamakan kualitas, kerapian, dan kepuasan pelanggan.</p>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                    <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-slate-50">
                        <CardContent className="p-6 text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Wrench className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Teknisi Ahli</h3>
                            <p className="text-sm text-muted-foreground">Dikerjakan oleh tim profesional yang berpengalaman di bidang keamanan.</p>
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-slate-50">
                        <CardContent className="p-6 text-center">
                            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ThumbsUp className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Pengerjaan Rapi</h3>
                            <p className="text-sm text-muted-foreground">Instalasi kabel yang rapi dan estetis, tidak merusak keindahan ruangan Anda.</p>
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-slate-50">
                        <CardContent className="p-6 text-center">
                            <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Garansi Resmi</h3>
                            <p className="text-sm text-muted-foreground">Produk original dengan garansi resmi pabrik dan garansi pemasangan.</p>
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-sm hover:shadow-md transition-shadow bg-slate-50">
                        <CardContent className="p-6 text-center">
                            <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Coins className="w-8 h-8 text-amber-600" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Harga Transparan</h3>
                            <p className="text-sm text-muted-foreground">Tanpa biaya tersembunyi. Anda hanya membayar sesuai kesepakatan awal.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Merk CCTV Section */}
            <section className="bg-slate-50 py-16 mb-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-primary mb-8">Merk CCTV yang Didukung</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Hikvision", "Dahua", "Ezviz", "Bardi", "TP-Link / Tapo", "SPC", "HiLook", "Imou"].map((merk, idx) => (
                            <Badge key={idx} variant="outline" className="px-6 py-3 text-sm md:text-base bg-white shadow-sm border-slate-200 text-slate-700 hover:border-secondary hover:text-secondary transition-colors">
                                {merk}
                            </Badge>
                        ))}
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="container mx-auto px-4 mb-20" id="cctv-articles">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4 flex justify-center items-center">
                        <Info className="mr-3 text-secondary w-8 h-8" /> Informasi & Edukasi CCTV
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {articles.length > 0 ? articles.map((item, idx) => (
                        <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
                            <Card className="border-border hover:border-secondary/50 transition-all shadow-sm hover:shadow-md h-full flex flex-col">
                                <div className="aspect-[4/3] bg-primary/5 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                    />
                                </div>
                                <CardContent className="p-5 flex flex-col flex-grow">
                                    <h3 className="font-bold text-primary mb-2 line-clamp-2 group-hover:text-secondary transition-colors text-base">{item.title}</h3>
                                    <p className="text-xs text-muted-foreground mb-4 flex-grow line-clamp-3">{item.desc}</p>
                                    <div className="flex items-center justify-between text-[10px] font-semibold text-secondary mt-auto pt-4 border-t border-border">
                                        <span>{item.date}</span>
                                        <span className="flex items-center">Baca <ExternalLink className="w-3 h-3 ml-1" /></span>
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    )) : (
                        <div className="col-span-4 text-center py-20 text-muted-foreground">
                            <ShieldCheck className="w-12 h-12 text-primary/20 mx-auto mb-4" />
                            Gagal mengambil informasi CCTV, silakan muat ulang.
                        </div>
                    )}
                </div>

                <div className="text-center mt-12">
                    <a 
                        href="https://cctv.clasnet.id/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center justify-center px-8 py-3 border border-secondary text-secondary font-medium rounded-lg hover:bg-secondary hover:text-white transition-colors"
                    >
                        Kunjungi Portal CCTV Lengkap <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                </div>
            </section>
        </div>
    );
}
