import { getProjectBySlug, projects } from "@/lib/projects";
import { IconBrandGithub } from "@tabler/icons-react";
import {
    ArrowLeft,
    Briefcase,
    Calendar,
    ExternalLink,
    Layers,
    User,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="flex-1 flex flex-col p-6 md:p-10 lg:p-16 min-h-screen">
            {/* Back navigation */}
            <div className="mb-8">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
                >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    BACK TO SELECTED WORK
                </Link>
            </div>

            {/* Title block */}
            <div className="border-b-2 border-foreground pb-6 mb-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-tight uppercase">
                    {project.title}
                </h2>
                <p className="text-lg text-primary font-bold mt-2 font-mono uppercase">
                    {project.subtitle}
                </p>
            </div>

            {/* Main Content Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                {/* Left Side: Case Study Content (2 columns on lg) */}
                <div className="lg:col-span-2 flex flex-col gap-10">
                    {/* Intro Description */}
                    <div className="p-6 border border-border bg-card/30 font-sans text-base leading-relaxed">
                        {project.longDescription}
                    </div>

                    {/* Section: Challenge */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-mono font-black uppercase text-primary border-b border-border pb-1">
                            [THE CHALLENGE]
                        </h3>
                        <p className="text-sm md:text-base font-sans text-muted-foreground leading-relaxed">
                            {project.caseStudy.challenge}
                        </p>
                    </div>

                    {/* Section: Solution */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-mono font-black uppercase text-primary border-b border-border pb-1">
                            [THE SOLUTION]
                        </h3>
                        <p className="text-sm md:text-base font-sans text-muted-foreground leading-relaxed">
                            {project.caseStudy.solution}
                        </p>
                    </div>

                    {/* Section: Technical Details */}
                    <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-mono font-black uppercase text-primary border-b border-border pb-1">
                            [TECHNICAL DEEP DIVE]
                        </h3>
                        <p className="text-sm md:text-base font-sans text-muted-foreground leading-relaxed">
                            {project.caseStudy.techDetail}
                        </p>
                    </div>

                    {/* Section: Retrospective (Aref's voice) */}
                    <div className="border-2 border-destructive p-6 bg-destructive/5 brutal-shadow-destruct flex flex-col gap-3">
                        <h3 className="text-lg font-mono font-black uppercase text-destructive">
                            {"// DEVELOPER'S RETROSPECTIVE"}
                        </h3>
                        <p className="text-sm font-mono leading-relaxed text-foreground">
                            &quot;{project.caseStudy.retrospective}&quot;
                        </p>
                    </div>
                </div>

                {/* Right Side: Technical Specs Invoice Box */}
                <aside className="border-2 border-foreground p-6 bg-card brutal-shadow flex flex-col gap-6 sticky top-8">
                    <div className="border-b border-border pb-3 flex justify-between items-center">
                        <span className="text-xs font-mono font-bold tracking-widest">
                            [SPECIFICATIONS]
                        </span>
                        <span className="text-xs font-mono text-muted-foreground">
                            REF: {project.slug.toUpperCase()}
                        </span>
                    </div>

                    {/* Spec details */}
                    <div className="flex flex-col gap-4 font-mono text-xs">
                        <div className="flex items-start justify-between border-b border-border/50 pb-2">
                            <span className="text-muted-foreground flex items-center gap-1.5">
                                <Calendar className="h-3.5 w-3.5" /> YEAR:
                            </span>
                            <span className="font-bold text-right">
                                {project.year}
                            </span>
                        </div>

                        <div className="flex items-start justify-between border-b border-border/50 pb-2">
                            <span className="text-muted-foreground flex items-center gap-1.5">
                                <Briefcase className="h-3.5 w-3.5" /> CLIENT:
                            </span>
                            <span className="font-bold text-right uppercase">
                                {project.client}
                            </span>
                        </div>

                        <div className="flex items-start justify-between border-b border-border/50 pb-2">
                            <span className="text-muted-foreground flex items-center gap-1.5">
                                <User className="h-3.5 w-3.5" /> ROLE:
                            </span>
                            <span className="font-bold text-right uppercase">
                                {project.role}
                            </span>
                        </div>

                        <div className="flex flex-col gap-1.5 border-b border-border/50 pb-2">
                            <span className="text-muted-foreground flex items-center gap-1.5">
                                <Layers className="h-3.5 w-3.5" /> TECH STACK:
                            </span>
                            <div className="flex flex-wrap gap-1 mt-1 justify-end">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-background border border-border text-muted-foreground px-1.5 py-0.5 text-[10px]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-col gap-3 mt-4">
                        {project.links.live && (
                            <a
                                href={project.links.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="brutal-btn w-full text-center text-xs"
                            >
                                LAUNCH APP
                                <ExternalLink className="ml-2 h-3.5 w-3.5" />
                            </a>
                        )}
                        {project.links.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 p-3 border-2 border-foreground bg-background hover:bg-muted font-mono font-bold text-xs uppercase transition-colors"
                            >
                                VIEW GITHUB
                                <IconBrandGithub className="h-3.5 w-3.5" />
                            </a>
                        )}
                    </div>
                </aside>
            </div>

            {/* Navigation footer */}
            <div className="mt-16 border-t border-border pt-8 flex justify-between items-center text-xs font-mono">
                <Link
                    href="/projects"
                    className="hover:text-primary transition-colors flex items-center gap-1"
                >
                    <ArrowLeft className="h-3 w-3" /> BACK TO PROJECTS
                </Link>
                <span className="text-muted-foreground">
                    AREFOLIO // CASE STUDY // LAKSHMIPUR
                </span>
            </div>
        </div>
    );
}
