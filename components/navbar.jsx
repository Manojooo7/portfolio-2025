"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { 
  IconHome, 
  IconUser, 
  IconCode, 
  IconMail, 
  IconBrandDocker, 
  IconBrandGithub, 
  IconBrandLinkedin,
  IconBrandTwitter 
} from "@tabler/icons-react";
import Link from "next/link";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconCode className="h-4 w-4" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMail className="h-4 w-4" />,
    },
  ];

  return (
    <div className="fixed top-4 w-full z-50">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between rounded-full border border-white/[0.2] bg-black/60 backdrop-blur-md p-4">
          {/* Navigation Items */}
          <nav className="flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-sm text-neutral-300 hover:text-white transition-colors flex items-center gap-2"
              >
                <span className="block sm:hidden">{item.icon}</span>
                <span className="hidden sm:block">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-2 mr-4">
              <IconBrandDocker className="h-5 w-5 text-blue-500" />
              <span className="font-medium text-sm hidden sm:inline-block">Manoj.dev</span>
            </Link>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <IconBrandGithub className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <IconBrandLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 