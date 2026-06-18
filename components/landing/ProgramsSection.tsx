"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Home, Store, GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ProgramsSection() {
    const programs = [
        {
            id: "egov",
            title: "E-Government",
            icon: <Building className="w-5 h-5" />,
            image: "/uploads/Clasnet%20Group_files/feature.jpg",
            heading: "Solusi Digital untuk Perencanaan & Pengawasan di Lingkungan Pemerintah",
            features: [
                { title: "Sistem Informasi Perencanaan Daerah (e-Planning)", desc: "Membantu penyusunan rencana pembangunan daerah secara partisipatif, transparan, dan terintegrasi." },
                { title: "Sistem Informasi Keuangan Daerah (e-Budgeting)", desc: "Pengelolaan anggaran daerah yang akurat, efisien, dan dapat dipertanggungjawabkan." },
                { title: "Monitoring dan Evaluasi Kinerja", desc: "Memantau realisasi program dan pencapaian kinerja SKPD secara real-time berbasis data." }
            ],
            actionText: "Konsultasi E-Gov",
            actionLink: "/kontak"
        },
        {
            id: "desa",
            title: "Desa Pintar",
            icon: <Home className="w-5 h-5" />,
            image: "/uploads/Clasnet%20Group_files/desapintar.jpg",
            heading: "Pemanfaatan Teknologi untuk Kemajuan Desa Berbasis Data",
            features: [
                { title: "Manajemen Data Desa Terintegrasi", desc: "Aplikasi SID mengelola data penduduk, program, dan aset secara terstruktur dan real-time." },
                { title: "Pengambilan Keputusan Berbasis Data", desc: "Data akurat memudahkan pemerintah desa merancang kebijakan dan program yang tepat sasaran." },
                { title: "Mudah Diakses & Digunakan", desc: "Dirancang user-friendly agar mudah digunakan oleh perangkat desa tanpa latar belakang IT." }
            ],
            actionText: "Kunjungi SID",
            actionLink: "https://desa-s.id/"
        },
        {
            id: "umkm",
            title: "UMKM Mandiri",
            icon: <Store className="w-5 h-5" />,
            image: "/uploads/Clasnet%20Group_files/umkm.jpg",
            heading: "Pengelolaan UMKM Lebih Mudah dengan Sistem Informasi Digital",
            features: [
                { title: "Sistem Terintegrasi", desc: "Mengelola data pelaku UMKM, inventaris, transaksi, dan laporan keuangan terpadu." },
                { title: "Analisis & Pelaporan", desc: "Membantu pemerintah daerah dalam membuat kebijakan berbasis data aktual." },
                { title: "Dukungan Pemasaran Digital", desc: "Integrasi sistem pemasaran online untuk memperluas jangkauan pasar." }
            ],
            actionText: "Konsultasi UMKM",
            actionLink: "/kontak"
        },
        {
            id: "sekolah",
            title: "Sekolah Unggul",
            icon: <GraduationCap className="w-5 h-5" />,
            image: "/uploads/Clasnet%20Group_files/sekolahunggul.jpg",
            heading: "Transformasi Manajemen Akademik Sekolah dengan Sistem Digital",
            features: [
                { title: "Sistem Terintegrasi", desc: "Mengelola kegiatan belajar, presensi, nilai, jadwal, dan administrasi sekolah digital." },
                { title: "Analisis Kinerja Siswa & Guru", desc: "Mengevaluasi kinerja siswa dan guru untuk peningkatan mutu pendidikan." },
                { title: "Fasilitasi Pembelajaran Hybrid", desc: "Mendukung pembelajaran daring, luring, dan campuran lengkap dengan e-learning." }
            ],
            actionText: "Konsultasi Sekolah",
            actionLink: "/kontak"
        },
        {
            id: "industri",
            title: "Kelas Industri",
            icon: <Briefcase className="w-5 h-5" />,
            image: "/uploads/Clasnet%20Group_files/kelasindustri.jpg",
            heading: "Link & Match antara Sekolah dengan Dunia Usaha dan Dunia Kerja",
            features: [
                { title: "Pendekatan Kolaboratif", desc: "Wadah kolaborasi antara SMK dengan industri untuk menciptakan lulusan siap kerja." },
                { title: "Peningkatan Mutu Pendidikan", desc: "Meningkatkan mutu pendidikan vokasi melalui kurikulum berbasis industri." },
                { title: "Pelatihan Praktis", desc: "Memberikan pengalaman kerja nyata dengan bimbingan langsung dari profesional." }
            ],
            actionText: "Selengkapnya",
            actionLink: "https://kelasindustri.clasnet.co.id/"
        }
    ];

    return (
        <section className="py-12 bg-background relative z-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-secondary font-bold uppercase tracking-wider text-sm">Program Unggulan</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
                        Solusi Berdampak Untuk Berbagai Sektor
                    </h2>
                </div>

                <Tabs defaultValue="egov" className="w-full max-w-6xl mx-auto">
                    <div className="flex justify-center mb-8 overflow-x-auto pb-2 scrollbar-hide">
                        <TabsList className="bg-primary/5 border border-primary/10 h-auto p-1 flex-nowrap rounded-full gap-1">
                            {programs.map((prog) => (
                                <TabsTrigger 
                                    key={prog.id} 
                                    value={prog.id} 
                                    className="rounded-full px-6 py-3 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md transition-all whitespace-nowrap text-sm font-medium flex items-center gap-2"
                                >
                                    {prog.icon} {prog.title}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {programs.map((prog) => (
                        <TabsContent key={prog.id} value={prog.id} className="mt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <Card className="p-0 shadow-md hover:shadow-lg transition-all border-border bg-card overflow-hidden hover:border-secondary/50 group">
                                <div className="grid md:grid-cols-5 gap-0 min-h-[400px]">
                                    <div className="md:col-span-2 relative p-8 md:p-12 text-white flex flex-col justify-center overflow-hidden">
                                        <img src={prog.image} alt={prog.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-90"></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent"></div>
                                        
                                        <div className="relative z-10">
                                            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/30 shadow-lg">
                                                {prog.icon}
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4 leading-tight">{prog.heading}</h3>
                                            <Button asChild variant="secondary" size="lg" className="w-fit mt-6 shadow-lg hover:scale-105 transition-transform">
                                                {prog.actionLink.startsWith("http") ? (
                                                    <a href={prog.actionLink} target="_blank" rel="noopener noreferrer">{prog.actionText}</a>
                                                ) : (
                                                    <Link href={prog.actionLink}>{prog.actionText}</Link>
                                                )}
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="md:col-span-3 p-8 md:p-12 bg-white flex flex-col justify-center">
                                        <div className="space-y-8">
                                            {prog.features.map((feat, idx) => (
                                                <div key={idx} className="flex gap-4">
                                                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-1 text-secondary font-bold text-sm">
                                                        {idx + 1}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-primary text-lg mb-2">{feat.title}</h4>
                                                        <p className="text-muted-foreground leading-relaxed">
                                                            {feat.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
}
