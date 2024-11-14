import { BackgroundLinesDemo } from "@/components/backgroundLinesDemo";
import Footer from "./footer";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

export default function Home() {
    return (
        <div className="container mt-16 ">
            <div className="relative h-screen w-full flex items-center justify-center">
                <BackgroundLinesDemo />
            </div>
            <main className="bg- min-h-screen flex flex-col items-center justify-start">
                <div>
                    {/* <h1 className="pt-6 max-w-xl mx-auto text-4xl font-medium md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                        our solutions help you manage your operations smoothly,
                        so you can focus on growth. <br />
                        Let&apos;s Build the Future Together. <br />
                        Get started with a trusted development partner today!
                    </h1> */}
                </div>
            </main>
            <footer className="space-y-4">
                <Footer />
                <p className="flex items-center justify-center pb-6">
                    <AiOutlineCopyrightCircle />{" "}
                    <span className="pl-2">2024 Olfaz</span>
                </p>
            </footer>
        </div>
    );
}
