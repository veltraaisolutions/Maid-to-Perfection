import React from "react";
import { Star, ShieldCheck, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustBadges() {
  const badges = [
    {
      icon: (
        <Star
          size={16}
          fill="currentColor"
          className="text-yellow-400"
        />
      ),
      text: "4.9/5 Google Rating",
      sub: "490+ Verified Reviews",
    },
    {
      icon: (
        <ShieldCheck
          size={16}
          className="text-brand"
        />
      ),
      text: "Fully Insured",
      sub: "£2M Public Liability",
    },
    {
      icon: (
        <Award
          size={16}
          className="text-brand"
        />
      ),
      text: "Certified Pro",
      sub: "Checkatrade Approved",
    },
  ];

  return (
    <div className="w-full bg-card/30 backdrop-blur-md border-b border-border/50 py-3">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center gap-3 w-full
                ${i === 0 ? "justify-start pl-2" : ""}
                ${i === 1 ? "justify-center" : ""}
                ${i === 2 ? "justify-end pr-2" : ""}
              `}
            >
              <div className="bg-background p-2 rounded-lg border border-border shadow-sm">
                {badge.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-black uppercase tracking-tighter leading-none">
                  {badge.text}
                </span>
                <span className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest mt-1">
                  {badge.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
