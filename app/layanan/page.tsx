import React from "react";
import { Server, MonitorSmartphone, Code, GraduationCap, ArrowRight, Activity, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getKegiatans } from "@/lib/fetchers";

export const metadata = {
    title: "Layanan & Solusi | Clasnet",
    description: "Layanan Sistem Informasi Desa (SID), pembuatan aplikasi kustom, penyediaan server, dan edukasi dari Clasnet.",
};

export default async function LayananPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string }>;
}) {
    const sp = await searchParams;
    const currentPage = Number(sp?.page) || 1;
    const kegiatans = await getKegiatans(currentPage);
    
    // Check if there's likely a next page. test_kegiatan.js showed 9 items per page.
    const hasNextPage = kegiatans.length >= 9;

    return (
        <div className="pb-20">
            {/* Header Section */}
            <section className="bg-primary text-white pt-32 pb-16 mb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Layanan & Solusi Digital</h1>
                    <p className="text-xl max-w-3xl mx-auto text-primary-foreground/80">
                        Kami menyediakan ekosistem layanan teknologi terlengkap untuk mempercepat transformasi digital instansi Anda.
                    </p>
                </div>
            </section>

            {/* Main Services */}
            <section className="container mx-auto px-4 mb-20">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* SID */}
                    <div className="bg-surface rounded-3xl p-8 border border-border">
                        <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                            <MonitorSmartphone className="text-secondary w-7 h-7" />
                        </div>
                        <h2 className="text-2xl font-bold text-primary mb-4">Sistem Informasi Desa (SID)</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Membantu pemerintah desa mengelola administrasi, kependudukan, dan pelayanan publik secara digital dengan mudah dan transparan menggunakan platform yang sesuai dengan standar terkini.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-sm font-medium text-primary"><ArrowRight className="w-4 h-4 text-secondary mr-2" /> Database Kependudukan Terpadu</li>
                            <li className="flex items-center text-sm font-medium text-primary"><ArrowRight className="w-4 h-4 text-secondary mr-2" /> Layanan Surat Menyurat Mandiri</li>
                            <li className="flex items-center text-sm font-medium text-primary"><ArrowRight className="w-4 h-4 text-secondary mr-2" /> Portal Informasi Publik Desa</li>
                        </ul>
                    </div>

                    {/* Dasbor SID */}
                    <div className="bg-surface rounded-3xl p-8 border border-border">
                        <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                            <Activity className="text-secondary w-7 h-7" />
                        </div>
                        <h2 className="text-2xl font-bold text-primary mb-4">Dasbor SID Tingkat Kabupaten</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Platform monitoring terpusat untuk pemerintah kabupaten yang mengintegrasikan data dari ratusan desa (seperti di Banjarnegara). Menyajikan analitik real-time dan statistik kependudukan.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-sm font-medium text-primary"><ArrowRight className="w-4 h-4 text-secondary mr-2" /> Rekapitulasi Data Desa se-Kabupaten</li>
                            <li className="flex items-center text-sm font-medium text-primary"><ArrowRight className="w-4 h-4 text-secondary mr-2" /> Pemetaan Interaktif (GIS)</li>
                            <li className="flex items-center text-sm font-medium text-primary"><ArrowRight className="w-4 h-4 text-secondary mr-2" /> Sinkronisasi Otomatis</li>
                        </ul>
                    </div>

                    {/* Custom App */}
                    <div className="bg-surface rounded-3xl p-8 border border-border">
                        <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                            <Code className="text-secondary w-7 h-7" />
                        </div>
                        <h2 className="text-2xl font-bold text-primary mb-4">Pengembangan Aplikasi Kustom</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Membangun sistem informasi dan aplikasi spesifik (Mobile & Web) yang disesuaikan dengan alur bisnis perusahaan atau institusi Anda, memastikan efisiensi dan keamanan.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-sm font-medium text-primary"><ArrowRight className="w-4 h-4 text-secondary mr-2" /> e-Government Apps</li>
                            <li className="flex items-center text-sm font-medium text-primary"><ArrowRight className="w-4 h-4 text-secondary mr-2" /> Sistem Manajemen Bisnis (ERP/CRM)</li>
                        </ul>
                    </div>

                    {/* Server & Infrastructure */}
                    <div className="bg-surface rounded-3xl p-8 border border-border">
                        <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                            <Server className="text-secondary w-7 h-7" />
                        </div>
                        <h2 className="text-2xl font-bold text-primary mb-4">Penyediaan Server & Infrastruktur</h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            Menyediakan layanan hosting dan server dedikasi dengan tingkat keamanan tinggi untuk memastikan aplikasi dan data Anda dapat diakses dengan cepat kapan saja.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center text-sm font-medium text-primary"><ArrowRight className="w-4 h-4 text-secondary mr-2" /> Cloud VPS Terkelola</li>
                            <li className="flex items-center text-sm font-medium text-primary"><ArrowRight className="w-4 h-4 text-secondary mr-2" /> Arsitektur High Availability</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Edukasi & Magang */}
            <section className="py-16 mb-20">
                <div className="container mx-auto px-4">
                    <Card className="bg-primary text-white border-none overflow-hidden rounded-3xl">
                        <div className="md:flex items-center">
                            <div className="p-10 md:w-2/3">
                                <Badge className="bg-secondary/20 text-secondary hover:bg-secondary/30 mb-4 border-none">Clasnet Edu</Badge>
                                <h2 className="text-3xl font-bold mb-4">Edukasi & Pendampingan Magang (Prakerin)</h2>
                                <p className="text-primary-foreground/80 leading-relaxed mb-6">
                                    Sebagai bentuk tanggung jawab sosial, Clasnet membuka ruang bagi pelajar dan mahasiswa melalui program Praktek Kerja Industri (Prakerin). Kami melatih talenta muda dengan kurikulum berbasis proyek nyata industri.
                                </p>
                                <ul className="space-y-2 text-sm text-primary-foreground/80">
                                    <li className="flex items-center"><GraduationCap className="w-4 h-4 mr-2 text-secondary" /> Mentoring Langsung oleh Praktisi IT</li>
                                    <li className="flex items-center"><GraduationCap className="w-4 h-4 mr-2 text-secondary" /> Terlibat dalam Proyek Aplikasi Nyata</li>
                                </ul>
                            </div>
                            <div className="md:w-1/3 p-10 flex justify-center">
                                <div className="w-40 h-40 bg-white/10 rounded-full flex items-center justify-center">
                                    <GraduationCap className="w-20 h-20 text-secondary" />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Kegiatan Terbaru (Fetched Ideas) */}
            <section className="container mx-auto px-4 mb-20" id="kegiatan-grid">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">Kegiatan & Implementasi Terbaru</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {kegiatans.length > 0 ? kegiatans.map((item, idx) => (
                        <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
                            <Card className="overflow-hidden border-border hover:border-secondary/50 transition-all hover:shadow-lg h-full">
                                <div className="aspect-[16/9] bg-primary/10 overflow-hidden relative">
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                        {item.desc}
                                    </p>
                                    <div className="mt-4 flex items-center text-sm font-semibold text-secondary">
                                        Baca Selengkapnya <ArrowRight className="w-4 h-4 ml-1" />
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    )) : (
                        <div className="col-span-3 text-center py-10 text-muted-foreground">
                            {currentPage > 1 ? "Anda telah mencapai akhir dari berita kegiatan." : "Gagal mengambil berita kegiatan, silakan muat ulang."}
                        </div>
                    )}
                </div>

                {/* Kegiatan Pagination Controls */}
                <div className="flex items-center justify-center space-x-4">
                    {currentPage > 1 && (
                        <a 
                            href={`/layanan?page=${currentPage - 1}#kegiatan-grid`}
                            className="px-6 py-2 rounded-lg bg-surface border border-border text-primary hover:bg-primary/5 transition-colors font-medium"
                        >
                            &laquo; Sebelumnya
                        </a>
                    )}
                    
                    <span className="text-muted-foreground">
                        Halaman {currentPage}
                    </span>

                    {hasNextPage && (
                        <a 
                            href={`/layanan?page=${currentPage + 1}#kegiatan-grid`}
                            className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors font-medium"
                        >
                            Selanjutnya &raquo;
                        </a>
                    )}
                </div>
            </section>
        </div>
    );
}
