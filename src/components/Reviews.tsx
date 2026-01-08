"use client";

import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { REVIEWS_DATA } from "@/data/reviews";

export default function Reviews() {
  return (
    <div className="mt-16 w-full max-w-5xl mx-auto px-4 pb-20">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tighter leading-none">
          WE&apos;RE RATED <span className="text-brand text-5xl">5/5</span> ON
          GOOGLE
        </h2>
        <p className="text-muted-foreground font-bold text-xs uppercase tracking-[0.2em] mt-3 opacity-80">
          & 9.93/10 ON CHECKATRADE BASED ON 490+ VERIFIED REVIEWS
        </p>
      </div>

      {/* Grid: 1 col on mobile, 2 cols on md screens and up */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {REVIEWS_DATA.map((review) => (
          <motion.div
            key={review.id}
            whileHover={{ y: -5, scale: 1.02 }} // Hover Animation
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-card/50 backdrop-blur-sm border border-border/50 p-8 rounded-[2.5rem] shadow-xl flex flex-col justify-between hover:border-brand/30 hover:bg-card transition-colors cursor-default"
          >
            <div>
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#facc15"
                    color="#facc15"
                  />
                ))}
              </div>
              <p className="text-foreground/90 text-lg leading-relaxed mb-6 italic font-medium">
                &quot;{review.content}&quot;
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-border/20">
              <div>
                <p className="font-black text-sm uppercase tracking-tight">
                  {review.name}
                </p>
                <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest mt-0.5">
                  {review.location ? `${review.location} • ` : ""}
                  {review.date}
                </p>
              </div>

              {/* Branding Badge */}
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center text-[10px] font-black border ${
                  review.source === "google"
                    ? "bg-blue-500/10 border-blue-500/20 text-blue-500"
                    : "bg-red-500/10 border-red-500/20 text-red-500"
                }`}
              >
                {review.source === "google" ? "G" : "C"}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
