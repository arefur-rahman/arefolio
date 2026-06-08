import Footer from "@/components/footer";
import { projects } from "@/lib/projects";
import { IconBrandGithub } from "@tabler/icons-react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
    return (
        <div className="flex-1 flex flex-col p-6 md:p-10 lg:p-16 min-h-screen">
            {/* Page Header */}
            <div className="border-b-2 border-foreground pb-6 mb-10">
                <div className="text-xs uppercase font-mono tracking-widest text-primary font-bold mb-2">
                    [02 / WORK]
                </div>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none">
                    SELECTED WORK
                </h2>
                <p className="text-sm text-muted-foreground font-mono mt-4 max-w-xl">
                    A list of things I built. Some are full e-commerce
                    platforms, some are mathematical hacks for sensors, and some
                    are just weekend jokes that solved minor debates.
                </p>
            </div>

            {/* Projects List */}
            <div className="flex flex-col gap-8">
                {projects.map((project, index) => {
                    const numberStr = String(index + 1).padStart(2, "0");
                    return (
                        <article
                            key={project.slug}
                            className="border-2 border-border p-6 md:p-8 bg-card flex flex-col md:flex-row justify-between gap-6 hover:border-foreground transition-all brutal-shadow hover:brutal-shadow-accent relative"
                        >
                            {/* Left Side: Number & Main Info */}
                            <div className="flex-1 flex flex-col justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-3 font-mono text-xs text-primary font-bold mb-2">
                                        <span>
                                            {numberStr} {"//"}
                                        </span>
                                        <span>{project.year}</span>
                                        <span className="text-muted-foreground bg-muted px-2 py-0.5 uppercase tracking-wider text-[10px]">
                                            {project.client}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed font-sans max-w-2xl">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-mono border border-border px-2.5 py-1 bg-background text-muted-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: Links & Case Study Trigger */}
                            <div className="flex md:flex-col justify-between items-end gap-4 border-t md:border-t-0 border-border pt-4 md:pt-0">
                                {/* External Action Links */}
                                <div className="flex gap-3">
                                    {project.links.github && (
                                        <a
                                            href={project.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border border-foreground p-2 bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                                            title="View Source on GitHub"
                                        >
                                            <IconBrandGithub className="h-4 w-4" />
                                        </a>
                                    )}
                                    {project.links.live && (
                                        <a
                                            href={project.links.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border border-foreground p-2 bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                                            title="View Live App"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                    )}
                                </div>

                                {/* Case Study Detail Button */}
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 px-4 py-2 border-2 border-foreground bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-colors mt-auto w-full md:w-auto text-center justify-center"
                                >
                                    CASE STUDY
                                    <ArrowRight className="h-3 w-3" />
                                </Link>
                            </div>
                        </article>
                    );
                })}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
