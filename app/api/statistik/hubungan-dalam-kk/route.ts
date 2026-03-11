import { NextResponse } from "next/server";
import { fetchOpenSIDStatistikById, createApiRouteHandler } from "@/lib/api-helpers";

export const { GET } = createApiRouteHandler(async () => {
    const response = await fetchOpenSIDStatistikById("hubungan_kk", "hubungan-dalam-kk", { fallbackData: [] });
    return NextResponse.json(response.success ? response.data : response);
});
