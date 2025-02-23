"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BorderBeam } from "@/components/magicui/border-beam";
import { motion, AnimatePresence } from "framer-motion";
import { IconX, IconExternalLink, IconBrandGithub } from "@tabler/icons-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "🎨 Creative AI Itinerary Planning",
      description: "AI-powered travel itinerary planner that creates personalized travel schedules based on user preferences, local attractions, and time constraints.",
      image: "/itinerary-wizard-hero.png",
      tech: ["Next.js", "Node.js", "NeonDB", "PostgreSQL", "Clerk", "Prisma", "Gemini AI", "TailwindCSS", "Aceternity UI" , "Shadcn UI", "Magic UI", "Resend", "Double tick", "Webhook"],
      link: "https://itinerary-wizard.vercel.app/",
      github: "https://github.com/Manojooo7/itinerary-wizard",
      longDescription: "A sophisticated AI-driven travel planning application that revolutionizes how people organize their trips. Built with Next.js and powered by OpenAI's GPT-4, it analyzes user preferences, travel duration, and destination details to create optimized day-by-day itineraries. Features include real-time weather integration, local event recommendations, and dynamic routing optimization.",
    },
    {
      title: "ZSCRUM - Project Management",
      description: "Streamline your workflow with our intuitive project management tool.",
      image: "/zscrum-hero.png",
      tech: ["React", "Node.js", "NeonDB", "PostgreSQL", "Clerk", "Prisma", "TailwindCSS", "Shadcn UI"],
      link: "https://zscrum-rust.vercel.app/",
      github: "https://github.com/Manojooo7/Zscrum",
      longDescription: "A comprehensive project management solution designed for modern development teams. ZSCRUM combines the best practices of agile methodologies with an intuitive interface to help teams track progress, manage tasks, and collaborate effectively.",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative group cursor-pointer">
                <Card className="overflow-hidden bg-neutral-900/50 border-neutral-800 min-h-[510px]">
                  <CardHeader className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-3">{project.title}</CardTitle>
                    <p className="text-neutral-400 mb-4">{project.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="text-sm px-3 py-1 rounded-full bg-neutral-800 text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <BorderBeam
                    gradientFrom="#9E7AFF"
                    gradientTo="#FE8BBB"
                    duration={4}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-screen w-full md:w-2/3 lg:w-1/2 bg-neutral-900 z-50 overflow-y-auto"
            >
              <div className="relative p-6">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-neutral-800 transition-colors"
                >
                  <IconX className="w-6 h-6" />
                </button>

                {/* Project Content */}
                <div className="mt-8">
                  <h3 className="text-3xl font-bold mb-6">{selectedProject.title}</h3>
                  
                  <div className="relative h-80 mb-8 rounded-xl overflow-hidden">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="space-y-6">
                    <p className="text-neutral-300 text-lg leading-relaxed">
                      {selectedProject.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-full bg-neutral-800 text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors"
                      >
                        <IconExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-colors"
                      >
                        <IconBrandGithub className="w-5 h-5" />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

const DummyContent = () => {
  return (<>
    {[...new Array(3).fill(1)].map((_, index) => {
      return (
        (<div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
          <p
            className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem.
            Langotiya jeetu ka mara hua yaar is ready to capture every
            thought.
          </p>
          <Image
            src="https://assets.aceternity.com/macbook.png"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain" />
        </div>)
      );
    })}
  </>);
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "🎨 Creative AI Itinerary Planning",
    src: "/itinerary-wizard-hero.png",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Streamline Your Workflow with ZSCRUM.",
    src: "/zscrum-hero.png",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
