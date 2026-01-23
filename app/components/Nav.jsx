"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";


import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
];

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 transition-all duration-300",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "flex items-center gap-6 rounded-full px-6 py-3 shadow-lg transition-all duration-300 border border-zinc-200/50 dark:border-zinc-800/50",
                    "bg-white/70 backdrop-blur-md dark:bg-zinc-900/70 supports-[backdrop-filter]:bg-white/50"
                )}
            >
                <Link href="/" className="mr-4 text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    ZH
                </Link>
                <ul className="hidden items-center gap-6 sm:flex">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link
                    href="#contact"
                    className="rounded-full bg-zinc-900 px-4 py-1.5 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-zinc-900"
                >
                    Hire Me
                </Link>
            </motion.nav>
        </header>
    );
}
