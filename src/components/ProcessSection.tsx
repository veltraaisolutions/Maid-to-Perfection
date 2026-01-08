"use client";
import React from "react";
import { motion } from "framer-motion";
import { PROCESS_DATA } from "@/data/process";

export default function ProcessSection() {
  return (
    <section className="py-20 w-full max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
          OUR <span className="text-brand">4-STEP</span> PROCESS
        </h2>
        <p className="text-muted-foreground font-bold text-xs uppercase tracking-[0.2em] mt-4 opacity-70">
          From first click to final check — we&apos;ve got you covered.
        </p>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
        {/* Decorative Connecting Line (Desktop Only) */}
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-border to-transparent z-0" />

        {PROCESS_DATA.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative z-10 flex flex-col items-center text-center group"
          >
            {/* Icon Circle */}
            <div className="w-24 h-24 rounded-full bg-card border-2 border-border flex items-center justify-center mb-6 group-hover:border-brand/50 transition-all duration-500 shadow-2xl relative">
              <div className="absolute inset-0 rounded-full bg-brand/5 scale-0 group-hover:scale-100 transition-transform duration-500" />
              <step.icon
                size={36}
                className="text-brand group-hover:scale-110 transition-transform duration-500"
              />

              {/* Step Number Badge */}
              <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-brand text-white text-xs font-black flex items-center justify-center border-4 border-background">
                {step.id}
              </div>
            </div>

            {/* Text Content */}
            <h3 className="text-xl font-black uppercase italic tracking-tighter mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-[200px]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
