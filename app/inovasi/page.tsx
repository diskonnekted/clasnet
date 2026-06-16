import React from "react";
import { ExternalLink, Rocket, Lightbulb, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getInovasiSid, getInovasiArif } from "@/lib/fetchers";

export const metadata = {
    title: "Pusat Inovasi | Clasnet",
    description: "Kumpulan inovasi, purwarupa, dan produk riset terbaru dari Clasnet dan tim Kreator kami.",
};

export default async function InovasiPage() {
    const inovasiSid = await getInovasiSid();
    const inovasiArif = await getInovasiArif();
    
    // Combine and randomize slightly or just list them sequentially
    const allInovasi = [...inovasiArif, ...inovasiSid];

    return (
        <div className="pb-20">
            {/* Header Section */}
            <section className="bg-primary text-white pt-32 pb-16 mb-16 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
                    <Rocket className="w-96 h-96" />
                </div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <Badge variant="outline" className="text-secondary border-secondary mb-4 bg-secondary/10">Clasnet Labs & Research</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Pusat Inovasi</h1>
                    <p className="text-xl max-w-3xl mx-auto text-primary-foreground/80">
                        Eksplorasi kumpulan purwarupa, ide, dan produk revolusioner hasil kolaborasi tim riset kami. Dari sistem IoT cerdas hingga komputasi kuantum.
                    </p>
                </div>
            </section>

            {/* Inovasi Grid */}
            <section className="container mx-auto px-4 mb-20" id="inovasi-grid">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-4 flex justify-center items-center">
                        <Lightbulb className="mr-3 text-secondary w-8 h-8" /> Etalase Inovasi Terkini
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allInovasi.length > 0 ? allInovasi.map((item, idx) => (
                        <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
                            <Card className="overflow-hidden border-border hover:border-secondary/50 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md h-full flex flex-col">
                                <div className="aspect-[4/3] bg-primary/5 relative overflow-hidden flex items-center justify-center p-4">
                                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500" 
                                    />
                                    <Badge className="absolute top-4 right-4 z-20 bg-primary shadow-lg border-none text-xs">
                                        {item.source}
                                    </Badge>
                                </div>
                                <CardContent className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground mb-6 flex-grow">{item.desc}</p>
                                    <div className="flex items-center text-xs font-semibold text-secondary mt-auto pt-4 border-t border-border">
                                        Kunjungi Proyek <ExternalLink className="w-3 h-3 ml-1" />
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    )) : (
                        <div className="col-span-3 text-center py-20 text-muted-foreground">
                            <Zap className="w-12 h-12 text-primary/20 mx-auto mb-4" />
                            Gagal mengambil data inovasi, silakan muat ulang.
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
