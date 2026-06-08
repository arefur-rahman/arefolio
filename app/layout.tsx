import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SidebarNav from "@/components/sidebar-nav";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "AREFOLIO",
    description:
        "Personal developer portfolio of Aref, a 20-year-old MERN stack web developer from Lakshmipur, Bangladesh. No buzzwords, just code.",
    keywords: [
        "Aref",
        "Aref developer",
        "arefolio",
        "MERN Stack Developer",
        "MERN Stack",
        "Full Stack Developer",
        "Web Developer Bangladesh",
        "Freelance Web Developer Bangladesh",
        "Lakshmipur",
        "Lakshmipur developer",
        "Bangladesh",
        "Next.js developer",
        "React developer",
        "Firebase",
        "Tailwind CSS",
        "JavaScript developer",
        "TypeScript",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
        >
            <body className="min-h-full flex flex-col lg:flex-row bg-background text-foreground bg-grid font-mono">
                <SidebarNav />
                <div className="flex-1 lg:ml-[380px] xl:ml-[420px] min-h-screen flex flex-col relative">
                    {/* Subtle grid lines overlays */}
                    <div className="absolute inset-0 bg-grid pointer-events-none opacity-40 z-0"></div>

                    <main className="flex-1 flex flex-col relative z-10">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
