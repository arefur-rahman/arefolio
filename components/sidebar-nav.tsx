"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SidebarNav() {
    const pathname = usePathname();
    const [time, setTime] = useState("");

    // Ticking clock for Bangladesh Time (GMT+6)
    useEffect(() => {
        const updateTime = () => {
            const options: Intl.DateTimeFormatOptions = {
                timeZone: "Asia/Dhaka",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false,
            };
            const bdTime = new Intl.DateTimeFormat("en-US", options).format(
                new Date(),
            );
            setTime(bdTime);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const navItems = [
        { number: "01", label: "INDEX", path: "/" },
        { number: "02", label: "WORK", path: "/projects" },
        { number: "03", label: "DOSSIER", path: "/about" },
        { number: "04", label: "DIRECT", path: "/contact" },
    ];

    return (
        <aside className="w-full lg:w-[380px] xl:w-[420px] lg:fixed lg:top-0 lg:left-0 lg:bottom-0 border-b-2 lg:border-b-0 lg:border-r-2 border-foreground p-6 md:p-8 lg:p-10 flex flex-col justify-between bg-background z-20">
            {/* Top Section: Identity */}
            <div className="flex flex-col gap-6">
                <div className="flex items-baseline justify-between lg:flex-col lg:items-start lg:justify-start gap-2">
                    <Link href="/" className="group">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter group-hover:text-primary transition-colors">
                            AREFOLIO
                        </h1>
                        <span className="text-xs text-muted-foreground uppercase font-mono tracking-widest block lg:mt-1">
                            [AREF&apos;s Portfolio]
                        </span>
                    </Link>
                    <div className="text-right lg:text-left mt-1">
                        <div className="text-xs bg-primary text-primary-foreground px-2 py-0.5 font-bold uppercase inline-block">
                            MERN Stack
                        </div>
                    </div>
                </div>

                <p className="text-sm text-muted-foreground font-mono leading-relaxed max-w-sm lg:max-w-none">
                    20-year-old web developer from Lakshmipur, Bangladesh. I
                    build applications with Javascript. No fluff, no cringe
                    agency templates.
                </p>

                {/* Technical Coordinate Tag */}
                <div className="border border-border p-3 font-mono text-[11px] leading-tight bg-card/50 flex flex-col gap-1">
                    <div>
                        <span className="text-muted-foreground">LOC:</span>{" "}
                        LAKSHMIPUR, BD
                    </div>
                    <div>
                        <span className="text-muted-foreground">COORDS:</span>{" "}
                        22.9430° N, 90.8282° E
                    </div>
                    <div>
                        <span className="text-muted-foreground">
                            LOCAL TIME:
                        </span>{" "}
                        <span className="text-primary font-bold">
                            {time || "LOADING..."}
                        </span>{" "}
                        (GMT+6)
                    </div>
                </div>
            </div>

            {/* Middle Section: Navigation */}
            <nav className="my-8 lg:my-12">
                <ul className="flex flex-row lg:flex-col flex-wrap gap-4 lg:gap-6 justify-between lg:justify-start">
                    {navItems.map((item) => {
                        const isActive =
                            item.path === "/"
                                ? pathname === "/"
                                : pathname.startsWith(item.path);

                        return (
                            <li
                                key={item.path}
                                className="flex-1 lg:flex-initial"
                            >
                                <Link
                                    href={item.path}
                                    className={`flex items-baseline gap-2 lg:gap-4 p-2 border-b-2 lg:border-b-0 hover:bg-muted/50 transition-all w-full group ${
                                        isActive
                                            ? "border-primary lg:border-l-4 lg:border-b-0 lg:pl-3 text-primary font-bold"
                                            : "border-transparent text-muted-foreground"
                                    }`}
                                >
                                    <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">
                                        {item.number}
                                    </span>
                                    <span className="text-lg md:text-xl font-bold tracking-tight uppercase group-hover:text-foreground transition-colors">
                                        {item.label}
                                    </span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Bottom Section: Footer/Status */}
            <div className="hidden lg:flex flex-col gap-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-muted-foreground">
                        Status: Open to local & remote projects
                    </span>
                </div>
                <div className="text-[10px] text-muted-foreground border-t border-border pt-4">
                    AREFOLIO © 2026. BUILT WITH NEXT.JS 16 & TAILWIND V4.
                </div>
            </div>
        </aside>
    );
}
