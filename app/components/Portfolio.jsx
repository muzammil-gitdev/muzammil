"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "LuxeCart - E-Commerce",
        description: "A premium e-commerce dashboard featuring real-time analytics, inventory management, and a sleek dark mode UI.",
        image: "/project1.png",
        tech: ["Next.js", "Tailwind CSS", "Recharts", "Node.js"],
        link: "#",
        github: "#",
    },
    {
        title: "TaskFlow App",
        description: "A minimalist Kanban-style task management application designed for productivity and ease of use.",
        image: "/project2.png",
        tech: ["React", "Redux Toolkit", "Firebase", "DnD Kit"],
        link: "#",
        github: "#",
    },
    {
        title: "Nexus Analytics",
        description: "Futuristic social media analytics platform providing deep insights with interactive data visualization.",
        image: "/project3.png",
        tech: ["Next.js", "D3.js", "PostgreSQL", "Framer Motion"],
        link: "#",
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
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
                        Selected Works
                    </h2>
                    <p className="mt-4 text-zinc-500">
                        A glance at some of my recent projects.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-[400px] w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 shadow-sm hover:shadow-xl transition-all"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
                                <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-zinc-300 text-sm mb-4 line-clamp-2">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-[10px] uppercase tracking-wider font-semibold text-zinc-900 bg-white/90 px-2 py-1 rounded-sm">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a href={project.link} className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors text-sm font-medium">
                                            <ExternalLink size={16} /> Live Demo
                                        </a>
                                        <a href={project.github} className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors text-sm font-medium">
                                            <Github size={16} /> Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
