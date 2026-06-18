import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { addSubmission } from "@/lib/db";

const kontakSchema = z.object({
    nama: z.string().min(2, "Nama minimal 2 karakter"),
    email: z.string().email("Format email tidak valid").optional().or(z.literal('')),
    telepon: z.string().min(8, "Nomor telepon minimal 8 angka").optional().or(z.literal('')),
    kategori: z.string().min(1, "Kategori harus dipilih"),
    subjek: z.string().optional(),
    pesan: z.string().min(10, "Pesan terlalu singkat (minimal 10 karakter)"),
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const validatedData = kontakSchema.parse(body);

        const newPesan = addSubmission(validatedData);

        return NextResponse.json(
            { success: true, message: "Pesan berhasil dikirim", data: newPesan },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { success: false, message: "Data tidak valid", errors: error.errors },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { success: false, message: "Terjadi kesalahan server saat mengirim pesan" },
            { status: 500 }
        );
    }
}
