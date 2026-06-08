import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Compass, Mail } from "lucide-react";

function CommunicationCards() {
    return (
        <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email Block */}
                <a
                    href="mailto:aref0171personal@gmail.com"
                    className="border-2 border-border p-6 bg-card brutal-shadow hover:brutal-shadow-accent hover:border-foreground transition-all group flex flex-col justify-between min-h-[140px]"
                >
                    <div className="flex justify-between items-start">
                        <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-mono text-muted-foreground">
                            [EMAIL]
                        </span>
                    </div>
                    <div className="mt-4">
                        <span className="text-lg font-bold font-mono tracking-tight block">
                            aref0171personal@gmail.com
                        </span>
                        <span className="text-xs text-muted-foreground block mt-1 font-sans">
                            Send an email directly.
                        </span>
                    </div>
                </a>

                {/* GitHub Block */}
                <a
                    href="https://github.com/arefur-rahman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-border p-6 bg-card brutal-shadow hover:brutal-shadow-accent hover:border-foreground transition-all group flex flex-col justify-between min-h-[140px]"
                >
                    <div className="flex justify-between items-start">
                        <IconBrandGithub className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-mono text-muted-foreground">
                            [SOURCE]
                        </span>
                    </div>
                    <div className="mt-4">
                        <span className="text-lg font-bold font-mono tracking-tight block">
                            Arefur Rahman
                        </span>
                        <span className="text-xs text-muted-foreground block mt-1 font-sans">
                            Review repos, scripts, and logs.
                        </span>
                    </div>
                </a>

                {/* LinkedIn Block (MERN connection) */}
                <a
                    href="https://www.linkedin.com/in/md-arefur-rahman-khan-74188232b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-border p-6 bg-card brutal-shadow hover:brutal-shadow-accent hover:border-foreground transition-all group flex flex-col justify-between min-h-[140px]"
                >
                    <div className="flex justify-between items-start">
                        <IconBrandLinkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] font-mono text-muted-foreground">
                            [NETWORKS]
                        </span>
                    </div>
                    <div className="mt-4">
                        <span className="text-lg font-bold font-mono tracking-tight block">
                            Arefur Rahman
                        </span>
                        <span className="text-xs text-muted-foreground block mt-1 font-sans">
                            Connect professionally.
                        </span>
                    </div>
                </a>

                {/* Location Block */}
                <div className="border-2 border-border p-6 bg-card flex flex-col justify-between min-h-[140px]">
                    <div className="flex justify-between items-start">
                        <Compass className="h-6 w-6 text-primary" />
                        <span className="text-[10px] font-mono text-muted-foreground">
                            [HQ]
                        </span>
                    </div>
                    <div className="mt-4 font-mono text-xs">
                        <span className="text-base font-bold text-foreground block">
                            LAKSHMIPUR, BD
                        </span>
                        <span className="text-muted-foreground block mt-1">
                            22°56&apos;34.8&quot;N 90°49&apos;41.5&quot;E
                        </span>
                    </div>
                </div>
            </div>

            {/* Casual paragraph about collaborations */}
            <div className="p-6 border border-border bg-card/10 font-sans text-sm md:text-base leading-relaxed text-muted-foreground">
                Whether you want to build a fast, light web interface for your
                brand, integrate Firebase state engines, or discuss remote
                development roles, my inbox is open. I am usually active between
                10:00 AM and 11:00 PM (GMT+6).
            </div>
        </div>
    );
}

export default CommunicationCards;
