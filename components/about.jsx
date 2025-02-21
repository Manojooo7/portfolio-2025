"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MagicCard } from './magicui/magic-card';

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-1 gap-12 items-center justify-center"
        >
          {/* Image Section */}
          <div className="flex justify-center align-middle border border-white rounded-full w-60 h-60 overflow-clip">
            <Image
              src="/manoj-2.jpg"
              alt="Manoj Mondal"
              width={200}
              height={200}
              className="object-cover"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="space-y-6 text-center">
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
              <ul className="grid grid-cols-2 gap-2 mt-4 justify-items-center">
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

          </div>
        </motion.div>
      </div>
    </section>
  );
} 