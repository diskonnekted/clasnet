import React from "react";
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/kontak/ContactForm";

export const metadata = {
    title: "Hubungi Kami | Clasnet",
    description: "Informasi kontak, lokasi kantor, dan jam operasional CV. Clasnet.",
};

export default function KontakPage() {
    return (
        <div className="pb-20">
            {/* Header Section */}
            <section className="bg-primary text-white pt-32 pb-16 mb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
                    <p className="text-xl max-w-3xl mx-auto text-primary-foreground/80">
                        Kami siap mendengarkan kebutuhan dan membantu mewujudkan visi transformasi digital Anda. Hubungi kami melalui informasi di bawah ini.
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="container mx-auto px-4 mb-20">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Kantor Pusat */}
                        <Card className="border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-shadow bg-surface group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                            <CardContent className="p-8 h-full flex flex-col relative z-10">
                                <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-border/60">
                                    <div className="w-14 h-14 bg-secondary/10 group-hover:bg-secondary transition-colors rounded-2xl flex items-center justify-center">
                                        <Building2 className="text-secondary group-hover:text-white w-7 h-7 transition-colors" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-primary">Kantor Pusat</h2>
                                </div>
                                
                                <div className="flex-1 flex flex-col justify-center">
                                    <div className="flex items-start bg-muted/40 p-6 rounded-2xl border border-border/50 hover:border-secondary/40 transition-colors">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mr-5 flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Alamat Lengkap</h3>
                                            <p className="text-lg text-foreground font-medium leading-relaxed">
                                                Perum Kalisemi Baru D5 No.7<br />
                                                Banjarnegara 53412<br />
                                                Indonesia
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Kontak & Operasional */}
                        <Card className="border-t-4 border-t-primary shadow-lg hover:shadow-xl transition-shadow bg-surface group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                            <CardContent className="p-8 h-full flex flex-col relative z-10">
                                <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-border/60">
                                    <div className="w-14 h-14 bg-primary/10 group-hover:bg-primary transition-colors rounded-2xl flex items-center justify-center">
                                        <Phone className="text-primary group-hover:text-white w-7 h-7 transition-colors" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-primary">Informasi Kontak</h2>
                                </div>
                                
                                <ul className="space-y-4 flex-1">
                                    <li className="flex items-center bg-muted/40 p-4 rounded-xl border border-border/50 hover:border-primary/40 transition-colors">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-4 flex-shrink-0">
                                            <Phone className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Telepon & WhatsApp</h3>
                                            <p className="text-base text-foreground font-semibold">+62 851 1704 1846</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center bg-muted/40 p-4 rounded-xl border border-border/50 hover:border-primary/40 transition-colors">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-4 flex-shrink-0">
                                            <Mail className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Email Resmi</h3>
                                            <p className="text-base text-foreground font-semibold">info@clasnet.id</p>
                                        </div>
                                    </li>
                                    <li className="flex items-center bg-muted/40 p-4 rounded-xl border border-border/50 hover:border-primary/40 transition-colors">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mr-4 flex-shrink-0">
                                            <Clock className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">Jam Operasional</h3>
                                            <p className="text-sm text-foreground font-semibold">Senin - Jumat: 08:00 - 16:00 WIB</p>
                                        </div>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="container mx-auto px-4 mb-20">
                <div className="max-w-5xl mx-auto">
                    <ContactForm />
                </div>
            </section>
        </div>
    );
}
