"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Palette,
    Cloud,
    Terminal,
    Zap
} from "lucide-react";

const skillsData = [
    {
        category: "Frontend",
        icon: <Code2 className="w-6 h-6" />,
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
        category: "Backend",
        icon: <Database className="w-6 h-6" />,
        skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "Authentication (JWT)"],
    },
    {
        category: "UI / UX Design",
        icon: <Palette className="w-6 h-6" />,
        skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "Responsive Design", "User Flow"],
    },
    {
        category: "Cloud & Deployment",
        icon: <Cloud className="w-6 h-6" />,
        skills: ["Vercel", "Netlify", "Firebase", "MongoDB Atlas"],
    },
    {
        category: "Tools & Workflow",
        icon: <Terminal className="w-6 h-6" />,
        skills: ["Git", "GitHub", "Postman", "VS Code", "npm / yarn", "Webpack"],
    },
    {
        category: "Creative",
        icon: <Zap className="w-6 h-6" />,
        skills: ["Micro-animations", "Interaction Design", "Visual Hierarchy", "Smooth Scrolling"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-4 bg-zinc-50 dark:bg-black">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
                        Technical Arsenal
                    </h2>
                    <p className="mt-4 text-zinc-500 max-w-2xl mx-auto">
                        A curated list of technologies and tools I use to build powerful, scalable digital products.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50"
                        >
                            <div className="mb-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-900 transition-colors">
                                        {category.icon}
                                    </div>
                                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                                        {category.category}
                                    </h3>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 transition-colors group-hover:bg-zinc-200/80 dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:bg-zinc-700"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
