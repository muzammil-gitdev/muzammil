"use client";

import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-4 bg-white dark:bg-zinc-950">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-3xl bg-zinc-900 px-6 py-16 text-center text-white shadow-2xl dark:bg-zinc-900/50 dark:border dark:border-zinc-800 md:px-12"
                >
                    <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
                        Let&apos;s build something amazing together.
                    </h2>
                    <p className="mb-10 mx-auto max-w-xl text-lg text-zinc-400">
                        Have a project in mind or just want to chat? I&apos;m always open to discussing new opportunities and ideas.
                    </p>

                    <form className="mx-auto max-w-md space-y-4 text-left">
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Name"
                                className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 placeholder-zinc-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 placeholder-zinc-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="Message"
                                className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 placeholder-zinc-500 focus:border-white focus:outline-none focus:ring-1 focus:ring-white transition-colors"
                            />
                        </div>
                        <button
                            type="submit"
                            className="group flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 font-semibold text-zinc-900 transition-all hover:bg-zinc-200 active:scale-95"
                        >
                            Send Message
                            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </form>

                    <div className="mt-12 flex justify-center gap-6">
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="mailto:hello@zeeshan.dev" className="text-zinc-400 hover:text-white transition-colors">
                            <Mail className="h-6 w-6" />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
