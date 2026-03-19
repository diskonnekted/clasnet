"use client";

import * as React from "react";
import Image from "next/image";
import { Wrench } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type TtgTutorial = {
    id: string;
    title: string;
    excerpt: string;
    imageUrl: string | null;
    relativeTime: string | null;
    url: string;
};

type ApiResponse = { success: true; data: TtgTutorial[]; total: number } | { success: false; error: string };

export default function TtgPage() {
    const [items, setItems] = React.useState<TtgTutorial[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    const fetchItems = React.useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const res = await fetch("/api/ttg/tutorials?limit=12", { method: "GET" });
            const json = (await res.json()) as ApiResponse;
            if (!json.success) {
                throw new Error(json.error || "Gagal memuat konten TTG");
            }
            setItems(json.data);
        } catch (e) {
            setError(e instanceof Error ? e.message : "Gagal memuat konten TTG");
            setItems([]);
        } finally {
            setLoading(false);
        }
    }, []);

    React.useEffect(() => {
        fetchItems();
    }, [fetchItems]);

    return (
        <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-8">
            <div className="container mx-auto px-4 space-y-8">
                <div className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full">
                        <Wrench className="h-10 w-10 text-emerald-700" />
                    </div>
                    <h1 className="text-4xl font-bold text-primary">Teknologi Tepat Guna</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Konten TTG Pondokrejo untuk kemandirian dan kemajuan Kalurahan Pondokrejo.
                    </p>
                    <p className="text-xs text-muted-foreground">Sumber data: ttg.pondokrejo.id</p>
                </div>

                {loading && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        {Array.from({ length: 12 }).map((_, i) => (
                            <Card key={i} className="overflow-hidden">
                                <div className="aspect-[4/3] bg-gray-200 animate-pulse" />
                                <CardContent className="p-3 space-y-2">
                                    <div className="h-4 bg-gray-200 rounded animate-pulse" />
                                    <div className="h-3 bg-gray-200 rounded animate-pulse w-3/4" />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}

                {error && (
                    <Card className="p-6">
                        <div className="text-center space-y-4">
                            <Wrench className="h-12 w-12 text-gray-400 mx-auto" />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Gagal memuat data</h3>
                                <p className="text-gray-600">{error}</p>
                            </div>
                            <Button onClick={fetchItems} className="bg-emerald-700 hover:bg-emerald-800">
                                Coba Lagi
                            </Button>
                        </div>
                    </Card>
                )}

                {!loading && !error && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        {items.map((item) => (
                            <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                                <Card className="overflow-hidden hover:shadow-md transition h-full">
                                    <div className="aspect-[4/3] bg-gray-100 relative">
                                        {item.imageUrl ? (
                                            <Image
                                                src={item.imageUrl}
                                                alt={item.title}
                                                fill
                                                sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, 50vw"
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                                <Wrench className="h-10 w-10 text-gray-300" />
                                            </div>
                                        )}
                                    </div>
                                    <CardContent className="p-3 space-y-1">
                                        <div className="text-xs font-semibold text-gray-900 line-clamp-2">{item.title}</div>
                                        <div className="text-[11px] text-gray-600 line-clamp-2">{item.excerpt || "—"}</div>
                                        <div className="text-[10px] text-gray-400">{item.relativeTime || ""}</div>
                                    </CardContent>
                                </Card>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

