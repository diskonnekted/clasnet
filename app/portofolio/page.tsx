import React from "react";
import { ArrowRight, ExternalLink, Archive, Globe, Building2, Users, Laptop } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getPortofolios, getArsipData } from "@/lib/fetchers";

export const metadata = {
    title: "Portofolio & Arsip Proyek | Clasnet",
    description: "Kumpulan karya, solusi digital, dan arsip proyek yang dikerjakan oleh Clasnet.",
};

export default async function PortofolioPage({
    searchParams,
}: {
    searchParams: Promise<{ page?: string, arsipPage?: string }>;
}) {
    const sp = await searchParams;
    const currentPage = Number(sp?.page) || 1;
    const currentArsipPage = Number(sp?.arsipPage) || 1;

    const portofolios = await getPortofolios(currentPage);
    const arsip = await getArsipData(currentArsipPage);

    // Check if we have next page by peeking (or just assume true if 6 items)
    const hasNextPage = portofolios.length >= 6;
    const hasNextArsipPage = arsip.length >= 4;

    return (
        <div className="pb-20">
            {/* Header Section */}
            <section className="bg-primary text-white pt-32 pb-16 mb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Portofolio Kami</h1>
                    <p className="text-xl max-w-3xl mx-auto text-primary-foreground/80">
                        Menjelajahi berbagai solusi digital inovatif yang telah kami kembangkan untuk berbagai sektor, dari pemerintahan hingga UMKM.
                    </p>
                </div>
            </section>

            {/* Portofolio Utama Section */}
            <section className="container mx-auto px-4 mb-20" id="portofolio-grid">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">Proyek Unggulan</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {portofolios.length > 0 ? portofolios.map((item, idx) => (
                        <Card key={idx} className="overflow-hidden border-border hover:border-secondary/50 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md group">
                            <div className="aspect-video bg-primary/10 relative overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <CardContent className="p-6">
                                <Badge className="mb-3 bg-secondary hover:bg-secondary/90 text-white border-none">{item.category}</Badge>
                                <h3 className="text-xl font-bold text-primary mb-2 line-clamp-1">{item.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.desc}</p>
                                <div className="flex items-center justify-between text-xs text-primary/70 font-medium pt-4 border-t border-border">
                                    <span>{item.client}</span>
                                    <span>{item.year}</span>
                                </div>
                            </CardContent>
                        </Card>
                    )) : (
                        <div className="col-span-3 text-center py-10 text-muted-foreground">
                            {currentPage > 1 ? "Halaman ini kosong. Anda telah mencapai akhir dari portofolio." : "Gagal mengambil portofolio, silakan muat ulang."}
                        </div>
                    )}
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center justify-center space-x-4">
                    {currentPage > 1 && (
                        <a 
                            href={`/portofolio?page=${currentPage - 1}&arsipPage=${currentArsipPage}#portofolio-grid`}
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
                            href={`/portofolio?page=${currentPage + 1}&arsipPage=${currentArsipPage}#portofolio-grid`}
                            className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors font-medium"
                        >
                            Selanjutnya &raquo;
                        </a>
                    )}
                </div>
            </section>

            {/* Arsip Proyek Section */}
            <section className="bg-surface py-20 border-t border-border" id="arsip-grid">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-primary/5 rounded-3xl p-8 lg:p-12 border border-primary/10 mb-12">
                        <div className="md:w-2/3 space-y-4">
                            <Badge variant="outline" className="border-secondary text-secondary bg-secondary/10">Arsip Digital</Badge>
                            <h2 className="text-3xl font-bold text-primary">Arsip Proyek & Dokumentasi</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Jelajahi sejarah perjalanan dan berbagai kumpulan proyek masa lalu yang pernah digarap oleh Clasnet. Anda dapat menemukan jejak rekam karya, catatan rilis, dan dokumentasi mendetail di portal arsip khusus kami.
                            </p>
                        </div>
                        <div className="md:w-1/3 flex justify-center md:justify-end">
                            <a 
                                href="https://streaming.data.blog/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="group flex flex-col items-center justify-center w-full max-w-[280px] aspect-square bg-white rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all p-6 text-center border border-border"
                            >
                                <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <ExternalLink className="w-10 h-10 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg text-primary mb-2">Kunjungi Portal Arsip</h3>
                                <p className="text-sm text-muted-foreground">streaming.data.blog</p>
                            </a>
                        </div>
                    </div>

                    {/* Fetched Arsip */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {arsip.length > 0 ? arsip.map((item, idx) => (
                            <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
                                <Card className="h-full border-border hover:border-secondary/50 transition-all shadow-sm group-hover:shadow-md">
                                    <div className="aspect-[4/3] overflow-hidden bg-primary/5">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <CardContent className="p-5">
                                        <div className="text-xs text-muted-foreground mb-2 flex items-center">
                                            <Archive className="w-3 h-3 mr-1" /> {item.date}
                                        </div>
                                        <h3 className="font-bold text-primary mb-2 line-clamp-2 group-hover:text-secondary transition-colors" dangerouslySetInnerHTML={{__html: item.title}}></h3>
                                    </CardContent>
                                </Card>
                            </a>
                        )) : (
                            <div className="col-span-4 text-center py-10 text-muted-foreground">
                                {currentArsipPage > 1 ? "Anda telah mencapai halaman akhir arsip." : "Gagal memuat data arsip."}
                            </div>
                        )}
                    </div>

                    {/* Arsip Pagination Controls */}
                    <div className="flex items-center justify-center space-x-4">
                        {currentArsipPage > 1 && (
                            <a 
                                href={`/portofolio?page=${currentPage}&arsipPage=${currentArsipPage - 1}#arsip-grid`}
                                className="px-6 py-2 rounded-lg bg-surface border border-border text-primary hover:bg-primary/5 transition-colors font-medium"
                            >
                                &laquo; Sebelumnya
                            </a>
                        )}
                        
                        <span className="text-muted-foreground">
                            Halaman {currentArsipPage}
                        </span>

                        {hasNextArsipPage && (
                            <a 
                                href={`/portofolio?page=${currentPage}&arsipPage=${currentArsipPage + 1}#arsip-grid`}
                                className="px-6 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors font-medium"
                            >
                                Selanjutnya &raquo;
                            </a>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
