import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
// import { BsTwitterX } from "react-icons/bs";
// import { BsWhatsapp } from "react-icons/bs";
// import { BsLinkedin } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa6";
// import { FaSquareFacebook } from "react-icons/fa6";

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
                        {/* <Link href={"/"}>
                            {" "}
                            <BsTwitterX className="w-8 h-8" />
                        </Link>
                        <Link href={"/"}>
                            <FaSquareFacebook className="w-10 h-10" />
                        </Link>
                        <Link href={"/"}>
                            {" "}
                            <BsWhatsapp className="w-8 h-8" />
                        </Link>
                        <Link href={"/"}>
                            {" "}
                            <BsLinkedin className="w-8 h-8" />
                        </Link> */}
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
