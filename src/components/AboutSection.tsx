"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ABOUT_DATA } from "@/data/about";

export default function AboutSection() {
  return (
    <section className="py-24 w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image with Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden border-2 border-border/50 aspect-[4/5]">
            <img
              src={ABOUT_DATA.imageUrl}
              alt={ABOUT_DATA.ownerName}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Accent Box */}
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand/10 border border-brand/20 rounded-[2rem] -z-0 hidden md:block" />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-brand font-black uppercase tracking-[0.3em] text-xs mb-4">
            Meet the Owner
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-6">
            DRIVEN BY <br />
            <span className="text-brand">QUALITY.</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            {ABOUT_DATA.bio}
          </p>

          {/* Trust Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {ABOUT_DATA.points.map((point, i) => (
              <div
                key={i}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={20}
                  className="text-brand flex-shrink-0"
                />
                <span className="font-bold uppercase text-xs tracking-wider">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Owner Signature Area */}
          <div className="flex items-center gap-6 pt-8 border-t border-border/50">
            <div>
              <p className="text-2xl font-black italic uppercase tracking-tighter leading-none">
                {ABOUT_DATA.ownerName}
              </p>
              <p className="text-xs font-bold text-brand uppercase tracking-widest mt-1">
                {ABOUT_DATA.role}
              </p>
            </div>

            <div className="flex gap-8 ml-auto">
              {ABOUT_DATA.stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center"
                >
                  <p className="text-2xl font-black">{stat.value}</p>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
