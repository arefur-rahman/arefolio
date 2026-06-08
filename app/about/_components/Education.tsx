import { Cpu, FileText } from "lucide-react";

const Education = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            <div className="border border-border p-4 bg-card/25 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary font-bold border-b border-border pb-2">
                    <Cpu className="h-4 w-4" /> LEARNING LOGS
                </div>
                <p className="text-muted-foreground leading-relaxed font-sans">
                    I study local commerce flows. Most stores in Lakshmipur
                    manage orders over phone calls or WhatsApp. My goal is to
                    build direct digital ordering channels that don&apos;t
                    disrupt their habits.
                </p>
            </div>

            <div className="border border-border p-4 bg-card/25 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary font-bold border-b border-border pb-2">
                    <FileText className="h-4 w-4" /> PHILOSOPHY STATEMENT
                </div>
                <p className="text-muted-foreground leading-relaxed font-sans">
                    &quot;Boilerplate code is an obstacle. Gradients are fine,
                    but structural alignment and instant tactile responsiveness
                    is what makes users love an application.&quot;
                </p>
            </div>
        </section>
    );
};

export default Education;
