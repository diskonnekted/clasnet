import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, Building2, Cpu, Globe, Activity, Users, Sparkles, Server, MonitorSmartphone, Code, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getKegiatans, getOrionNews, getPortofolios } from "@/lib/fetchers";

export default async function Home() {
    const kegiatans = await getKegiatans();
    const orionNews = await getOrionNews();
    const portofolios = await getPortofolios();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary">

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge variant="outline" className="mb-6 text-secondary border-secondary bg-secondary/10 px-4 py-1 text-sm font-medium backdrop-blur-sm">
                            Arsitek Transformasi Digital
                        </Badge>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Membangun <span className="text-secondary">Ekosistem Digital</span> Indonesia
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto">
                            Clasnet menghadirkan solusi komprehensif mulai dari Sistem Informasi Desa (SID), perangkat lunak kustom, hingga inovasi IoT dengan ekosistem Orion.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/layanan" className="w-full sm:w-auto px-8 py-4 bg-secondary text-white font-bold rounded-lg hover:bg-secondary/90 transition-all flex items-center justify-center hover:scale-105">
                                Pelajari Layanan Kami <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link href="/kontak" className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all flex items-center justify-center backdrop-blur-sm border border-white/20">
                                Hubungi Kami
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area - 3 Column Layout (Pondokrejo Style) */}
            <section className="py-12 bg-background relative -mt-10 z-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-4 gap-6">
                        
                        {/* LEFT SIDEBAR (col-span-1) */}
                        <div className="space-y-6 lg:col-span-1">
                            {/* Profil Perusahaan */}
                            <Card className="border-t-4 border-t-primary shadow-md">
                                <CardHeader className="pb-3">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                                        <Building2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">Profil Perusahaan</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-4">
                                        Sebagai pelopor inovasi teknologi Open Source dan IoT di Indonesia, Clasnet berkomitmen penuh pada pengembangan infrastruktur IT yang tangguh, aman, dan mudah digunakan.
                                    </p>
                                    <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white" asChild>
                                        <Link href="/profil">Profil Lengkap</Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Produk Unggulan Teaser */}
                            <Card className="shadow-md">
                                <CardHeader className="pb-3">
                                    <CardTitle className="text-lg flex items-center">
                                        <Cpu className="w-5 h-5 text-secondary mr-2" /> Produk Unggulan
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="bg-primary/5 p-3 rounded-lg border border-primary/10 hover:border-secondary/50 transition-colors">
                                        <h4 className="font-bold text-sm text-primary mb-1">Orion CMS</h4>
                                        <p className="text-xs text-muted-foreground mb-2">Platform website super ringan dengan kecepatan maksimal.</p>
                                        <Link href="/produk" className="text-xs font-semibold text-secondary hover:text-primary flex items-center">Selengkapnya <ArrowRight className="ml-1 w-3 h-3" /></Link>
                                    </div>
                                    <div className="bg-primary/5 p-3 rounded-lg border border-primary/10 hover:border-secondary/50 transition-colors">
                                        <h4 className="font-bold text-sm text-primary mb-1">Orion Versa</h4>
                                        <p className="text-xs text-muted-foreground mb-2">Sistem peringatan dini (EWS) dan perangkat IoT cerdas.</p>
                                        <Link href="/produk" className="text-xs font-semibold text-secondary hover:text-primary flex items-center">Selengkapnya <ArrowRight className="ml-1 w-3 h-3" /></Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* CENTER COLUMN (col-span-2) */}
                        <div className="space-y-8 lg:col-span-2">
                            {/* Layanan & Solusi */}
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-2xl font-bold text-primary flex items-center">
                                        <Sparkles className="w-6 h-6 text-secondary mr-2" /> Layanan & Solusi
                                    </h2>
                                    <Link href="/layanan" className="text-sm text-secondary hover:text-primary font-medium">Lihat Semua</Link>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <Link href="/layanan">
                                        <Card className="hover:shadow-md transition-all border-border bg-surface h-full hover:border-secondary/50 group">
                                            <CardContent className="p-5">
                                                <MonitorSmartphone className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                                                <h3 className="font-bold text-primary mb-2 group-hover:text-secondary">Sistem Informasi Desa</h3>
                                                <p className="text-sm text-muted-foreground">Digitalisasi tata kelola administrasi dan pelayanan publik desa secara terpadu.</p>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                    <Link href="/layanan">
                                        <Card className="hover:shadow-md transition-all border-border bg-surface h-full hover:border-secondary/50 group">
                                            <CardContent className="p-5">
                                                <Code className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                                                <h3 className="font-bold text-primary mb-2 group-hover:text-secondary">Aplikasi Kustom</h3>
                                                <p className="text-sm text-muted-foreground">Pengembangan sistem ERP, e-Gov, dan mobile app yang aman.</p>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                    <Link href="/layanan">
                                        <Card className="hover:shadow-md transition-all border-border bg-surface h-full hover:border-secondary/50 group">
                                            <CardContent className="p-5">
                                                <Server className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                                                <h3 className="font-bold text-primary mb-2 group-hover:text-secondary">Server & Infrastruktur</h3>
                                                <p className="text-sm text-muted-foreground">Layanan cloud VPS, arsitektur HA, dan pengelolaan data center mini.</p>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                    <Link href="/layanan">
                                        <Card className="hover:shadow-md transition-all border-border bg-surface h-full hover:border-secondary/50 group">
                                            <CardContent className="p-5">
                                                <Globe className="w-8 h-8 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                                                <h3 className="font-bold text-primary mb-2 group-hover:text-secondary">Integrasi Sistem</h3>
                                                <p className="text-sm text-muted-foreground">Interkoneksi data antar instansi, dasbor analitik, dan API eksternal.</p>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </div>
                            </div>

                            {/* Portofolio Pilihan */}
                            <div>
                                <div className="flex items-center justify-between mb-4 mt-8">
                                    <h2 className="text-2xl font-bold text-primary flex items-center">
                                        <Users className="w-6 h-6 text-secondary mr-2" /> Portofolio Unggulan
                                    </h2>
                                    <Link href="/portofolio" className="text-sm text-secondary hover:text-primary font-medium">Lihat Semua</Link>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {portofolios.length > 0 ? portofolios.slice(0, 2).map((item, idx) => (
                                        <Link key={idx} href="/portofolio" className="block group">
                                            <Card className="overflow-hidden border-border shadow-sm hover:shadow-md transition-all hover:border-secondary/50">
                                                <div className="aspect-[16/9] bg-primary/10 overflow-hidden relative">
                                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                </div>
                                                <CardContent className="p-4">
                                                    <Badge className="mb-2 bg-secondary/20 text-secondary border-none hover:bg-secondary/30">{item.category}</Badge>
                                                    <h4 className="font-bold text-primary text-sm line-clamp-1 group-hover:text-secondary transition-colors">{item.title}</h4>
                                                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{item.client}</p>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    )) : (
                                        <div className="col-span-2 text-center py-8 text-muted-foreground text-sm border rounded-lg border-dashed">
                                            Gagal memuat portofolio, silakan muat ulang.
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDEBAR (col-span-1) */}
                        <div className="space-y-6 lg:col-span-1">
                            {/* Kegiatan Terbaru */}
                            <Card className="shadow-md border-t-4 border-t-secondary">
                                <CardHeader className="pb-3 px-4">
                                    <CardTitle className="text-lg">Kegiatan Terbaru</CardTitle>
                                </CardHeader>
                                <CardContent className="px-4 pb-4 space-y-4">
                                    {kegiatans.length > 0 ? kegiatans.slice(0, 4).map((item, idx) => (
                                        <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 group border-b border-border/50 pb-3 last:border-0 last:pb-0">
                                            <div className="w-14 h-14 rounded-md overflow-hidden bg-primary/10 flex-shrink-0 relative">
                                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                            </div>
                                            <div className="flex-1">
                                                <h5 className="text-xs font-bold text-primary line-clamp-2 group-hover:text-secondary transition-colors leading-tight mb-1">{item.title}</h5>
                                                {item.date && <p className="text-[10px] text-muted-foreground">{item.date}</p>}
                                            </div>
                                        </a>
                                    )) : (
                                        <div className="text-center py-4 text-muted-foreground text-xs">Belum ada kegiatan.</div>
                                    )}
                                    <Button variant="ghost" className="w-full text-xs text-secondary hover:text-primary hover:bg-primary/5 mt-2" asChild>
                                        <Link href="/layanan">Semua Kegiatan &rarr;</Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Update Orion */}
                            <Card className="shadow-md bg-gradient-to-br from-primary/5 to-secondary/5 border-none">
                                <CardHeader className="pb-3 px-4">
                                    <CardTitle className="text-lg flex items-center">
                                        <Activity className="w-4 h-4 text-primary mr-2" /> Rilis Orion
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="px-4 pb-4 space-y-3">
                                    {orionNews.length > 0 ? orionNews.slice(0, 3).map((item, idx) => (
                                        <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="block group border-b border-primary/10 pb-3 last:border-0 last:pb-0">
                                            <h5 className="text-xs font-bold text-primary line-clamp-2 group-hover:text-secondary transition-colors" dangerouslySetInnerHTML={{__html: item.title}}></h5>
                                            <p className="text-[10px] text-muted-foreground mt-1 flex items-center"><ExternalLink className="w-3 h-3 mr-1"/> orionapp.clasnet.co.id</p>
                                        </a>
                                    )) : (
                                        <div className="text-center py-4 text-muted-foreground text-xs">Gagal memuat berita Orion.</div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
