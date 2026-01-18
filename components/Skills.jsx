"use client";
import { motion } from "framer-motion";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTailwindcss,
    SiReact,
    SiNextdotjs,
    SiCplusplus
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "React.js", icon: SiReact, color: "text-cyan-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-slate-900 dark:text-white" },
    { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
    { name: "Java", icon: FaJava, color: "text-red-500" },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-white dark:bg-zinc-950">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-16 text-slate-900 dark:text-white">
                    Technical Skills
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            className="flex flex-col items-center gap-4 group cursor-pointer"
                        >
                            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900 shadow-sm group-hover:shadow-md transition-shadow border border-slate-100 dark:border-zinc-800">
                                <skill.icon className={`w-12 h-12 ${skill.color} transition-colors duration-300`} />
                            </div>
                            <span className="font-semibold text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
