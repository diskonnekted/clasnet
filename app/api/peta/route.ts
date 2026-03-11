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
    return NextResponse.json(response.data);
});
