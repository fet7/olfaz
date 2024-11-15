import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <div>
            <div className="flex items-center justify-around space-y-6 mb-6">
                <div className=" space-y-6">
                    <p className="font-medium text-xl">Contact Us</p>
                    <div className="flex gap-6 items-center">
                        <Link href={"https://t.me/+csLlBS0CbaRiOTc0"}>
                            <FaTelegram className="w-10 h-10" />
                        </Link>
                        <Link
                            href={
                                "https://x.com/Olfaz_Tech?t=F5rbJrnEztkP4hqwufaoYg&s=09"
                            }
                        >
                            {" "}
                            <BsTwitterX className="w-8 h-8" />
                        </Link>
                        <Link
                            href={
                                "https://www.instagram.com/olfaz_technologies/profilecard/?igsh=MTk1dGd5eG9jNjgxeA=="
                            }
                        >
                            <BsInstagram className="w-10 h-10" />
                        </Link>
                        <Link
                            href={"https://www.facebook.com/share/1Awd6H5mTn/"}
                        >
                            <FaSquareFacebook className="w-10 h-10" />
                        </Link>
                        <Link
                            href={
                                "https://www.linkedin.com/in/olfaz-technologies-10a047339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            }
                        >
                            {" "}
                            <BsWhatsapp className="w-8 h-8" />
                        </Link>
                        <Link
                            href={
                                "https://www.linkedin.com/in/olfaz-technologies-10a047339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            }
                        >
                            {" "}
                            <BsLinkedin className="w-8 h-8" />
                        </Link>
                    </div>
                </div>
                <div className=" space-y-6">
                    <p className="font-medium text-xl">Address</p>
                    <p>
                        MKAS Business Center Near Dembel City Center, <br />{" "}
                        Gabon Street, Kirkos, Addis Ababa
                    </p>
                </div>
            </div>
            <Separator />
        </div>
    );
};

export default Footer;
