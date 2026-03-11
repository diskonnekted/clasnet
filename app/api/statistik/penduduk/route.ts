import { NextResponse } from "next/server";
import { fetchOpenSIDStatistik, createApiRouteHandler } from "@/lib/api-helpers";

export const { GET } = createApiRouteHandler(async () => {
    const mockFallbackData = { totalPenduduk: 0, lakiLaki: 0, perempuan: 0, usia: {} };
    const response = await fetchOpenSIDStatistik("/internal_api/statistik/penduduk", {
        cacheTags: ["opensid-data-penduduk"],
        fallbackData: mockFallbackData,
    });
    return NextResponse.json(response.success ? response.data : response);
});
