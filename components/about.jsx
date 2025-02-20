"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MagicCard } from './magicui/magic-card';

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <div className="relative">
            <MagicCard className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%20387w"
                alt="Manoj Mondal"
                fill
                className="object-cover"
                priority
              />
            </MagicCard>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">About Me</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Hello! I'm Manoj, a passionate software developer with expertise in modern web technologies. 
                I specialize in building robust and scalable applications using React, Next.js, and Docker.
              </p>
              <p>
                With a strong foundation in full-stack development, I enjoy creating efficient solutions 
                that solve real-world problems. My experience includes working with:
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-4">
                {[
                  "React.js",
                  "Next.js",
                  "Docker",
                  "Node.js",
                  "API Integration",
                  "Clerk Auth",
                  "Neon DB",
                  "Git/GitHub",
                ].map((skill) => (
                  <li key={skill} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing my knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">3+</h3>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">20+</h3>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">15+</h3>
                <p className="text-sm text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 