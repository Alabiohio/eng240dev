"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "../../../assets/images/hero2.png";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-end overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Engineering background"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-50 md:pb-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl md:text-5xl lg:text-8xl font-black text-gray-900 tracking-tighter leading-[0.9] mb-8">
            Building the <br />
            <span className="text-gradient-primary">Next Generation</span> <br />
            of Engineers
          </h1>
          
          <div className="flex flex-col sm:flex-row justify-start items-left space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/projects"
              className="w-70 px-10 py-4 bg-primary text-white rounded-full font-black text-base hover:bg-primary-dark transition-all shadow-[0_10px_30px_rgba(219,156,121,0.25)] transform hover:scale-105 active:scale-95"
            >
              Explore Projects
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
