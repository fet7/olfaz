import { BackgroundLinesDemo } from "@/components/backgroundLinesDemo";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <div className="container mx-auto mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6 lg:px-8">
            {/* Background Section */}
            <div className="relative h-[60vh] sm:h-[70vh] md:h-screen w-full overflo flex items-center justify-center">
                <BackgroundLinesDemo />
            </div>

            {/* Main Content Section */}
            <main className="min-h-screen flex flex-col items-center justify-start py-8 sm:py-10 md:py-12">
                <div className="text-center max-w-3xl mx-auto min-w-[430px] px-4">
                    <h1
                        className="font-medium text-neutral-700 dark:text-neutral-400 leading-tight"
                        style={{
                            fontSize: "clamp(1rem, 2.5vw, 2rem)", // Scales continuously within breakpoints
                            lineHeight: "clamp(1.5rem, 3vw, 2.75rem)", // Adjusts line height for smooth readability
                            padding: "clamp(0.5rem, 2vw, 2rem)", // Adds dynamic spacing
                        }}
                    >
                        {/* Our solutions help you manage your operations smoothly,
                        so you can focus on growth. <br /> */}
                        <span className="text-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                            Let&apos;s Build the Future Together.
                        </span>
                        <br />
                        Get started with a{" "}
                        <span className="font-semibold text-neutral-900 dark:text-white">
                            trusted development partner
                        </span>{" "}
                        today!
                    </h1>
                </div>
            </main>

            {/* Footer Section */}
            <footer className="space-y-4">
                <Footer />
            </footer>
        </div>
    );
}
