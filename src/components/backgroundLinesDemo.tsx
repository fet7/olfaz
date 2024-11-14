import React from "react";
import { BackgroundLines } from "./ui/background-lines";

export function BackgroundLinesDemo() {
    return (
        <BackgroundLines className="flex items-center justify-center h-screen w-full flex-col px-4">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-0 font-bold tracking-tight">
                Power your Business with <br />
                smart solutions
            </h2>
            <p className="max-w-xl mx-auto text-8xl font-normal md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                At{" "}
                <strong className="bg-gradient-to-br from-purple-900 via-sky-700 to-lime-500 bg-clip-text text-transparent">
                    OLFAZ
                </strong>
                , we specialize in creating powerful, and dynamic websites
                tailored for small and medium businesses.
            </p>
        </BackgroundLines>
    );
}
