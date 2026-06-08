const ParagraphBio = () => {
    return (
        <section className="flex flex-col gap-4">
            <h3 className="text-lg font-mono font-black uppercase text-primary border-b border-border pb-1">
                [THE DOSSIER]
            </h3>
            <div className="font-sans text-base leading-relaxed text-muted-foreground flex flex-col gap-4">
                <p>
                    I am Aref, a 20-year-old self-taught web developer based in{" "}
                    <strong>Lakshmipur, Bangladesh</strong>. I started writing
                    code when I realized most business problems in my community
                    could be solved with small, highly-optimized web
                    applications rather than bloated, overpriced agency
                    software.
                </p>
                <p>
                    My core competency lies in the{" "}
                    <strong>MERN (MongoDB, Express, React, Node)</strong> stack,
                    though my daily preference has shifted towards{" "}
                    <strong>Next.js</strong> and <strong>Firebase</strong>. They
                    allow me to build full-stack interfaces rapidly, manage
                    database states in real-time, and deploy performant websites
                    that load instantly on local mobile networks.
                </p>
                <p>
                    My philosophy is straightforward: **keep it clean, keep it
                    fast, and don&apos;t over-engineer**. If a simple local
                    storage sync solves a problem, I don&apos;t set up heavy
                    database schemas. If static pages load faster, I keep them
                    static.
                </p>
            </div>
        </section>
    );
};

export default ParagraphBio;
