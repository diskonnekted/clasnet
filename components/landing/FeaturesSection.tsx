import { Blocks, Award, Users, PhoneCall } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function FeaturesSection() {
    const features = [
        {
            icon: <Blocks className="w-8 h-8 text-primary" />,
            title: "Terbaik di Industri",
            description: "Kami menyediakan solusi terbaik di industri teknologi informasi dengan pengalaman bertahun-tahun."
        },
        {
            icon: <Award className="w-8 h-8 text-primary" />,
            title: "Pemenang Penghargaan",
            description: "Telah memperoleh berbagai penghargaan bergengsi dalam bidang teknologi dan inovasi digital."
        },
        {
            icon: <Users className="w-8 h-8 text-primary" />,
            title: "Staf Profesional",
            description: "Tim kami terdiri dari tenaga ahli yang sudah berpengalaman di bidangnya masing-masing."
        },
        {
            icon: <PhoneCall className="w-8 h-8 text-primary" />,
            title: "Dukungan 24/7",
            description: "Kami siap membantu Anda setiap saat, kapanpun Anda butuhkan."
        }
    ];

    return (
        <section className="py-12 bg-primary/5 z-20 relative">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <span className="text-secondary font-bold uppercase tracking-wider text-sm">Mengapa Memilih Kami</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
                        Kami Hadir Untuk Membuat Bisnis Anda Berkembang Pesat
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, idx) => (
                        <Card key={idx} className="shadow-md hover:shadow-lg transition-all border-border bg-card hover:border-secondary/50 group">
                            <CardContent className="p-6 text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{feature.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
