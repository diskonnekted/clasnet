"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, User, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function LoginPage() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                router.push("/admin");
                router.refresh();
            } else {
                setError(data.message || "Login gagal");
            }
        } catch (err) {
            setError("Terjadi kesalahan jaringan");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-primary p-4 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-20 left-20 w-96 h-96 bg-secondary rounded-full mix-blend-screen filter blur-3xl"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl"></div>
            </div>

            <Card className="w-full max-w-md relative z-10 border-none shadow-2xl bg-white backdrop-blur-sm">
                <CardHeader className="space-y-1 text-center pb-8 pt-8">
                    <div className="mx-auto mb-6">
                        <img 
                            src="/images/Clasnet Group - Logo Fullcolor.png" 
                            alt="Clasnet Logo" 
                            className="h-12 w-auto mx-auto object-contain"
                            onError={(e) => {
                                // Fallback to text if image fails to load
                                (e.target as HTMLImageElement).style.display = 'none';
                                const fallback = document.getElementById('logo-fallback');
                                if (fallback) fallback.style.display = 'block';
                            }}
                        />
                        <div id="logo-fallback" className="hidden text-3xl font-bold text-primary">Clasnet</div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary">Akses Terbatas</CardTitle>
                    <CardDescription className="text-slate-500">
                        Silakan masuk ke Dasbor Admin Clasnet
                    </CardDescription>
                </CardHeader>
                <CardContent className="pb-8">
                    <form onSubmit={handleLogin} className="space-y-6">
                        {error && (
                            <Alert variant="destructive" className="py-2">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription className="text-xs ml-2">{error}</AlertDescription>
                            </Alert>
                        )}
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-slate-700">Username</Label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input 
                                    id="username" 
                                    type="text" 
                                    placeholder="admin" 
                                    className="pl-9 border-slate-300 text-slate-900 bg-white"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password" className="text-slate-700">Password</Label>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                                <Input 
                                    id="password" 
                                    type="password" 
                                    className="pl-9 border-slate-300 text-slate-900 bg-white"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold" disabled={loading}>
                            {loading ? "Memverifikasi..." : "Masuk"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
