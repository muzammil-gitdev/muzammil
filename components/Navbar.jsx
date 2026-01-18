"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const links = [
        { name: "Home", href: "#hero" },
        { name: "Projects", href: "#projects" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 inset-x-0 z-50 flex justify-center pt-6 pointer-events-none "
        >
            <div className="pointer-events-auto w-[60vw] justify-between flex items-center px-8 py-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 shadow-lg ring-1 ring-black/5">
                <div className="font-bold text-xl tracking-tighter bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    <Image
                        src="/logo (1).png"
                        alt="Logo"
                        width={100}
                        height={100}
                        className="inline-block"
                    />
                </div>
                <ul className="hidden md:flex items-center gap-6">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link
                    href="#contact"
                    className="px-4 py-1.5 text-sm font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-500/20"
                >
                    Contact
                </Link>
            </div>
        </motion.nav>
    );
};

export default Navbar;
