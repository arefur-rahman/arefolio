import Footer from "@/components/footer";
import PingConsole from "@/components/ping-console";
import CommunicationCards from "./_components/CommunicationCards";
import ContactHeader from "./_components/ContactHeader";

export default function ContactPage() {
    return (
        <div className="flex-1 flex flex-col p-6 md:p-10 lg:p-16 min-h-screen">
            {/* Page Header */}
            <ContactHeader />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                {/* Left Side: Communication Cards (2 cols on lg) */}
                <CommunicationCards />

                {/* Right Side: Interactive Shell Console (1 col on lg) */}
                <PingConsole />
            </div>

            {/* Footer stamp */}
            <Footer />
        </div>
    );
}
