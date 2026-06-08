import { Terminal } from "lucide-react";

const TechnicalStats = () => {
    const profileData = [
        { label: "DEV_TYPE", value: "FULLSTACK (MERN)" },
        { label: "EXPERIENCE", value: "2+ YEARS BUILDING" },
        {
            label: "PRIMARY_ENGINE",
            value: "NEXT.JS 16 / REACT 19",
        },
        { label: "DATABASE_PREF", value: "MONGODB / MONGOOSE" },
        { label: "CSS_STRATEGY", value: "TAILWIND V4 + SHARP BORDERS" },
    ];
    return (
        <div className="border-2 border-foreground p-6 bg-card brutal-shadow-accent">
            <div className="flex items-center gap-2 border-b border-border pb-3 mb-4">
                <Terminal className="h-4 w-4 text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider">
                    aref_profile.json
                </span>
            </div>

            <div className="flex flex-col gap-3 font-mono text-xs md:text-sm">
                {profileData.map(({ label, value }) => (
                    <div key={label} className="flex justify-between group">
                        <span className="text-muted-foreground">{label}:</span>
                        <span
                            className={`font-bold text-foreground  group-hover:text-accent cursor-default transition-all"}`}
                        >
                            {value}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnicalStats;
