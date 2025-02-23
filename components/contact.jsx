"use client";
import { MagicCard } from "./magicui/magic-card";
import { IconMail, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export function Contact() {
  return (
    <div className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-16">Get In Touch</h2>
      <MagicCard className="max-w-2xl mx-auto p-8">
        <div className="space-y-6 text-center">
          <p className="text-lg text-neutral-300">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll get back to you!
          </p>
          <div className="flex justify-center gap-6">
            <a href="mailto:manoj.mondaal@gmail.com" className="hover:text-indigo-400">
              <IconMail className="w-8 h-8" />
            </a>
            <a href="https://github.com/Manojooo7" className="hover:text-indigo-400">
              <IconBrandGithub className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/in/manojoo7" className="hover:text-indigo-400">
              <IconBrandLinkedin className="w-8 h-8" />
            </a>
          </div>
        </div>
      </MagicCard>
    </div>
  );
} 