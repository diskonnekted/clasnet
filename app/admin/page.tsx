"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash2, Inbox, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
    const [submissions, setSubmissions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchSubmissions = async () => {
        try {
            const res = await fetch('/api/admin/submissions');
            const data = await res.json();
            setSubmissions(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSubmissions();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm("Hapus pesan ini?")) return;
        
        try {
            await fetch(`/api/admin/submissions?id=${id}`, { method: 'DELETE' });
            fetchSubmissions();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="space-y-6 max-w-6xl mx-auto">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-primary">Pesan Masuk</h1>
                    <p className="text-muted-foreground">Kelola semua isian formulir dari pengunjung website.</p>
                </div>
                <Badge variant="outline" className="text-secondary border-secondary px-4 py-2">
                    {submissions.length} Pesan
                </Badge>
            </div>

            {loading ? (
                <div className="text-center py-20 text-muted-foreground">Memuat data...</div>
            ) : submissions.length === 0 ? (
                <Card className="border-dashed bg-surface shadow-none">
                    <CardContent className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                        <Inbox className="w-16 h-16 text-primary/20 mb-4" />
                        <h3 className="text-xl font-bold text-primary mb-2">Belum Ada Pesan</h3>
                        <p>Isian formulir dari pengunjung akan muncul di sini.</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid gap-4">
                    {submissions.map((sub) => (
                        <Card key={sub.id} className="hover:shadow-md transition-shadow">
                            <CardHeader className="pb-3 flex flex-row items-start justify-between">
                                <div>
                                    <CardTitle className="text-lg font-bold text-primary flex items-center gap-2">
                                        {sub.nama} 
                                        {sub.kategori && <Badge className="bg-primary/10 text-primary border-none">{sub.kategori}</Badge>}
                                    </CardTitle>
                                    <div className="flex items-center text-xs text-muted-foreground mt-1 gap-4">
                                        {sub.email && <span>{sub.email}</span>}
                                        {sub.telepon && <span>• {sub.telepon}</span>}
                                        {sub.subjek && <span>• {sub.subjek}</span>}
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <div className="flex items-center text-xs text-muted-foreground bg-surface px-2 py-1 rounded-md">
                                        <Calendar className="w-3 h-3 mr-1" />
                                        {new Date(sub.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => handleDelete(sub.id)} className="text-red-400 hover:text-red-500 hover:bg-red-50 h-8 w-8">
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-surface p-4 rounded-md text-sm text-primary/80 border border-border whitespace-pre-wrap">
                                    {sub.pesan}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
