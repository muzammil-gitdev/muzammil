"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Drive-x, Car Rental Web App",
    description:
      "Drive X is a full-stack rental car web application built with Next.js and Tailwind CSS on the frontend, and Node.js, Express, and MongoDB on the backend, allowing users to browse cars and manage rentals efficiently.",
    tags: ["Next.js", "Tailwind CSS", "Node.js"],
    image: "/drive-x.png",
    link: "https://drive-x-git.vercel.app/",
  },
  {
    title: "Rapid Route, Tours Oragnizer",
    description:
      "A tour organizer web application developed using React.js and Tailwind CSS, designed to provide users with an intuitive interface for exploring tour packages, viewing details, and planning trips efficiently.",
    tags: ["React", "Node.js", "Tailwind"],
    image: "/rapid-route.png",
    link: "https://rapid-route-ruddy.vercel.app/",
  },
  {
    title: "Kasana Watches, Ecommerce Website",
    description:
      "A modern watches e-commerce full Stack website built with Next.js and Tailwind CSS, featuring a clean UI, fast performance, and a smooth browsing experience for viewing and purchasing products.",
    tags: ["Next.js", "Tailwind CSS"],
    image: "/kasana-watches.png",
    link: "https://kasana-watches-git.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work, demonstrating clean code and modern
            design principles.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              key={index}
              className={`flex flex-col md:flex-row gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 w-full">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover  transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <a
                    href={project.link}
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-2 transition-all gap-1"
                  >
                    View Project
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
