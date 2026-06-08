const TechStackTable = () => {
    return (
        <section className="flex flex-col gap-4">
            <h3 className="text-lg font-mono font-black uppercase text-primary border-b border-border pb-1">
                [TECHNICAL MATRIX]
            </h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse brutal-border font-mono text-xs md:text-sm">
                    <thead>
                        <tr className="border-b-2 border-foreground bg-secondary/35">
                            <th className="p-3 border-r-2 border-foreground font-bold">
                                [01 / CATEGORY]
                            </th>
                            <th className="p-3 border-r-2 border-foreground font-bold">
                                [02 / TECHNOLOGIES]
                            </th>
                            <th className="p-3 font-bold">[03 / FLUENCY]</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-border">
                            <td className="p-3 border-r-2 border-foreground font-bold text-foreground">
                                FRONTEND
                            </td>
                            <td className="p-3 border-r-2 border-foreground text-muted-foreground">
                                Next.js, React.js, TypeScript, HTML5, CSS3,
                                Tailwind CSS v4, shadcn/ui
                            </td>
                            <td className="p-3">
                                <span className="text-primary font-bold">
                                    DAILY DRIVER
                                </span>
                            </td>
                        </tr>
                        <tr className="border-b border-border">
                            <td className="p-3 border-r-2 border-foreground font-bold text-foreground">
                                BACKEND
                            </td>
                            <td className="p-3 border-r-2 border-foreground text-muted-foreground">
                                Node.js, Express, REST APIs, Next.js Server
                                Actions
                            </td>
                            <td className="p-3 text-foreground">PROFICIENT</td>
                        </tr>
                        <tr className="border-b border-border">
                            <td className="p-3 border-r-2 border-foreground font-bold text-foreground">
                                DATABASE / BaaS
                            </td>
                            <td className="p-3 border-r-2 border-foreground text-muted-foreground">
                                MongoDB, Mongoose
                            </td>
                            <td className="p-3 text-foreground">PROFICIENT</td>
                        </tr>
                        <tr>
                            <td className="p-3 border-r-2 border-foreground font-bold text-foreground">
                                DEV TOOLS
                            </td>
                            <td className="p-3 border-r-2 border-foreground text-muted-foreground">
                                Git, GitHub, pnpm/npm, ESLint, Prettier
                            </td>
                            <td className="p-3 text-foreground">COMFORTABLE</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default TechStackTable;
