import React from "react";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";
// import { NavbarMenu } from "./navbar-menu";
// import { ShiftingDropDown } from "./shiftingDropdown";

const Navbar = () => {
    return (
        <div className="py-4 fixed w-full z-10 border-b top-0 backdrop-blur">
            <div className="container flex items-center justify-between mx-auto">
                <Link href={"/"}>
                    <Image
                        src={"logo2.svg"}
                        width={140}
                        height={80}
                        alt="Logo"
                        className="dark:invert"
                    />
                </Link>

                <div className="flex items-center gap-4">
                    {/* <NavbarMenu /> */}

                    {/* <ShiftingDropDown /> */}

                    <ModeToggle />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
