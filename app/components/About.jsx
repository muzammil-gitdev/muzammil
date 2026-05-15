"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-4 bg-white dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            About Me
          </h2>
          <div className="mt-2 h-1 w-20 bg-zinc-900 mx-auto rounded-full dark:bg-zinc-100" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="aspect-square relative rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 group"
          >
            <Image
              src="/about.jpg"
              alt="About Me"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
              Crafting scalable full-stack applications with MERN Stack &
              Next.js.
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              I am a passionate MERN Stack Developer with expertise in MongoDB,
              Express.js, React, Node.js, and Next.js. I create high-speed,
              interactive, and aesthetically pleasing web applications while
              paying close attention to architectural design principles,
              reusable components, API optimization, and intuitive user
              interfaces.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              Be it from creating a fully functional interface from the design
              provided in Figma to building the backend architecture, REST APIs,
              authentication mechanisms, or adding a touch of polish with
              animations using Framer Motion and Tailwind CSS – I excel in every
              step involved in making an app look and perform modern and
              premium.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
