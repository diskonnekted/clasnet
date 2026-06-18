import { Users, CheckCircle, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function StatsSection() {
    return (
        <section className="py-12 bg-background z-20 relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="border-t-4 border-t-primary shadow-md hover:shadow-lg transition-all bg-card">
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <h5 className="text-muted-foreground font-medium mb-1">Klien</h5>
                                <h2 className="text-4xl font-bold text-primary">2,123+</h2>
                            </div>
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                <Users className="w-8 h-8 text-primary" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-t-4 border-t-secondary shadow-md hover:shadow-lg transition-all bg-card">
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <h5 className="text-muted-foreground font-medium mb-1">Produk</h5>
                                <h2 className="text-4xl font-bold text-primary">345+</h2>
                            </div>
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-8 h-8 text-secondary" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-t-4 border-t-primary shadow-md hover:shadow-lg transition-all bg-card">
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <h5 className="text-muted-foreground font-medium mb-1">Layanan</h5>
                                <h2 className="text-4xl font-bold text-primary">125+</h2>
                            </div>
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                                <Award className="w-8 h-8 text-primary" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
