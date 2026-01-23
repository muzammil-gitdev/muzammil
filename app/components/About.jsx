"use client";

import { motion } from "framer-motion";
import { Code2, Server, Cloud, PenTool } from "lucide-react"; // Using icons for visual interest if needed, or just text.

export default function About() {
    return (
        <section id="about" className="relative py-24 px-4 bg-white dark:bg-zinc-950">
            <div className="mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
                        About Me
                    </h2>
                    <div className="mt-2 h-1 w-20 bg-zinc-900 mx-auto rounded-full dark:bg-zinc-100" />
                </motion.div>

                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="aspect-square relative rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center group"
                    >
                        {/* Placeholder for Profile Image - Using a gradient or waiting for user image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900" />
                        <span className="relative z-10 text-zinc-400 font-medium group-hover:scale-110 transition-transform duration-500">
                            [Profile Image Placeholder]
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
                            Engineering sleek, scalable solutions.
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                            I am a passionate **MERN & Next.js Developer** with a deep focus on creating web applications that are not only functional but also fast, secure, and intuitive. My journey in tech is driven by a desire to solve complex problems with clean, maintainable architecture.
                        </p>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                            I specialize in bridging the gap between design and engineering, ensuring every pixel is perfect while the underlying code is robust. Whether it's optimizing server-side performance or crafting silky-smooth frontend animations, I love the entire process of bringing ideas to life on the web.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <span className="text-3xl font-bold text-zinc-900 dark:text-white">3+</span>
                                <span className="text-sm text-zinc-500">Years Experience</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-3xl font-bold text-zinc-900 dark:text-white">20+</span>
                                <span className="text-sm text-zinc-500">Projects Completed</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
