import { NextResponse } from "next/server";
import { fetchOpenSIDPeta, createApiRouteHandler } from "@/lib/api-helpers";

export const { GET } = createApiRouteHandler(async () => {
    const response = await fetchOpenSIDPeta();
    if (!response.success) {
        return NextResponse.json(
            { error: "Failed to fetch peta data", message: response.message, data: [] },
            { status: 500 }
        );
    }
    let sanitizedData = response.data;
    if (Array.isArray(sanitizedData)) {
        sanitizedData = sanitizedData.map((item: any) => {
            const { nip_kepala_camat, nip_kepala_desa, nomor_operator, email_desa, id_kepala, ...rest } = item;
            return rest;
        });
    } else if (typeof sanitizedData === 'object' && sanitizedData !== null) {
        const { nip_kepala_camat, nip_kepala_desa, nomor_operator, email_desa, id_kepala, ...rest } = sanitizedData as any;
        sanitizedData = rest;
    }

    return NextResponse.json(sanitizedData);
});
