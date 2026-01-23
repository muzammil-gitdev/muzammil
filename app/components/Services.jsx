"use client";

import { motion } from "framer-motion";
import { Monitor, Server, PenTool } from "lucide-react";

const services = [
    {
        title: "Frontend Development",
        description: "Building responsive, pixel-perfect, and accessible user interfaces using modern React & Next.js practices. I focus on creating buttery smooth experiences.",
        icon: <Monitor className="h-8 w-8" />,
    },
    {
        title: "Backend Development",
        description: "Architecting secure, scalable, and robust server-side applications. From REST connectors to complex logic, I ensure data flows efficiently.",
        icon: <Server className="h-8 w-8" />,
    },
    {
        title: "UI / UX Design",
        description: "Designing intuitive and clean user journeys. I believe that good code needs great design to truly shine, focusing on clarity and usability.",
        icon: <PenTool className="h-8 w-8" />,
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 px-4 bg-white dark:bg-zinc-950">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
                        What I Do
                    </h2>
                    <p className="mt-4 text-zinc-500">
                        High-quality services tailored to your needs.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-8 transition-all hover:bg-white hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900"
                        >
                            <div className="mb-6 inline-block rounded-xl bg-white p-4 shadow-sm text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-zinc-100">
                                {service.title}
                            </h3>
                            <p className="text-zinc-500 dark:text-zinc-400">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
