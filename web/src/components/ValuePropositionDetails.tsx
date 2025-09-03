"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { TextAnimate } from "@/components/magicui/text-animate";

import {
  ShieldCheck,
  Webhook,
  Database,
  FileText,
  Wrench,
  Unlink,
  CheckCircle2,
  Info,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};
const staggerChildren = { animate: { transition: { staggerChildren: 0.08 } } };

export default function ValuePropositionDetails() {
  return (
    <section className="space-y-10">
      <motion.div
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 items-start"
      >
        {/* Left column - Title */}
        <motion.div {...fadeInUp} className="space-y-5">
          <TextAnimate
            className="text-left text-xl md:text-6xl font-bold"
            animation="slideLeft"
            by="word"
            delay={0.5}
            duration={0.9}
          >
            We are the simplest way to issue verifiable credentials.
          </TextAnimate>
        </motion.div>

        {/* Right column - Tabs */}
        <motion.div {...fadeInUp} className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6">
          <Tabs defaultValue="issuers" className="w-full">
            <TabsList className="grid grid-cols-3 w-full rounded-xl bg-white/5">
              <TabsTrigger value="issuers">Issuers</TabsTrigger>
              <TabsTrigger value="holders">Holders</TabsTrigger>
              <TabsTrigger value="verifiers">Verifiers</TabsTrigger>
            </TabsList>

            <TabsContent value="issuers">
              <PersonaPanel
                icon={<Webhook className="w-5 h-5 text-white/80" />}
                title="For issuers (startups / platforms)"
                bullets={[
                  "Integrate in hours with API/SDK and templates.",
                  "Public state to reduce disputes and fraud.",
                  "Webhooks to automate lifecycle: issued/revoked/expired.",
                ]}
                badge="Build fast"
              />
            </TabsContent>

            <TabsContent value="holders">
              <PersonaPanel
                icon={<ShieldCheck className="w-5 h-5 text-white/80" />}
                title="For holders (end users)"
                bullets={[
                  "Share a link/QR without exposing your data.",
                  "If revoked or expired, verifiers see it immediately.",
                  "Portable across apps and devices.",
                ]}
                badge="Own your proof"
              />
            </TabsContent>

            <TabsContent value="verifiers">
              <PersonaPanel
                icon={<CheckCircle2 className="w-5 h-5 text-white/80" />}
                title="For verifiers (partners / third parties)"
                bullets={[
                  "No account required: open link or drop-in widget.",
                  "Objective verification against the blockchain.",
                  "Clear outcomes: Active · Revoked · Expired.",
                ]}
                badge="Verify instantly"
              />
            </TabsContent>
          </Tabs>
        </motion.div>
      </motion.div>

      <motion.div
        className="space-y-4"
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h3 className="text-xl font-semibold" variants={fadeInUp}>
          Common alternatives — and why we win
        </motion.h3>

        <Accordion type="single" collapsible className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            {
              value: "inhouse",
              icon: <Wrench className="w-4 h-4" />,
              title: "Build in-house",
              pain: "Expensive, slow; maintain on-chain, security & public verification.",
              win: "StarProof ships it all: API/SDK, anchoring, public verification.",
            },
            {
              value: "pdf",
              icon: <FileText className="w-4 h-4" />,
              title: "PDFs / e-sign",
              pain: "Hard for third parties to verify; no live state.",
              win: "Live status + objective, public verification.",
            },
            {
              value: "onchain",
              icon: <Database className="w-4 h-4" />,
              title: "Store everything on-chain",
              pain: "Costly, slow, exposes PII.",
              win: "Hash on-chain; encrypted data off-chain (privacy + low cost).",
            },
            {
              value: "noanchor",
              icon: <Unlink className="w-4 h-4" />,
              title: "VCs without anchoring",
              pain: "Depend 100% on issuer; little public traceability.",
              win: "Public anchoring on Stellar: anyone can verify.",
            },
          ].map((a) => (
            <AccordionItem key={a.value} value={a.value} className="rounded-xl border border-white/10 bg-white/5 px-3">
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  {a.icon}
                  <span className="font-medium">{a.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-2 text-sm text-white/70">
                <div>• {a.pain}</div>
                <div>• {a.win}</div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      <motion.div
        className="mb-8"
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 text-sm"
          {...fadeInUp}
        >
          <div className="flex items-start gap-4">
            <Info className="mt-1 h-6 w-6 text-white/70 flex-shrink-0" />
            <div className="space-y-3">
              <p className="font-semibold text-white text-base">"Zero databases" — what we mean</p>
              <p className="text-white/70 leading-relaxed">
                You don't need to run a database for credentials. StarProof manages encrypted storage
                and on-chain state; your app can be stateless (store only the <code className="bg-white/10 px-1.5 py-0.5 rounded text-white">credentialId</code>).
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge className="bg-white/10 text-white border-white/20">Hash on-chain</Badge>
                <Badge className="bg-white/10 text-white border-white/20">Data off-chain</Badge>
                <Badge className="bg-white/10 text-white border-white/20">Verifiable by anyone</Badge>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function PersonaPanel({
  icon,
  title,
  bullets,
  badge,
}: {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
  badge: string;
}) {
  return (
    <Card className="bg-card/40 backdrop-blur-sm border-border/50 rounded-2xl p-5 md:p-6">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {icon}
          <h4 className="text-lg font-semibold">{title}</h4>
        </div>
        <Badge className="bg-white/10 text-white border-white/20 rounded-xl">{badge}</Badge>
      </div>
      <ul className="space-y-2 text-sm text-white/70">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#1B6BFF] to-[#8F43FF]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}