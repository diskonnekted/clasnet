import { NextRequest, NextResponse } from "next/server";
import { fetchOpenSIDWilayah, extractQueryParams, createApiRouteHandler } from "@/lib/api-helpers";

export const { GET } = createApiRouteHandler(async (request: NextRequest) => {
    extractQueryParams(request);
    const response = await fetchOpenSIDWilayah();
    if (!response.success) {
        return NextResponse.json(
            { error: "Failed to fetch wilayah data", message: response.message, data: [] },
            { status: 500 }
        );
    }
    return NextResponse.json(response.data);
});
