/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
// import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY_DATA, GALLERY_STATS } from "@/data/gallery";
import { Star } from "lucide-react";

export default function ProjectGallery() {
  return (
    <section className="py-24 w-full max-w-6xl mx-auto px-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <p className="text-brand font-black uppercase tracking-[0.3em] text-xs mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">
            OVER{" "}
            <span className="text-brand">{GALLERY_STATS.projectCount}</span>{" "}
            HOMES <br />
            TRANSFORMED SINCE 2015
          </h2>
        </div>

        {/* Stat Badge */}
        <div className="bg-card border border-border p-4 rounded-2xl flex items-center gap-4 shadow-xl">
          <div className="bg-brand/10 p-3 rounded-xl">
            <Star
              className="text-brand"
              fill="currentColor"
              size={24}
            />
          </div>
          <div>
            <p className="text-2xl font-black italic">
              {GALLERY_STATS.rating}/5
            </p>
            <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
              Based on {GALLERY_STATS.reviewCount} Reviews
            </p>
          </div>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GALLERY_DATA.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-[2rem] bg-card border border-border/50 aspect-[4/3]"
          >
            {/* Image with Zoom Effect */}
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover brightness-75 group-hover:brightness-90 transition-all"
              />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-brand font-black text-[10px] uppercase tracking-widest mb-1">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-black uppercase italic tracking-tighter text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
