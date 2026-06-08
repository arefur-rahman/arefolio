"use client";

import { useEffect, useState } from "react";
import {
    Building2,
    Clock,
    Globe,
    Monitor,
    RefreshCw,
    Wifi,
} from "lucide-react";

interface IpData {
    ipAddress: string;
    capital: string;
    countryName: string;
    asnOrganization: string;
}

function getBrowserInfo(): string {
    if (typeof navigator === "undefined") return "UNKNOWN";
    const ua = navigator.userAgent;

    let browser = "UNKNOWN";
    if (ua.includes("Edg/")) browser = "EDGE";
    else if (ua.includes("OPR/") || ua.includes("Opera/")) browser = "OPERA";
    else if (ua.includes("Chrome/") && !ua.includes("Chromium/"))
        browser = "CHROME";
    else if (ua.includes("Safari/") && !ua.includes("Chrome/"))
        browser = "SAFARI";
    else if (ua.includes("Firefox/")) browser = "FIREFOX";
    else if (ua.includes("Chromium/")) browser = "CHROMIUM";

    let device = "DESKTOP";
    if (/Android/i.test(ua)) device = "ANDROID";
    else if (/iPhone|iPad|iPod/i.test(ua)) device = "IOS";
    else if (/Windows/i.test(ua)) device = "WINDOWS";
    else if (/Mac OS X/i.test(ua)) device = "MACOS";
    else if (/Linux/i.test(ua)) device = "LINUX";

    return `${browser} / ${device}`;
}

export default function VisitorInfoWidget() {
    // isMounted ensures server + client produce identical HTML during hydration.
    // Dynamic content is only rendered after the first client-side paint.
    const [isMounted, setIsMounted] = useState(false);
    const [ipData, setIpData] = useState<IpData | null>(null);
    const [localTime, setLocalTime] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [browser, setBrowser] = useState("");

    const fetchData = async () => {
        setLoading(true);
        setError(false);
        try {
            const res = await fetch("https://free.freeipapi.com/api/json");
            if (!res.ok) throw new Error("Failed");
            const data: IpData = await res.json();
            console.log(res);
            setIpData(data);
        } catch {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setIsMounted(true);
            setBrowser(getBrowserInfo());
            fetchData();
        }, 0);

        const tick = () => {
            const now = new Date();
            setLocalTime(
                now.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false,
                }),
            );
        };
        // tick runs on interval callbacks — not directly in effect body
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);

    const rows =
        isMounted && ipData
            ? [
                  {
                      icon: <Wifi className="h-3.5 w-3.5 shrink-0" />,
                      label: "IP ADDR",
                      value: ipData.ipAddress,
                      highlight: true,
                  },
                  {
                      icon: <Globe className="h-3.5 w-3.5 shrink-0" />,
                      label: "LOCATION",
                      value: `${ipData.capital}, ${ipData.countryName}`,
                      highlight: false,
                  },
                  {
                      icon: <Clock className="h-3.5 w-3.5 shrink-0" />,
                      label: "LOCAL TIME",
                      value: localTime,
                      highlight: true,
                  },
                  {
                      icon: <Building2 className="h-3.5 w-3.5 shrink-0" />,
                      label: "ORG / ISP",
                      value: ipData.asnOrganization,
                      highlight: false,
                  },
                  {
                      icon: <Monitor className="h-3.5 w-3.5 shrink-0" />,
                      label: "CLIENT",
                      value: browser,
                      highlight: false,
                  },
              ]
            : [];

    return (
        <aside className="flex flex-col gap-6 lg:sticky lg:top-8">
            <div className="border-b border-border pb-3">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-muted-foreground">
                    {"// VISITOR LOG"}
                </span>
            </div>
            <div className="border-2 border-foreground bg-card brutal-shadow-accent flex flex-col relative overflow-hidden">
                {/* Header bar */}
                <div className="border-b-2 border-foreground px-4 py-2 bg-background flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">
                        INCOMING_CONNECTION.LOG
                    </span>
                    <button
                        onClick={fetchData}
                        title="Refresh"
                        className="text-muted-foreground hover:text-primary transition-colors"
                    >
                        <RefreshCw
                            className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`}
                        />
                    </button>
                </div>

                {/* Body — static placeholder during SSR / before mount */}
                <div className="flex flex-col gap-0 font-mono text-xs">
                    {!isMounted && (
                        <div className="p-6 text-center text-muted-foreground">
                            INITIALIZING...
                        </div>
                    )}

                    {isMounted && loading && (
                        <div className="p-6 text-center text-muted-foreground animate-pulse">
                            RESOLVING ENDPOINT...
                        </div>
                    )}

                    {isMounted && error && !loading && (
                        <div className="p-6 text-center text-destructive">
                            FETCH FAILED — NETWORK UNREACHABLE
                        </div>
                    )}

                    {isMounted &&
                        !loading &&
                        !error &&
                        rows.map((row, i) => (
                            <div
                                key={row.label}
                                className={`flex items-start gap-3 px-4 py-3 ${
                                    i < rows.length - 1
                                        ? "border-b border-border"
                                        : ""
                                }`}
                            >
                                <span className="text-muted-foreground mt-px">
                                    {row.icon}
                                </span>
                                <div className="flex flex-col gap-0.5 min-w-0">
                                    <span className="text-[9px] uppercase tracking-widest text-muted-foreground">
                                        {row.label}
                                    </span>
                                    <span
                                        className={`truncate font-bold ${
                                            row.highlight
                                                ? "text-primary"
                                                : "text-foreground"
                                        }`}
                                    >
                                        {row.value || "—"}
                                    </span>
                                </div>
                            </div>
                        ))}
                </div>

                {/* Footer */}
                <div className="border-t border-border px-4 py-2 text-[9px] font-mono text-muted-foreground">
                    SOURCE: ip-api.com • VISITOR LOG ACTIVE
                </div>
            </div>
        </aside>
    );
}
