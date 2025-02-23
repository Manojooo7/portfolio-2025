"use client";

import React from 'react'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'
import { motion } from "framer-motion";
import { AuroraText } from './magicui/aurora-text';
import { RainbowButton } from './magicui/rainbow-button';
import { ArrowRightIcon } from 'lucide-react';

const HeroSection = () => {
    return (
        <div className="bg-gradient-to-b from-[#152331] to-[#000000] h-screen flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-6 px-4"
            >
                <h2 className="text-xl text-neutral-400">Hi, I'm</h2>
                <AuroraText className="text-4xl md:text-6xl lg:text-7xl font-bold">
                    Manoj Mondal
                </AuroraText>
                <h1 className="text-2xl md:text-3xl text-neutral-300 max-w-2xl mx-auto">
                    A Software Developer specializing in building exceptional
                    {" "}<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ec4899] via-[#8b5cf6] to-[#6366f1]">
               Digital Products
            </span>
                </h1>
                <p className="text-neutral-400 max-w-xl mx-auto">
                    I craft modern web applications using React, Next.js, and cutting-edge technologies
                </p>

                <RainbowButton onClick={() => window.open('/cv',)}>View Resume <ArrowRightIcon className="w-4 h-4" /></RainbowButton>
            </motion.div>
        </div>
    );
}

export default HeroSection;