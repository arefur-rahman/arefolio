import Footer from "@/components/footer";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { projects } from "@/lib/projects";
import { IconBrandGithub } from "@tabler/icons-react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default async function ProjectsPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const resolvedParams = await searchParams;
    const pageParam = resolvedParams.page;
    const page = typeof pageParam === "string" ? parseInt(pageParam, 10) : 1;
    const currentPage = isNaN(page) || page < 1 ? 1 : page;

    const limitParam = resolvedParams.limit;
    const limit = typeof limitParam === "string" ? parseInt(limitParam, 10) : 5;
    const ITEMS_PER_PAGE = isNaN(limit) || limit < 1 ? 5 : limit;

    const totalProjects = projects.length;
    const totalPages = Math.ceil(totalProjects / ITEMS_PER_PAGE) || 1;

    const safeCurrentPage = Math.min(currentPage, totalPages);
    const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
    const currentProjects = projects.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE,
    );
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

            {/* List Controls */}
            <div className="flex justify-between items-center mb-6">
                <div className="font-mono text-xs text-muted-foreground">
                    Showing {startIndex + 1}-
                    {Math.min(startIndex + ITEMS_PER_PAGE, totalProjects)} of{" "}
                    {totalProjects} projects
                </div>
                <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-muted-foreground uppercase tracking-wider">
                        Per Page:
                    </span>
                    {[5, 10, 20].map((num) => (
                        <Link
                            key={num}
                            href={`/projects?page=1&limit=${num}`}
                            className={`px-2 py-1 border-2 transition-colors ${
                                ITEMS_PER_PAGE === num
                                    ? "border-foreground bg-primary text-primary-foreground font-bold"
                                    : "border-transparent hover:border-foreground"
                            }`}
                        >
                            {num}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Projects List */}
            <div className="flex flex-col gap-8">
                {currentProjects.map((project, index) => {
                    const numberStr = String(startIndex + index + 1).padStart(
                        2,
                        "0",
                    );
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

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-12 mb-8 border-2 border-foreground p-4 bg-card brutal-shadow">
                    <Pagination>
                        <PaginationContent className="flex flex-wrap gap-2">
                            {safeCurrentPage > 1 && (
                                <PaginationItem>
                                    <PaginationPrevious
                                        href={`/projects?page=${safeCurrentPage - 1}&limit=${ITEMS_PER_PAGE}`}
                                        className="font-mono text-xs uppercase font-bold border-2 border-transparent hover:border-foreground transition-all"
                                    />
                                </PaginationItem>
                            )}

                            {Array.from({ length: totalPages }).map((_, i) => {
                                const p = i + 1;
                                const isActive = p === safeCurrentPage;
                                return (
                                    <PaginationItem key={p}>
                                        <PaginationLink
                                            href={`/projects?page=${p}&limit=${ITEMS_PER_PAGE}`}
                                            isActive={isActive}
                                            className={
                                                isActive
                                                    ? "font-mono text-sm font-bold border-2 border-foreground bg-primary text-primary-foreground dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground"
                                                    : "font-mono text-sm font-bold border-2 border-transparent hover:border-foreground transition-all"
                                            }
                                        >
                                            {p}
                                        </PaginationLink>
                                    </PaginationItem>
                                );
                            })}

                            {safeCurrentPage < totalPages && (
                                <PaginationItem>
                                    <PaginationNext
                                        href={`/projects?page=${safeCurrentPage + 1}&limit=${ITEMS_PER_PAGE}`}
                                        className="font-mono text-xs uppercase font-bold border-2 border-transparent hover:border-foreground transition-all"
                                    />
                                </PaginationItem>
                            )}
                        </PaginationContent>
                    </Pagination>
                </div>
            )}

            {/* Footer */}
            <Footer />
        </div>
    );
}
