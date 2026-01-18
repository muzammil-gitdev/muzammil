"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="py-24 bg-slate-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 w-full"
                    >
                        <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:mr-auto rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/about-me.png"
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 space-y-6"
                    >
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            About Me
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            I am a passionate Front-End Developer with a keen eye for design and a strong command of modern web technologies. My journey in web development is driven by a desire to create intuitive and aesthetically pleasing user interfaces.
                        </p>
                        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            I specialize in identifying and resolving performance bottlenecks, ensuring that every website I build is fast, responsive, and accessible. From crafting pixel-perfect layouts with <strong>CSS (Vanilla & Tailwind)</strong> to building complex state-managed applications with <strong>React and Next.js</strong>, I enjoy every challenge the web throws at me.
                        </p>
                        {/* <div className="pt-4 grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-slate-100 dark:border-zinc-800">
                                <h4 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">3+</h4>
                                <p className="text-slate-500 dark:text-slate-400 font-medium">Years Experience</p>
                            </div>
                            <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-slate-100 dark:border-zinc-800">
                                <h4 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">20+</h4>
                                <p className="text-slate-500 dark:text-slate-400 font-medium">Projects Completed</p>
                            </div>
                        </div> */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
