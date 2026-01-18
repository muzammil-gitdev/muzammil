"use client";
import { motion } from "framer-motion";

const CTA = () => {
    return (
        <section id="contact" className="py-24 bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Let&apos;s Build Something Amazing Together
                    </h2>
                    <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
                        I&apos;m currently available for freelance work or full-time opportunities. If you have a project that needs some creative touch, I&apos;d love to hear about it.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="mailto:contact@example.com"
                            className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:bg-indigo-50 transition-colors shadow-lg text-lg"
                        >
                            Get in Touch
                        </a>
                        <a
                            href="#"
                            className="px-8 py-4 bg-indigo-500/30 backdrop-blur-sm border border-indigo-200/30 text-white rounded-full font-bold hover:bg-indigo-500/40 transition-colors text-lg"
                        >
                            Download CV
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
