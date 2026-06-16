import React from "react";
import { MapPin, Phone, Mail, Clock, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Kantor Pusat */}
                        <Card className="border-border shadow-md">
                            <CardContent className="p-8">
                                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                                    <Building2 className="text-secondary w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-primary mb-6">Kantor Pusat</h2>
                                
                                <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <MapPin className="w-6 h-6 text-muted-foreground mr-4 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold text-primary mb-1">Alamat</h3>
                                            <p className="text-muted-foreground">
                                                Jln. Raya Banjarnegara - Purwokerto KM 12<br />
                                                Kabupaten Banjarnegara, Jawa Tengah<br />
                                                Indonesia, 53471
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Kontak & Operasional */}
                        <Card className="border-border shadow-md">
                            <CardContent className="p-8">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <Phone className="text-primary w-6 h-6" />
                                </div>
                                <h2 className="text-2xl font-bold text-primary mb-6">Informasi Kontak</h2>
                                
                                <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <Phone className="w-6 h-6 text-muted-foreground mr-4 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-primary mb-1">Telepon & WhatsApp</h3>
                                            <p className="text-muted-foreground">+62 851-1704-1846</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <Mail className="w-6 h-6 text-muted-foreground mr-4 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-primary mb-1">Email</h3>
                                            <p className="text-muted-foreground">info@clasnet.co.id</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <Clock className="w-6 h-6 text-muted-foreground mr-4 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-primary mb-1">Jam Operasional</h3>
                                            <p className="text-muted-foreground">
                                                Senin - Jumat: 08:00 - 16:00 WIB<br />
                                                Sabtu & Minggu: Tutup
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
