"use client";

import { useEffect, useRef, useState } from "react";

export function LegacyIframe() {
    const [height, setHeight] = useState("500px");
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.data?.type === "legacy-resize" && event.data?.height) {
                setHeight(`${event.data.height}px`);
            }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    return (
        <div className="w-full relative bg-transparent overflow-hidden my-10">
            <iframe
                ref={iframeRef}
                src="/legacy-content.html"
                style={{ width: "100%", height, border: "none", backgroundColor: "transparent" }}
                scrolling="no"
                title="Legacy Content"
            />
        </div>
    );
}
