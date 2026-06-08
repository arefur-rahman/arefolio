import Footer from "@/components/footer";
import VisitorInfoWidget from "@/components/visitor-info-widget";
import AboutHeader from "./_components/AboutHeader";
import Education from "./_components/Education";
import ParagraphBio from "./_components/ParagraphBio";
import TechStackTable from "./_components/TechStackTable";

export default function AboutPage() {
    return (
        <div className="flex-1 flex flex-col p-6 md:p-10 lg:p-16 min-h-screen">
            {/* Page Header */}
            <AboutHeader />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                {/* Left Columns: Story & Stack Tables (2 cols on lg) */}
                <div className="lg:col-span-2 flex flex-col gap-10">
                    {/* Paragraph Bio */}
                    <ParagraphBio />

                    {/* Tech Stack Table (Brutalist Style) */}
                    <TechStackTable />

                    {/* Education / Philosophy Quick Notes */}
                    <Education />
                </div>

                {/* Right Column: Visitor Connection Info */}
                <VisitorInfoWidget />
            </div>

            {/* Footer copyright */}
            <Footer />
        </div>
    );
}
