"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Globe, CheckCircle, Send } from "lucide-react";
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
    email: z.string().email("Format email tidak valid"),
    telepon: z.string().min(8, "Nomor telepon minimal 8 angka"),
    jenis: z.string().min(1, "Pilih jenis usaha/lembaga"),
    nama_usaha: z.string().min(2, "Nama usaha/lembaga minimal 2 karakter"),
    alamat: z.string().min(5, "Alamat minimal 5 karakter"),
    deskripsi: z.string().optional(),
    pesan: z.string().optional(),
});

export function CsrForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nama: "",
            email: "",
            telepon: "",
            jenis: "",
            nama_usaha: "",
            alamat: "",
            deskripsi: "",
            pesan: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setIsSubmitting(true);
            const response = await fetch("/api/csr", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            const result = await response.json();

            if (result.success) {
                toast.success("Pendaftaran Berhasil!", {
                    description: "Terima kasih! Tim kami akan segera menghubungi Anda untuk proses pembuatan website profil gratis.",
                });
                form.reset();
            } else {
                toast.error("Gagal mendaftar", {
                    description: result.message || "Silakan coba lagi nanti.",
                });
            }
        } catch {
            toast.error("Terjadi Kesalahan", {
                description: "Tidak dapat terhubung ke server.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Card className="border-t-4 border-t-secondary shadow-lg">
            <div className="p-6 border-b border-border bg-gradient-to-r from-secondary/5 to-primary/5">
                <h2 className="text-xl font-bold flex items-center text-primary">
                    <Send className="w-5 h-5 mr-3 text-secondary" />
                    Formulir Pendaftaran CSR
                </h2>
                <p className="text-sm text-muted-foreground mt-2">
                    Isi data diri dan usaha/lembaga Anda. Tim Clasnet akan menghubungi Anda dalam 1x24 jam.
                </p>
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
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="nama@email.com" {...field} />
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
                                name="jenis"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Jenis Usaha/Lembaga <span className="text-red-500">*</span></FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Pilih jenis" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="UMKM">UMKM</SelectItem>
                                                <SelectItem value="PONDOK_PESANTREN">Pondok Pesantren</SelectItem>
                                                <SelectItem value="USAHA_KECIL">Usaha Kecil</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="nama_usaha"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nama Usaha / Lembaga <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Input placeholder="Contoh: Warung Sejahtera / Ponpes Al-Hidayah" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="alamat"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Alamat <span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Alamat lengkap usaha / lembaga"
                                            className="min-h-[80px] resize-y"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="deskripsi"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Deskripsi Usaha / Lembaga</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Ceritakan sedikit tentang usaha atau lembaga Anda (produk/jasa, visi, dll.)"
                                            className="min-h-[100px] resize-y"
                                            {...field}
                                        />
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
                                    <FormLabel>Pesan Tambahan</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Ada permintaan khusus atau fitur yang diinginkan? Tulis di sini."
                                            className="min-h-[80px] resize-y"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="pt-2">
                            <Button type="submit" className="w-full md:w-auto bg-secondary hover:bg-secondary/90" size="lg" disabled={isSubmitting}>
                                {isSubmitting ? "Mengirim..." : "Daftar Gratis"}
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}