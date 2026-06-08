const AboutHeader = () => {
    return (
        <div className="border-b-2 border-foreground pb-6 mb-10">
            <div className="text-xs uppercase font-mono tracking-widest text-primary font-bold mb-2">
                [03 / DOSSIER]
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">
                ABOUT & STACK
            </h2>
            <p className="text-sm text-muted-foreground font-mono mt-4 max-w-xl">
                The background dossiers, comfort zones, and active browser
                modules of a developer from Lakshmipur.
            </p>
        </div>
    );
};

export default AboutHeader;
