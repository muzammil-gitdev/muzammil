"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] opacity-50" />
            <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] opacity-50" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-2">
                        Front-End Developer
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                        Building with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                            Style &amp; Precision
                        </span>
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
                        I craft responsive, high-performance websites using powerful technologies like{" "}
                        <span className="font-semibold text-slate-800 dark:text-slate-100">Vanilla CSS, Tailwind, JavaScript, React.js, and Next.js</span>.
                        Passionate about creating modern digital experiences.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:opacity-90 transition-opacity"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-semibold"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <div className="flex justify-center items-center relative">
                    {/* Animated Rings */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-indigo-500/30 border-dashed"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full border border-purple-500/30 border-dotted"
                    />

                    {/* Image Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden shadow-2xl shadow-indigo-500/20 ring-4 ring-white/10 bg-slate-200 dark:bg-slate-800"
                    >
                        <Image
                            src="/APC_0631g.JPG"
                            alt="Coding setup"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
