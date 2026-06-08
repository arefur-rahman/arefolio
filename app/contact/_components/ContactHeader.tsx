const ContactHeader = () => {
    return (
        <div className="border-b-2 border-foreground pb-6 mb-10">
            <div className="text-xs uppercase font-mono tracking-widest text-primary font-bold mb-2">
                [04 / DIRECT]
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">
                GET IN TOUCH
            </h2>
            <p className="text-sm text-muted-foreground font-mono mt-4 max-w-xl">
                Direct communication channels, repository logs, and simulated
                command line prompts.
            </p>
        </div>
    );
};

export default ContactHeader;
