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
                <Card className="bg-surface border-l-4 border-l-red-500 shadow-sm">
                    <CardContent className="p-6">
                        <h3 className="font-bold flex items-center text-red-600 mb-3">
                            <AlertCircle className="w-5 h-5 mr-2" />
                            Dukungan Darurat
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Untuk kendala server down atau sistem kritis yang memerlukan penanganan segera.
                        </p>
                        <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full shadow-sm border border-red-200">
                            Respon: Segera
                        </span>
                    </CardContent>
                </Card>

                <Card className="bg-surface border-l-4 border-l-amber-500 shadow-sm">
                    <CardContent className="p-6">
                        <h3 className="font-bold flex items-center text-amber-600 mb-3">
                            <Clock className="w-5 h-5 mr-2" />
                            Permintaan Penawaran
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Untuk konsultasi proyek, proposal, dan pengadaan sistem informasi.
                        </p>
                        <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full shadow-sm border border-amber-200">
                            Respon: 1x24 Jam
                        </span>
                    </CardContent>
                </Card>

                <Card className="bg-surface border-l-4 border-l-emerald-500 shadow-sm">
                    <CardContent className="p-6">
                        <h3 className="font-bold flex items-center text-emerald-600 mb-3">
                            <ShieldCheck className="w-5 h-5 mr-2" />
                            Informasi Umum
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                            Pertanyaan umum terkait layanan, kemitraan, dan produk Clasnet.
                        </p>
                        <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full shadow-sm border border-emerald-200">
                            Respon: 2x24 Jam
                        </span>
                    </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20 shadow-sm">
                    <CardContent className="p-6">
                        <h3 className="font-bold flex items-center text-primary mb-4">
                            Kontak Langsung
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <Phone className="w-5 h-5 text-secondary mr-3 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-foreground">Hotline & WhatsApp</p>
                                    <p className="text-sm text-muted-foreground">+62 851 1704 1846</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Mail className="w-5 h-5 text-secondary mr-3 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-foreground">Email Resmi</p>
                                    <p className="text-sm text-muted-foreground">info@clasnet.id</p>
                                </div>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
