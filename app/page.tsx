import Footer from "@/components/footer";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TechnicalStats from "./home/technicalStats";

export default function Home() {
    return (
        <div className="flex-1 flex flex-col justify-between p-6 md:p-10 lg:p-16 min-h-screen">
            {/* Editorial Header Block */}
            <div className="flex flex-col gap-8">
                <div className="border-b-2 border-foreground pb-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="text-xs uppercase font-mono tracking-widest text-primary font-bold mb-2">
                                [INDEX / HOME]
                            </div>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none">
                                MERN STACK &<br />
                                THEN SOME.
                            </h2>
                        </div>
                        <Image
                            src={"/aref.png"}
                            alt="Web Developer Arefur Rahman Khan"
                            width={200}
                            height={200}
                            className="mr-40 border-foreground border-2 brutal-shadow-accent bg-foreground/20"
                        />
                    </div>
                </div>

                {/* Brutalist Hero Statement */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold uppercase tracking-tight text-primary">
                            {"// NO BUZZWORDS. NO CORPORATE SLOGANS."}
                        </h3>
                        <p className="text-base text-muted-foreground leading-relaxed font-sans">
                            I am Aref. I write code to solve real-world
                            problems. Whether it&apos;s setting up an e-commerce
                            dashboard for local shops in Bangladesh, computing
                            spherical navigation geometry for a Qibla compass,
                            or building lightweight counters for Ramadan, I
                            focus on performance, accessibility, and clean
                            layouts.
                        </p>
                        <p className="text-base text-muted-foreground leading-relaxed font-sans">
                            I don&apos;t design boring corporate templates. I
                            build interfaces that feel distinct, responsive, and
                            functional.
                        </p>
                    </div>

                    {/* Quick Technical Datasheet */}
                    <TechnicalStats />
                </div>
            </div>

            {/* Interactive Quick Links / Featured */}
            <div className="mt-12 lg:mt-20 flex flex-col gap-6">
                <h4 className="text-xs uppercase font-mono tracking-widest text-muted-foreground border-b border-border pb-2">
                    EXPLORE DOSSIER
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link
                        href="/projects"
                        className="border-2 border-border p-6 hover:border-foreground hover:bg-muted/10 group transition-all brutal-shadow hover:brutal-shadow-accent"
                    >
                        <div className="text-xs text-muted-foreground mb-1">
                            01 / WORK
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-bold">PROJECTS</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-primary" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 font-sans">
                            From live e-commerce setups to browser sensor hacks.
                        </p>
                    </Link>

                    <Link
                        href="/about"
                        className="border-2 border-border p-6 hover:border-foreground hover:bg-muted/10 group transition-all brutal-shadow hover:brutal-shadow-accent"
                    >
                        <div className="text-xs text-muted-foreground mb-1">
                            02 / ABOUT
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-bold">
                                BACKGROUND
                            </span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-primary" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 font-sans">
                            Who I am, what I study, and my interactive widgets.
                        </p>
                    </Link>

                    <Link
                        href="/contact"
                        className="border-2 border-border p-6 hover:border-foreground hover:bg-muted/10 group transition-all brutal-shadow hover:brutal-shadow-accent"
                    >
                        <div className="text-xs text-muted-foreground mb-1">
                            03 / CONTACT
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-bold">
                                GET IN TOUCH
                            </span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform text-primary" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 font-sans">
                            GitHub links, email coordinates, and a ping client.
                        </p>
                    </Link>
                </div>
            </div>

            {/* footer */}
            <Footer />
        </div>
    );
}
