import React from "react";
import { Cpu, Code, Layers, Zap, Download, ExternalLink, ArrowRight, ShieldCheck, Box, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getOrionNews } from "@/lib/fetchers";

export const metadata = {
    title: "Produk & Inovasi (Orion) | Clasnet",
    description: "Ekosistem produk Orion dari Clasnet, termasuk Orion CMS dan Orion Versa (IoT).",
};

export default async function ProdukPage() {
    const orionNews = await getOrionNews();

    return (
        <div className="pb-20">
            {/* Header Section */}
            <section className="bg-primary text-white pt-32 pb-16 mb-16">
                <div className="container mx-auto px-4 text-center">
                    <Badge variant="outline" className="text-secondary border-secondary mb-4">Ekosistem Orion</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Produk & Inovasi In-House</h1>
                    <p className="text-xl max-w-3xl mx-auto text-primary-foreground/80">
                        Mempersembahkan Orion: Jajaran produk unggulan Clasnet yang dirancang untuk kecepatan, keamanan, dan fleksibilitas tingkat tinggi.
                    </p>
                </div>
            </section>

            {/* Orion CMS Section */}
            <section className="container mx-auto px-4 mb-24">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/2 space-y-6">
                        <div className="flex items-center space-x-3 mb-2">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                <Layers className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold text-primary">Orion CMS</h2>
                        </div>
                        <h3 className="text-xl text-muted-foreground font-medium">Platform Manajemen Konten Super Ringan</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Orion CMS adalah Content Management System modern yang dirancang sangat ringan dan difokuskan pada kecepatan. Hadir sebagai solusi Open Source (Lisensi MIT) untuk membangun website profesional dalam hitungan menit.
                        </p>
                        
                        <div className="grid sm:grid-cols-2 gap-4 mt-8">
                            <div className="flex items-start">
                                <Zap className="w-5 h-5 text-secondary mr-3 mt-1" />
                                <div>
                                    <h4 className="font-bold text-primary">Ultra Cepat</h4>
                                    <p className="text-sm text-muted-foreground">Arsitektur ringan yang meminimalisir overhead dan loading time.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Box className="w-5 h-5 text-secondary mr-3 mt-1" />
                                <div>
                                    <h4 className="font-bold text-primary">Mudah Digunakan</h4>
                                    <p className="text-sm text-muted-foreground">Antarmuka intuitif dan manajemen konten yang sangat praktis.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <ShieldCheck className="w-5 h-5 text-secondary mr-3 mt-1" />
                                <div>
                                    <h4 className="font-bold text-primary">Aman & Stabil</h4>
                                    <p className="text-sm text-muted-foreground">Sistem keamanan bawaan yang tangguh terhadap berbagai ancaman.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Code className="w-5 h-5 text-secondary mr-3 mt-1" />
                                <div>
                                    <h4 className="font-bold text-primary">Lisensi MIT</h4>
                                    <p className="text-sm text-muted-foreground">Bebas dikembangkan dan dimodifikasi tanpa batasan.</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 flex flex-wrap gap-4">
                            <a 
                                href="https://orionapp.clasnet.co.id/download/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                <Download className="w-4 h-4 mr-2" /> Download Gratis
                            </a>
                            <a 
                                href="https://orionapp.clasnet.co.id/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center justify-center px-6 py-3 bg-surface text-primary border border-border font-medium rounded-lg hover:bg-primary/5 transition-colors"
                            >
                                <ExternalLink className="w-4 h-4 mr-2" /> Kunjungi Website
                            </a>
                        </div>
                    </div>
                    
                    <div className="lg:w-1/2">
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-[2.5rem] blur-xl opacity-70"></div>
                            
                            <div className="relative bg-white border border-border rounded-2xl shadow-2xl overflow-hidden">
                                <div className="bg-slate-100 border-b border-border p-3 flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    <div className="ml-4 text-xs text-slate-400 font-mono">orionapp.clasnet.co.id</div>
                                </div>
                                <div className="aspect-[4/3] bg-primary/5 flex items-center justify-center overflow-hidden">
                                    <img 
                                        src="https://orionapp.clasnet.co.id/assets/img/CMS-ORION-ONE.png" 
                                        alt="Orion CMS Interface" 
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4"><hr className="border-border mb-24" /></div>

            {/* Orion Versa Section */}
            <section className="container mx-auto px-4 mb-20">
                <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                    <div className="lg:w-1/2 space-y-6">
                        <div className="flex items-center space-x-3 mb-2">
                            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                                <Cpu className="w-6 h-6 text-secondary" />
                            </div>
                            <h2 className="text-3xl font-bold text-primary">Orion Versa (IoT)</h2>
                        </div>
                        <h3 className="text-xl text-muted-foreground font-medium">Solusi Internet of Things Terpadu</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Orion Versa adalah divisi perangkat keras dan sistem *Internet of Things* (IoT) kami yang menghadirkan kecerdasan buatan ke dunia nyata. Berbagai modul pintar dirancang untuk meningkatkan keselamatan, otomatisasi, dan efisiensi.
                        </p>
                        
                        <div className="space-y-4 mt-8">
                            <Card className="border-border shadow-sm">
                                <CardContent className="p-5 flex items-start">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                                        <Activity className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">Sistem Peringatan Dini Bencana</h4>
                                        <p className="text-sm text-muted-foreground">Integrasi sensor deteksi getaran dan perubahan lingkungan yang terhubung langsung ke *command center*.</p>
                                    </div>
                                </CardContent>
                            </Card>
                            
                            <Card className="border-border shadow-sm">
                                <CardContent className="p-5 flex items-start">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                                        <Cpu className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">IoT Command Center</h4>
                                        <p className="text-sm text-muted-foreground">Platform visualisasi data yang memantau kondisi seluruh sensor di lapangan secara real-time dari satu layar dashboard.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="pt-6">
                            <a 
                                href="https://orion.clasnet.co.id/?page_id=14" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-flex items-center text-secondary hover:text-primary transition-colors font-medium"
                            >
                                Pelajari Lebih Lanjut Tentang Orion Versa <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                        </div>
                    </div>
                    
                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <img 
                                    src="https://orion.clasnet.co.id/wp-content/uploads/2026/03/orion-ws-600x380.jpg" 
                                    alt="Orion Weather Station" 
                                    className="w-full rounded-2xl shadow-lg object-cover aspect-square"
                                />
                                <img 
                                    src="https://orion.clasnet.co.id/wp-content/uploads/2026/03/orion-landguard-600x406.jpg" 
                                    alt="Orion Landguard" 
                                    className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]"
                                />
                            </div>
                            <div className="space-y-4 pt-12">
                                <img 
                                    src="https://orion.clasnet.co.id/wp-content/uploads/2026/03/riverguard-600x306.jpg" 
                                    alt="Orion Riverguard" 
                                    className="w-full rounded-2xl shadow-lg object-cover aspect-[4/3]"
                                />
                                <img 
                                    src="https://orion.clasnet.co.id/wp-content/uploads/2026/01/5ca2be5b-7367-4738-89f4-1fdc2fb68ab4-scaled-600x338.jpg" 
                                    alt="Orion Command Center" 
                                    className="w-full rounded-2xl shadow-lg object-cover aspect-square"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Orion Updates */}
            {orionNews.length > 0 && (
                <section className="bg-surface py-20 border-t border-border mt-10">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <Badge variant="outline" className="border-secondary text-secondary bg-secondary/10 mb-3">Update Terbaru</Badge>
                            <h2 className="text-3xl font-bold text-primary mb-4">Berita & Rilis Orion CMS</h2>
                            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {orionNews.slice(0, 4).map((item, idx) => (
                                <a key={idx} href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
                                    <Card className="h-full border-border hover:border-secondary/50 transition-all shadow-sm group-hover:shadow-md">
                                        <div className="aspect-[4/3] overflow-hidden bg-primary/5">
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        </div>
                                        <CardContent className="p-5">
                                            <h3 className="font-bold text-primary mb-2 line-clamp-2 group-hover:text-secondary transition-colors" dangerouslySetInnerHTML={{__html: item.title}}></h3>
                                            <p className="text-xs text-muted-foreground line-clamp-3 mb-3">{item.desc}</p>
                                        </CardContent>
                                    </Card>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
