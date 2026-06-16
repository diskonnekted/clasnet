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
                            src="https://orion.clasnet.co.id/wp-content/uploads/2026/01/5ca2be5b-7367-4738-89f4-1fdc2fb68ab4-scaled-600x338.jpg" 
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
                        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="p-8 text-center">
                                <Shield className="w-12 h-12 text-secondary mx-auto mb-6" />
                                <h3 className="text-xl font-bold text-primary mb-4">Profesional & Akuntabel</h3>
                                <p className="text-muted-foreground">Setiap solusi yang kami bangun didasarkan pada standar industri tertinggi dan dapat dipertanggungjawabkan keandalannya.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="p-8 text-center">
                                <Users className="w-12 h-12 text-secondary mx-auto mb-6" />
                                <h3 className="text-xl font-bold text-primary mb-4">Kolaboratif</h3>
                                <p className="text-muted-foreground">Kami percaya pada kekuatan Open Source dan pengembangan yang melibatkan partisipasi aktif dari komunitas dan klien.</p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="p-8 text-center">
                                <Handshake className="w-12 h-12 text-secondary mx-auto mb-6" />
                                <h3 className="text-xl font-bold text-primary mb-4">Pendampingan Berkelanjutan</h3>
                                <p className="text-muted-foreground">Kami tidak hanya membangun sistem, tetapi juga memastikan pengguna memahami dan dapat memanfaatkannya secara maksimal.</p>
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
                            <div className="md:w-1/3 bg-primary/10">
                                <img 
                                    src="https://orion.clasnet.co.id/wp-content/uploads/2026/03/orion-ws-600x380.jpg" 
                                    alt="Arif Susilo" 
                                    className="w-full h-full object-cover min-h-[300px]"
                                />
                            </div>
                            <div className="p-8 md:w-2/3 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold text-primary mb-1">Arif Susilo</h3>
                                <p className="text-secondary font-medium mb-4">IT Architect & Founder</p>
                                <p className="text-muted-foreground mb-4">
                                    Sebagai inisiator utama, Arif Susilo memimpin visi teknis Clasnet. Dengan pengalaman bertahun-tahun dalam pengembangan perangkat lunak dan arsitektur infrastruktur, beliau berfokus pada perancangan sistem yang efisien, aman, dan mudah diakses oleh berbagai lapisan masyarakat.
                                </p>
                                <p className="text-muted-foreground">
                                    Filosofi pengembangan beliau tercermin dalam platform Orion CMS yang mengutamakan kecepatan dan keringanan, serta Orion Versa yang membawa solusi IoT cerdas ke tingkat praktis.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
}
