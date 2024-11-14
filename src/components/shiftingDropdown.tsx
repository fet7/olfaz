// "use client";
// import React, { ReactNode, useEffect, useState } from "react";
// import Image from "next/legacy/image";
// import { FiBarChart2, FiChevronDown, FiHome, FiPieChart } from "react-icons/fi";
// import { ArrowRightIcon } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";
// import Link from "next/link";
// import { Button } from "./ui/button";

// export const ShiftingDropDown = () => {
//     return (
//         <div className="flex w-full justify-start  md:justify-center">
//             <Tabs />
//         </div>
//     );
// };

// const Tabs = () => {
//     const [selected, setSelected] = useState<number | null>(null);
//     const [dir, setDir] = useState<null | "l" | "r">(null);

//     const handleSetSelected = (val: number | null) => {
//         if (typeof selected === "number" && typeof val === "number") {
//             setDir(selected > val ? "r" : "l");
//         } else if (val === null) {
//             setDir(null);
//         }

//         setSelected(val);
//     };

//     return (
//         <div
//             onMouseLeave={() => handleSetSelected(null)}
//             className="relative flex h-fit gap-2"
//         >
//             {TABS.map((t) => {
//                 return (
//                     <Tab
//                         key={t.id}
//                         selected={selected}
//                         handleSetSelected={handleSetSelected}
//                         tab={t.id}
//                     >
//                         {t.title}
//                     </Tab>
//                 );
//             })}

//             <AnimatePresence>
//                 {selected && <Content dir={dir} selected={selected} />}
//             </AnimatePresence>
//         </div>
//     );
// };

// const Tab = ({
//     children,
//     tab,
//     handleSetSelected,
//     selected,
// }: {
//     children: ReactNode;
//     tab: number;
//     handleSetSelected: (val: number | null) => void;
//     selected: number | null;
// }) => {
//     return (
//         <button
//             id={`shift-tab-${tab}`}
//             onMouseEnter={() => handleSetSelected(tab)}
//             onClick={() => handleSetSelected(tab)}
//             className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-small font-normal transition-colors ${
//                 selected === tab ? " text-sky-700" : " "
//             }`}
//         >
//             <span>{children}</span>
//             <FiChevronDown
//                 className={`transition-transform ${
//                     selected === tab ? "rotate-180" : ""
//                 }`}
//             />
//         </button>
//     );
// };

// const Content = ({
//     selected,
//     dir,
// }: {
//     selected: number | null;
//     dir: null | "l" | "r";
// }) => {
//     return (
//         <motion.div
//             id="overlay-content"
//             initial={{
//                 opacity: 0,
//                 y: 8,
//             }}
//             animate={{
//                 opacity: 1,
//                 y: 0,
//             }}
//             exit={{
//                 opacity: 0,
//                 y: 8,
//             }}
//             className="absolute left-0 top-[calc(100%_+_24px)] min-w-[320px] max-w-[80vw] rounded-lg border bg-card p-4"
//         >
//             <Bridge />
//             <Nub selected={selected} />

//             {TABS.map((t) => {
//                 return (
//                     <div className="overflow-hidden" key={t.id}>
//                         {selected === t.id && (
//                             <motion.div
//                                 initial={{
//                                     opacity: 0,
//                                     x:
//                                         dir === "l"
//                                             ? 100
//                                             : dir === "r"
//                                               ? -100
//                                               : 0,
//                                 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{
//                                     duration: 0.25,
//                                     ease: "easeInOut",
//                                 }}
//                             >
//                                 <t.Component />
//                             </motion.div>
//                         )}
//                     </div>
//                 );
//             })}
//         </motion.div>
//     );
// };

// const Bridge = () => (
//     <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
// );

// const Nub = ({ selected }: { selected: number | null }) => {
//     const [left, setLeft] = useState(0);

//     useEffect(() => {
//         moveNub();
//     }, [selected]);

//     const moveNub = () => {
//         if (selected) {
//             const hoveredTab = document.getElementById(`shift-tab-${selected}`);
//             const overlayContent = document.getElementById("overlay-content");

//             if (!hoveredTab || !overlayContent) return;

//             const tabRect = hoveredTab.getBoundingClientRect();
//             const { left: contentLeft } =
//                 overlayContent.getBoundingClientRect();

//             const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

//             setLeft(tabCenter);
//         }
//     };

//     return (
//         <motion.span
//             style={{
//                 clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
//             }}
//             animate={{ left }}
//             transition={{ duration: 0.25, ease: "easeInOut" }}
//             className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border bg-card "
//         />
//     );
// };

// const Products = () => {
//     return (
//         <>
//             <div className="flex gap-4 ">
//                 <div className="flex flex-col">
//                     <h3 className="mb-2 text-normal font-medium">Servers</h3>
//                     <Button variant={"link"} asChild>
//                         <Link
//                             href="/products/servers/powerEdge"
//                             className="-ml-4 block text-sm text-muted-foreground"
//                         >
//                             Dell PowerEdge
//                         </Link>
//                     </Button>
//                     <Button variant={"link"} asChild>
//                         <Link
//                             href="/products/servers/proliant"
//                             className="block -ml-4 text-sm text-muted-foreground"
//                         >
//                             HPE ProLiant
//                         </Link>
//                     </Button>
//                 </div>
//                 <div className="flex flex-col">
//                     <h3 className="mb-2 text-normal font-medium">Switches</h3>

//                     <Button variant={"link"} asChild>
//                         <Link
//                             href="#"
//                             className="-ml-4 block text-sm text-muted-foreground"
//                         >
//                             Cisco
//                         </Link>
//                     </Button>
//                     <Button variant={"link"} asChild>
//                         <Link
//                             href="#"
//                             className="-ml-4 block text-sm text-muted-foreground"
//                         >
//                             Aruba
//                         </Link>
//                     </Button>
//                     <Button variant={"link"} asChild>
//                         <Link
//                             href="#"
//                             className="-ml-4 block text-sm text-muted-foreground"
//                         >
//                             Juniper
//                         </Link>
//                     </Button>
//                     <Button variant={"link"} asChild>
//                         <Link
//                             href="#"
//                             className="block -ml-4 text-sm text-muted-foreground"
//                         >
//                             Netgear
//                         </Link>
//                     </Button>
//                 </div>
//                 <div className="flex flex-col">
//                     <h3 className="mb-2 text-normal font-medium">Firewalls</h3>
//                     <Button variant={"link"} asChild>
//                         <Link
//                             href="#"
//                             className="-ml-4 block text-sm text-muted-foreground"
//                         >
//                             Cisco
//                         </Link>
//                     </Button>
//                     <Button variant={"link"} asChild>
//                         <Link
//                             href="#"
//                             className="-ml-4 block text-sm text-muted-foreground"
//                         >
//                             Fortinet
//                         </Link>
//                     </Button>
//                     <Button variant={"link"} asChild>
//                         <Link
//                             href="#"
//                             className=" -ml-4 block text-sm text-muted-foreground"
//                         >
//                             Palo Alto
//                         </Link>
//                     </Button>
//                     <Button variant={"link"} asChild>
//                         <Link
//                             href="#"
//                             className=" -ml-4 block text-sm text-muted-foreground"
//                         >
//                             Check Point
//                         </Link>
//                     </Button>
//                 </div>
//             </div>

//             <Button
//                 variant={"ghost"}
//                 className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-500"
//             >
//                 <span>View more</span>
//             </Button>
//         </>
//     );
// };

// const Pricing = () => {
//     return (
//         <div className="grid grid-cols-3 gap-4 divide-x divide-neutral-700">
//             <a
//                 href="#"
//                 className="flex w-full flex-col items-center justify-center py-2 text-muted-foreground transition-colors hover:text-neutral-50"
//             >
//                 <FiHome className="mb-2 text-xl text-indigo-500" />
//                 <span className="text-xs">Startup</span>
//             </a>
//             <a
//                 href="#"
//                 className="flex w-full flex-col items-center justify-center py-2 text-muted-foreground transition-colors hover:text-neutral-50"
//             >
//                 <FiBarChart2 className="mb-2 text-xl text-indigo-500" />
//                 <span className="text-xs">Scaleup</span>
//             </a>
//             <a
//                 href="#"
//                 className="flex w-full flex-col items-center justify-center py-2 text-muted-foreground transition-colors hover:text-neutral-50"
//             >
//                 <FiPieChart className="mb-2 text-xl text-indigo-500" />
//                 <span className="text-xs">Enterprise</span>
//             </a>
//         </div>
//     );
// };

// const AboutUs = () => {
//     const [isExpanded, setIsExpanded] = useState(false);
//     const handleToggle = () => {
//         setIsExpanded(!isExpanded);
//     };
//     const Text = `Welcome to Diga Technologies, where innovation meets excellence in
//             data center and network solutions. Our journey began with a simple
//             vision: to revolutionize the technology landscape with cutting-edge
//             products and unparalleled customer service. Today, we stand as a
//             beacon of reliability and ingenuity, committed to empowering
//             businesses with the tools they need to thrive in a rapidly evolving
//             digital world. At Diga Technologies, we believe in the power of
//             technology to transform lives and drive success. Our team of
//             passionate experts works tirelessly to deliver solutions that not
//             only meet but exceed our customers’ expectations. We are dedicated
//             to fostering a culture of continuous improvement, where every
//             challenge is seen as an opportunity to innovate. Join us on this
//             exciting journey, and let’s build a future where technology knows no
//             bounds. Our commitment to excellence is reflected in every aspect of
//             our business. From our meticulously designed products to our
//             exceptional customer support, we strive to set new standards in the
//             industry. We understand that in today’s fast-paced world, staying
//             ahead means embracing change and continually pushing the boundaries
//             of what’s possible. That’s why at Diga Technologies, we invest
//             heavily in research and development, ensuring that we remain at the
//             forefront of technological advancements. Beyond our technical
//             prowess, we pride ourselves on our customer-centric approach. We
//             believe that strong relationships are the foundation of success, and
//             we work closely with our clients to understand their unique needs
//             and challenges. Our solutions are not just about technology; they
//             are about creating value and enabling our customers to achieve their
//             goals. Whether you&apos;re a small business looking to scale or a
//             large enterprise seeking robust infrastructure, Diga Technologies is
//             your trusted partner on the path to success. As we look to the
//             future, our vision remains clear: to be the leader in data center
//             and network solutions, driving innovation and delivering excellence
//             every step of the way. We are excited about the possibilities that
//             lie ahead and are committed to making a positive impact in the
//             communities we serve. Thank you for choosing{" "}
//             <b> Diga Technologies.</b>
//             Together, let&apos;s build a smarter, more connected world.`;
//     return (
//         <div>
//             <div className="grid gap-2">
//                 <a href="#">
//                     <Image
//                         width={"100"}
//                         height={"50"}
//                         src="/logo.svg"
//                         alt="Placeholder image"
//                     />
//                     <h4 className="my-1 font-medium">
//                         We are Diga Technologies
//                     </h4>
//                     <p className="text-s font-extralight">
//                         {isExpanded ? Text : `${Text.substring(0, 200)}...`}
//                     </p>
//                 </a>
//             </div>
//             <Button
//                 variant={"expandGhost"}
//                 Icon={ArrowRightIcon}
//                 iconPlacement="right"
//                 className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-500"
//             >
//                 <span>View more</span>
//             </Button>
//         </div>
//     );
// };

// const ContactUs = () => {
//     const [isExpanded, setIsExpanded] = useState(false);
//     const handleToggle = () => {
//         setIsExpanded(!isExpanded);
//     };
//     const Text = `We are here to support all your data center and network equipment
//             needs! Feel free to reach out to us through any of the digital
//             options listed below. For those who enjoy a personal touch, we’d
//             love to welcome you to our company at Diga Technologies head office.
//             Our team is eager to assist you and provide the best solutions for
//             your technology requirements.`;
//     return (
//         <div>
//             <div className="grid gap-2 ">
//                 <a href="#">
//                     <Image
//                         width={"100"}
//                         height={"50"}
//                         src="/logo.svg"
//                         alt="Placeholder image"
//                     />
//                     <h4 className="my-1 font-medium">Reach out to us</h4>
//                     <p className="text-s font-extralight ">
//                         {isExpanded ? Text : `${Text.substring(0, 200)}...`}
//                     </p>
//                 </a>
//             </div>
//             <Button
//                 variant={"ghost"}
//                 className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-500"
//             >
//                 <span>View more</span>
//             </Button>
//         </div>
//     );
// };

// const TABS = [
//     {
//         title: "Products",
//         Component: Products,
//     },
//     {
//         title: "Pricing",
//         Component: Pricing,
//     },
//     {
//         title: "About Us",
//         Component: AboutUs,
//     },
//     {
//         title: "Contact Us",
//         Component: ContactUs,
//     },
// ].map((n, idx) => ({ ...n, id: idx + 1 }));
