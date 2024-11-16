"use client";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import { BsTwitterX, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { FaTelegram, FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="min-w-[430px] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 space-y-6 text-neutral-700 dark:text-neutral-300">
            <Separator />
            <div className="flex flex-col md:flex-row items-center justify-around gap-10 md:gap-6">
                {/* Contact Section */}
                <div className="space-y-4">
                    <p
                        className="font-semibold text-center md:text-left pb-2"
                        style={{
                            fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", // Responsive font size
                        }}
                    >
                        Contact Us
                    </p>
                    <div className="flex gap-4 md:gap-6 items-center justify-center md:justify-start">
                        <Link href={"https://t.me/+csLlBS0CbaRiOTc0"}>
                            <FaTelegram className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 hover:scale-110 hover:text-blue-400" />
                        </Link>
                        <Link
                            href={
                                "https://x.com/Olfaz_Tech?t=F5rbJrnEztkP4hqwufaoYg&s=09"
                            }
                        >
                            <BsTwitterX className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 hover:scale-110 hover:text-black dark:hover:text-white" />
                        </Link>
                        <Link
                            href={
                                "https://www.instagram.com/olfaz_technologies/profilecard/?igsh=MTk1dGd5eG9jNjgxeA=="
                            }
                            className=" hover:scale-110 duration-300"
                        >
                            <i className="bi bi-instagram text-4xl md:text-5xl transition-transform duration-300  hover:text-transparent hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#741054] hover:bg-clip-text"></i>
                        </Link>

                        <Link
                            href={"https://www.facebook.com/share/1Awd6H5mTn/"}
                        >
                            <FaSquareFacebook className="w-8 h-8 md:w-12 md:h-12 transition-transform duration-300 hover:scale-110 hover:text-blue-600" />
                        </Link>
                        <Link
                            href={
                                "https://www.linkedin.com/in/olfaz-technologies-10a047339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            }
                        >
                            <BsWhatsapp className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 hover:scale-110 hover:text-green-500" />
                        </Link>
                        <Link
                            href={
                                "https://www.linkedin.com/in/olfaz-technologies-10a047339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            }
                        >
                            <BsLinkedin className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 hover:scale-110 hover:text-[#0A66C2]" />
                        </Link>
                    </div>
                </div>

                {/* Address Section */}
                <div className="space-y-4 text-center md:text-left">
                    <p
                        className="font-semibold"
                        style={{
                            fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", // Responsive font size
                        }}
                    >
                        Address
                    </p>
                    <p
                        className="leading-relaxed font-extralight"
                        style={{
                            fontSize: "clamp(1rem, 2vw, 1.4rem)", // Responsive font size
                            maxWidth: "30ch", // Limit to 30 characters per line (adjustable)
                            textWrap: "balance", // Helps evenly wrap text
                            margin: "0 auto", // Center aligns text for smaller screens
                        }}
                    >
                        MKAS Business Center Near Dembel City Center, Gabon
                        Street, Kirkos, Addis Ababa
                    </p>
                </div>
            </div>

            {/* Separator */}
            {/* <Separator /> */}

            {/* Footer Bottom Section */}
            <p
                className="text-center pt-4"
                style={{
                    fontSize: "clamp(0.8rem, 1.5vw, 1rem)", // Responsive font size for small text
                }}
            >
                &copy; 2024 Olfaz. All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;
