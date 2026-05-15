"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Terminal,
  Cpu,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-zinc-50 px-6 pt-24 pb-12 dark:bg-black lg:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-indigo-500 opacity-20 blur-[100px] dark:bg-indigo-900/40" />
      </div>

      <div className="container mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start text-left z-10 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-xs font-medium text-zinc-600 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-white"
          >
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Muzammil
            </span>
            .
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-2xl font-semibold text-zinc-700 dark:text-zinc-300"
          >
            MERN Stack & Next.js Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 max-w-lg text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed"
          >
            I build accessible, pixel-perfect, and performant web experiences.
            Passionate about cutting-edge tech and crafting software that solves
            real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="#portfolio"
              className="flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-zinc-800 hover:scale-105 active:scale-95 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://drive.google.com/file/d/1xJt5vejaX-NemZQSFbUrFMPkPs2KnClc/view?usp=sharing"
              target="_blank"
              className="flex hover:text-black items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:border-zinc-300 hover:bg-zinc-50 hover:scale-105 active:scale-95 dark:border-zinc-800 dark:bg-black dark:text-zinc-100 dark:hover:border-zinc-700"
            >
              Resume
              <Download className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0, delay: 0.6 }}
            className="mt-10 flex items-center gap-6 text-zinc-500 dark:text-zinc-400"
          >
            <Link
              href="https://github.com/muzammil-gitdev"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              target="blank"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muzammil-ali-07b09b25b/"
              target="_blank"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="mailto:[EMAIL_ADDRESS]"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Visual/Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center lg:justify-end z-10 order-1 lg:order-2"
        >
          <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
            {/* Decorative blobs behind avatar */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl animate-pulse" />

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative h-full w-full z-20"
            >
              <Image
                src="/avatar.png"
                alt="Muzammil Haider"
                width={450}
                height={450}
                className="object-contain drop-shadow-2xl mix-blend-multiply dark:mix-blend-normal rounded-full"
                priority
              />
            </motion.div>

            {/* Floating Glass Cards */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -left-12 top-10 z-30 rounded-2xl border border-white/40 bg-white/60 p-4 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/60 md:-left-20"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    Expertise
                  </p>
                  <p className="text-sm font-bold text-zinc-900 dark:text-white">
                    Next.js & React
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -right-12 bottom-20 z-30 rounded-2xl border border-white/40 bg-white/60 p-4 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/60 md:-right-20"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                  <Terminal className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                    Clean Code
                  </p>
                  <p className="text-sm font-bold text-zinc-900 dark:text-white">
                    Scalable Arch.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-400 hidden lg:block"
      >
        <ArrowRight className="h-5 w-5 rotate-90" />
      </motion.div>
    </section>
  );
}
