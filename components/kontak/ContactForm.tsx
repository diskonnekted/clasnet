"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MessageSquare, AlertCircle, Clock, ShieldCheck, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
    nama: z.string().min(2, "Nama minimal 2 karakter"),
    email: z.string().email("Format email tidak valid").optional().or(z.literal("")),
    telepon: z.string().min(8, "Nomor WhatsApp minimal 8 angka"),
    kategori: z.string().min(1, "Kategori pesan harus dipilih"),
    subjek: z.string().min(3, "Subjek minimal 3 karakter"),
    pesan: z.string().min(10, "Pesan terlalu singkat (minimal 10 karakter)"),
});

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nama: "",
            email: "",
            telepon: "",
            kategori: "",
            subjek: "",
            pesan: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setIsSubmitting(true);
            const response = await fetch("/api/kontak", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            const result = await response.json();

            if (result.success) {
                toast.success("Pesan Terkirim!", {
                    description: "Terima kasih telah menghubungi Clasnet. Kami akan segera merespon pesan Anda.",
                });
                form.reset();
            } else {
                toast.error("Gagal mengirim pesan", {
                    description: result.message || "Silakan coba lagi nanti.",
                });
            }
        } catch (error) {
            toast.error("Terjadi Kesalahan", {
                description: "Tidak dapat terhubung ke server.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Form */}
            <div className="lg:col-span-2">
                <Card className="border-t-4 border-t-primary shadow-lg">
                    <div className="p-6 border-b border-border bg-muted/30">
                        <h2 className="text-xl font-bold flex items-center text-primary">
                            <MessageSquare className="w-5 h-5 mr-3 text-secondary" />
                            Formulir Kontak
                        </h2>
                    </div>
                    <CardContent className="p-6 md:p-8">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="nama"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nama Lengkap <span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Masukkan nama lengkap" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="telepon"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Nomor WhatsApp <span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Contoh: 08123456789" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email (Opsional)</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="nama@email.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="kategori"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Kategori Pesan <span className="text-red-500">*</span></FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Pilih kategori pesan" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="Permintaan Informasi">Permintaan Informasi</SelectItem>
                                                        <SelectItem value="Permintaan Penawaran">Permintaan Penawaran</SelectItem>
                                                        <SelectItem value="Kesan dan Saran">Kesan dan Saran</SelectItem>
                                                        <SelectItem value="Lainnya">Lainnya</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="subjek"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Subjek <span className="text-red-500">*</span></FormLabel>
                                            <FormControl>
                                                <Input placeholder="Ringkasan singkat tujuan Anda" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="pesan"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Isi Pesan Lengkap <span className="text-red-500">*</span></FormLabel>
                                            <FormControl>
                                                <Textarea 
                                                    placeholder="Jelaskan secara detail kebutuhan atau pesan Anda..." 
                                                    className="min-h-[150px] resize-y" 
                                                    {...field} 
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div className="pt-2">
                                    <Button type="submit" className="w-full md:w-auto" size="lg" disabled={isSubmitting}>
                                        {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>

            {/* Right Column - Information */}
            <div className="space-y-6">
                {/* Card 1: Darurat (Red) */}
                <Card className="relative overflow-hidden bg-gradient-to-br from-red-100 to-red-200 border-none shadow-sm hover:shadow-md transition-shadow group">
                    <AlertCircle className="absolute -right-6 -bottom-6 w-32 h-32 text-red-300/40 transform group-hover:scale-110 transition-transform duration-500" />
                    <CardContent className="p-6 relative z-10">
                        <div className="flex items-center mb-4">
                            <AlertCircle className="w-5 h-5 mr-2 text-red-700" />
                            <h3 className="font-bold text-red-800 text-base">Dukungan Darurat</h3>
                        </div>
                        <p className="text-sm text-red-800/80 mb-6 font-medium leading-relaxed">
                            Untuk kendala server down atau sistem kritis yang memerlukan penanganan segera.
                        </p>
                        <span className="inline-block px-4 py-1.5 bg-red-500/10 text-red-800 text-xs font-bold rounded-lg border border-red-500/20 backdrop-blur-sm">
                            Respon: Segera
                        </span>
                    </CardContent>
                </Card>

                {/* Card 2: Penawaran (Amber/Yellow) */}
                <Card className="relative overflow-hidden bg-gradient-to-br from-amber-100 to-amber-200 border-none shadow-sm hover:shadow-md transition-shadow group">
                    <Clock className="absolute -right-6 -bottom-6 w-32 h-32 text-amber-300/40 transform group-hover:scale-110 transition-transform duration-500" />
                    <CardContent className="p-6 relative z-10">
                        <div className="flex items-center mb-4">
                            <Clock className="w-5 h-5 mr-2 text-amber-700" />
                            <h3 className="font-bold text-amber-800 text-base">Permintaan Penawaran</h3>
                        </div>
                        <p className="text-sm text-amber-800/80 mb-6 font-medium leading-relaxed">
                            Untuk konsultasi proyek, proposal, dan pengadaan sistem informasi.
                        </p>
                        <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-800 text-xs font-bold rounded-lg border border-amber-500/20 backdrop-blur-sm">
                            Respon: 1x24 Jam
                        </span>
                    </CardContent>
                </Card>

                {/* Card 3: Umum (Emerald/Green) */}
                <Card className="relative overflow-hidden bg-gradient-to-br from-emerald-100 to-emerald-200 border-none shadow-sm hover:shadow-md transition-shadow group">
                    <ShieldCheck className="absolute -right-6 -bottom-6 w-32 h-32 text-emerald-300/40 transform group-hover:scale-110 transition-transform duration-500" />
                    <CardContent className="p-6 relative z-10">
                        <div className="flex items-center mb-4">
                            <ShieldCheck className="w-5 h-5 mr-2 text-emerald-700" />
                            <h3 className="font-bold text-emerald-800 text-base">Informasi Umum</h3>
                        </div>
                        <p className="text-sm text-emerald-800/80 mb-6 font-medium leading-relaxed">
                            Pertanyaan umum terkait layanan, kemitraan, dan produk Clasnet.
                        </p>
                        <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-800 text-xs font-bold rounded-lg border border-emerald-500/20 backdrop-blur-sm">
                            Respon: 2x24 Jam
                        </span>
                    </CardContent>
                </Card>

                {/* Card 4: Kontak (Blue/Primary) */}
                <Card className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 border-none shadow-sm hover:shadow-md transition-shadow group">
                    <Phone className="absolute -right-6 -bottom-6 w-32 h-32 text-blue-300/40 transform group-hover:scale-110 transition-transform duration-500" />
                    <CardContent className="p-6 relative z-10">
                        <div className="flex items-center mb-4">
                            <Phone className="w-5 h-5 mr-2 text-blue-700" />
                            <h3 className="font-bold text-blue-800 text-base">Kontak Langsung</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mr-3 flex-shrink-0">
                                    <Phone className="w-4 h-4 text-blue-700" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-blue-800/70 uppercase tracking-wider">Hotline</p>
                                    <p className="text-sm font-semibold text-blue-900">+62 851 1704 1846</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mr-3 flex-shrink-0">
                                    <Mail className="w-4 h-4 text-blue-700" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-blue-800/70 uppercase tracking-wider">Email</p>
                                    <p className="text-sm font-semibold text-blue-900">info@clasnet.id</p>
                                </div>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
