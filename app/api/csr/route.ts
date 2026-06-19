import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { addCsrRegistration } from "@/lib/csr-db";

const csrSchema = z.object({
    nama: z.string().min(2, "Nama minimal 2 karakter"),
    email: z.string().email("Format email tidak valid"),
    telepon: z.string().min(8, "Nomor telepon minimal 8 angka"),
    jenis: z.enum(["UMKM", "PONDOK_PESANTREN", "USAHA_KECIL"], {
        message: "Pilih jenis usaha/lembaga",
    }),
    nama_usaha: z.string().min(2, "Nama usaha/lembaga minimal 2 karakter"),
    alamat: z.string().min(5, "Alamat minimal 5 karakter"),
    deskripsi: z.string().optional().default(""),
    pesan: z.string().optional().default(""),
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const validatedData = csrSchema.parse(body);

        const registration = addCsrRegistration(validatedData);

        return NextResponse.json(
            { success: true, message: "Pendaftaran CSR berhasil dikirim", data: registration },
            { status: 201 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { success: false, message: "Data tidak valid", errors: error.flatten().fieldErrors },
                { status: 400 }
            );
        }
        console.error("CSR API Error:", error);
        return NextResponse.json(
            { success: false, message: "Terjadi kesalahan server" },
            { status: 500 }
        );
    }
}