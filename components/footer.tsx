import { Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="mt-12 border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground">
            <div>Aref, Lakshmipur, Bangladesh</div>
            <div className="flex items-center gap-1">
                MADE WITH{" "}
                <Heart className="h-3 w-3 fill-destructive text-destructive animate-pulse" />{" "}
                FOR THE WEB.
            </div>
        </footer>
    );
};

export default Footer;
