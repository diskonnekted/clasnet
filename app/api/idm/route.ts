import { NextRequest, NextResponse } from "next/server";
import { fetchIDMData, createApiRouteHandler } from "@/lib/api-helpers";

export const { GET, OPTIONS } = createApiRouteHandler(async (request: NextRequest) => {
    const { searchParams } = new URL(request.url);
    const year = searchParams.get("year") || "2024";
    const response = await fetchIDMData(year);
    return NextResponse.json(response.success ? response.data : response);
});
