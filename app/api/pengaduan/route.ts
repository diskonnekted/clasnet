import { NextResponse } from "next/server";
import { fetchOpenSIDPengaduan, createApiRouteHandler } from "@/lib/api-helpers";

export const { GET } = createApiRouteHandler(async () => {
    const response = await fetchOpenSIDPengaduan();
    if (!response.success) {
        return NextResponse.json(
            { error: "Failed to fetch pengaduan data", message: response.message, data: [] },
            { status: 500 }
        );
    }
    return NextResponse.json(response.data);
});
