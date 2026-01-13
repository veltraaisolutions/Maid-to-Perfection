"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_DATA, GALLERY_STATS, GalleryProject } from "@/data/gallery";
import { Star, ArrowLeft, FolderOpen } from "lucide-react";

export default function ProjectGallery() {
  const [selectedFolder, setSelectedFolder] = useState<GalleryProject | null>(
    null
  );

  const displayData = selectedFolder
    ? [selectedFolder.imageUrl, ...(selectedFolder.children || [])]
    : GALLERY_DATA;

  return (
    <section className="py-24 w-full max-w-6xl mx-auto px-4 bg-transparent">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-2xl">
          <button
            onClick={() => setSelectedFolder(null)}
            className={`text-brand font-black uppercase tracking-[0.3em] text-xs mb-3 flex items-center gap-2 hover:opacity-70 transition-all cursor-pointer ${
              !selectedFolder && "pointer-events-none opacity-50"
            }`}
          >
            {selectedFolder && <ArrowLeft size={14} />}
            {selectedFolder ? "Back to Portfolio" : "Our Excellence"}
          </button>

          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none text-white">
            {selectedFolder ? (
              selectedFolder.title
            ) : (
              <>
                OVER{" "}
                <span className="text-brand">{GALLERY_STATS.projectCount}</span>{" "}
                SPACES <br />
                <span className="text-brand/80">PERFECTED</span> SINCE 2015
              </>
            )}
          </h2>
        </div>

        {!selectedFolder && (
          <div className="bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 shadow-2xl">
            <div className="bg-brand/10 p-3 rounded-xl">
              <Star
                className="text-brand"
                fill="currentColor"
                size={24}
              />
            </div>
            <div>
              <p className="text-2xl font-black italic text-white">
                {GALLERY_STATS.rating}/5
              </p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
                {GALLERY_STATS.reviewCount} Premium Reviews
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {displayData.map((item, index) => {
            const isFolderView = !selectedFolder;
            const imageUrl = typeof item === "string" ? item : item.imageUrl;
            const title =
              typeof item === "string"
                ? `Project Detail ${index + 1}`
                : item.title;
            const category =
              typeof item === "string"
                ? selectedFolder?.category
                : item.category;

            return (
              <motion.div
                key={imageUrl}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() =>
                  isFolderView && setSelectedFolder(item as GalleryProject)
                }
                className={`group relative overflow-hidden rounded-[2rem] bg-black/20 backdrop-blur-sm border border-white/5 aspect-[4/3] ${
                  isFolderView ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-brand font-black text-[10px] uppercase tracking-[0.2em] mb-1 flex items-center gap-2">
                    {isFolderView && <FolderOpen size={10} />}
                    {category}
                  </p>

                  {isFolderView && (
                    <p className="text-brand/60 text-[9px] uppercase font-black mt-2 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to expand +
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
