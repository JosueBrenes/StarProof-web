"use client";
import { motion } from "framer-motion";
import { BadgeCheck, FileCheck2, LockKeyhole, UsersRound } from "lucide-react";

const cases = [
  { Icon: FileCheck2, title: "Escrow Completed", desc: "Prove an escrow settled successfully." },
  { Icon: BadgeCheck, title: "Grant Delivered", desc: "Attest deliveries tied to grants." },
  { Icon: LockKeyhole, title: "KYC Verified", desc: "Share-only-the-proof, not the PII." },
  { Icon: UsersRound, title: "Participation Badge", desc: "Events, hackathons, courses." },
];

export default function UseCasesCarousel() {
  return (
    <div className="relative mx-auto max-w-6xl overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        
        {[...cases, ...cases].map(({ Icon, title, desc }, i) => (
          <div
            key={i}
            className="min-w-[260px] rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
          >
            <Icon className="mb-3 h-6 w-6 text-white/70" />
            <div className="text-lg font-semibold text-white">{title}</div>
            <div className="mt-1 text-sm text-white/70">{desc}</div>
          </div>
        ))}
      </motion.div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent" />
    </div>
  );
}
