import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

const Navbar: React.FC = () => {
    return (
        <div className="py-4 fixed w-full z-10 border-b top-0 backdrop-blur">
            <div className="container flex items-center justify-between mx-auto px-4 sm:px-6 md:px-8">
                {/* Logo Section */}
                <Link
                    href="/"
                    className="relative w-full h-auto max-w-[150px] sm:max-w-[180px] md:max-w-[200px]"
                >
                    <Image
                        src="olfaz.svg"
                        width={200}
                        height={100}
                        alt="Logo"
                        className="dark:invert w-full h-auto"
                    />
                </Link>

                {/* Right Section */}
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Add your menu components or dropdowns here */}
                    <ModeToggle />
                </div>
            </div>

            {/* Optional Mobile Menu Placeholder */}
            <div className="sm:hidden">
                {/* Example: Mobile menu or hamburger button can be added here */}
            </div>
        </div>
    );
};

export default Navbar;
