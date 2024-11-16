import React from "react";
import { BackgroundLines } from "./ui/background-lines";

export function BackgroundLinesDemo() {
    return (
        <BackgroundLines className="flex items-center justify-center h-screen w-full flex-col px-4">
            <div className="w-full max-w-lg mx-auto min-w-[430px] px-4">
                {/* Heading Section */}
                <h2
                    className="bg-clip-text text-transparent text-center bg-gradient-to-b
                from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white
                font-sans py-6 relative z-0 font-bold tracking-tight"
                    style={{
                        fontSize: "clamp(2rem, 4vw, 6rem)",
                    }}
                >
                    Power your Business with <br />
                    smart solutions
                </h2>

                {/* Paragraph Section */}
                <p
                    className="max-w-3xl mx-auto font-normal text-neutral-700 dark:text-neutral-400 text-center"
                    style={{
                        fontSize: "clamp(1.3rem, 2vw, 3rem)",
                    }}
                >
                    At{" "}
                    <strong className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                        OLFAZ
                    </strong>
                    , we specialize in creating powerful and dynamic websites
                    tailored for small and medium businesses.
                </p>
            </div>
        </BackgroundLines>
    );
}
