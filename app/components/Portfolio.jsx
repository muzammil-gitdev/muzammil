"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Drive X - Car Rental",
        description:
            "A premium car rental platform featuring real-time analytics, inventory management, and a sleek dark mode UI. Built with a focus on performance and intuitive user experience.",
        image: "/project1 copy.png",
        tech: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
        link: "https://drive-x-git.vercel.app/",
        github: "#",
    },
    {
        title: "Rapid Route Tour Organizer",
        description:
            "A minimalist Tour Organizer application designed for productivity and ease of use. Features drag-and-drop, real-time sync, and collaborative boards.",
        image: "/project2 copy.png",
        tech: ["React", "Tailwind"],
        link: "https://rapid-route-ruddy.vercel.app/",
        github: "#",
    },
    {
        title: "Kasana Watches",
        description:
            "Futuristic watches platform providing deep insights with interactive data visualization. Includes custom charts, engagement metrics, and audience breakdowns.",
        image: "/project3 copy.png",
        tech: ["Next.js", "Tailwind Css", "Framer Motion"],
        link: "http://kasana-watches-git.vercel.app/",
        github: "#",
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 px-4 bg-zinc-50 dark:bg-black">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
                        Selected Works
                    </h2>
                    <p className="mt-4 text-zinc-500">
                        A glance at some of my recent projects.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-24">
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className={`grid gap-8 lg:gap-12 items-center lg:grid-cols-2 ${isEven ? "" : "lg:direction-rtl"
                                    }`}
                            >
                                {/* Image */}
                                <div
                                    className={`relative group ${isEven ? "lg:order-1" : "lg:order-2"
                                        }`}
                                >
                                    <div className="relative overflow-hidden rounded-2xl aspect-[16/10] bg-zinc-100 dark:bg-zinc-900 shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        {/* Subtle gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>

                                    {/* Decorative accent */}
                                    <div
                                        className={`absolute -z-10 w-72 h-72 rounded-full blur-3xl opacity-20 dark:opacity-10 ${isEven
                                            ? "-bottom-10 -right-10 bg-blue-500"
                                            : "-bottom-10 -left-10 bg-purple-500"
                                            }`}
                                    />
                                </div>

                                {/* Content */}
                                <div
                                    className={`flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"
                                        }`}
                                >
                                    {/* Project number */}
                                    <span className="text-sm font-mono text-zinc-400 dark:text-zinc-600 mb-3">
                                        0{index + 1}
                                    </span>

                                    <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                                        {project.title}
                                    </h3>

                                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-xs uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full border border-zinc-200 text-zinc-600 bg-white dark:border-zinc-800 dark:text-zinc-400 dark:bg-zinc-900"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-5">
                                        <a
                                            href={project.link} target="_blank"
                                            className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                                        >
                                            <ExternalLink
                                                size={16}
                                                className="transition-transform group-hover/link:-translate-y-0.5"
                                            />
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.github}
                                            className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                                        >
                                            <Github
                                                size={16}
                                                className="transition-transform group-hover/link:-translate-y-0.5"
                                            />
                                            Source Code
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
