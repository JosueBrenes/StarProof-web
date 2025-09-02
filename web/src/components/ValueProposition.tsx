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

import {
  ShieldCheck,
  Lock,
  Hash,
  Zap,
  Globe,
  Code2,
  Gauge,
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

export default function ValueProposition() {
  return (
    <section className="space-y-10">
      {/* 1) Slogan primero */}
      <motion.div
        className="text-center"
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80"
          {...fadeInUp}
        >
          <span className="font-medium">“Issue trust at the speed of light.”</span>
        </motion.div>
      </motion.div>

      {/* 2) Diferenciadores */}
      <motion.div
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {[
          {
            icon: <Lock className="w-6 h-6" />,
            title: "Privacy by design",
            desc: "No PII on-chain; only hash + state. Data encrypted off-chain.",
          },
          {
            icon: <Hash className="w-6 h-6" />,
            title: "Deterministic proofs",
            desc: "JCS + SHA-256 → same content = same hash. Objective verification.",
          },
          {
            icon: <Zap className="w-6 h-6" />,
            title: "1-click verification",
            desc: "Embeddable widget + public portal. No extra integration to verify.",
          },
          {
            icon: <Code2 className="w-6 h-6" />,
            title: "API/SDK for devs",
            desc: "Templates, idempotency, HMAC, webhooks, OpenAPI, sandbox.",
          },
          {
            icon: <Gauge className="w-6 h-6" />,
            title: "Low cost & latency",
            desc: "Lightweight anchoring on Stellar: predictable costs, stable performance.",
          },
          {
            icon: <Globe className="w-6 h-6" />,
            title: "Verifiable by anyone",
            desc: "Provider-independent: public verification against the chain.",
          },
        ].map((f, i) => (
          <motion.div key={i} variants={fadeInUp}>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl hover:bg-card/70 transition-all duration-300 hover:scale-[1.02] cursor-default">
              <CardHeader className="space-y-1">
                <div className="text-white/80 mb-2">{f.icon}</div>
                <CardTitle className="text-lg">{f.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {f.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* 3) Título principal */}
      <motion.div
        className="text-center"
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h3 className="text-3xl md:text-4xl font-bold" {...fadeInUp}>
          We are the simplest way to issue verifiable credentials.
        </motion.h3>
      </motion.div>

      {/* 4) Personas — Tabs */}
      <motion.div
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6"
      >
        <Tabs defaultValue="issuers" className="w-full">
          <TabsList className="mb-4 grid grid-cols-3 w-full">
            <TabsTrigger value="issuers">Issuers</TabsTrigger>
            <TabsTrigger value="holders">Holders</TabsTrigger>
            <TabsTrigger value="verifiers">Verifiers</TabsTrigger>
          </TabsList>

          <TabsContent value="issuers">
            <PersonaCard
              icon={<Webhook className="w-5 h-5 text-white/80" />}
              title="For issuers (startups / platforms)"
              points={[
                "Integrate in hours, not weeks (API/SDK + templates).",
                "Increase trust & reduce disputes (public state).",
                "Webhooks to automate issued/revoked/expired.",
              ]}
            />
          </TabsContent>

          <TabsContent value="holders">
            <PersonaCard
              icon={<ShieldCheck className="w-5 h-5 text-white/80" />}
              title="For holders (end users)"
              points={[
                "Portable link/QR; share proof without exposing data.",
                "If revoked, verifiers see it instantly.",
                "Simple & secure from any device.",
              ]}
            />
          </TabsContent>

          <TabsContent value="verifiers">
            <PersonaCard
              icon={<CheckCircle2 className="w-5 h-5 text-white/80" />}
              title="For verifiers (partners / third parties)"
              points={[
                "No account needed: open the link or drop-in widget.",
                "Objective verification against blockchain.",
                "Clear results: Active / Revoked / Expired.",
              ]}
            />
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* 5) Resto: alternativas + micro-nota */}
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
        className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 text-sm"
        {...fadeInUp}
      >
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 h-5 w-5 text-white/70" />
          <div className="space-y-1">
            <p className="font-semibold text-white">“Zero databases” — what we mean</p>
            <p className="text-white/70">
              You don’t need to run a database for credentials. StarProof manages encrypted storage
              and on-chain state; your app can be stateless (store only the <code>credentialId</code>).
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge className="bg-white/10 text-white">Hash on-chain</Badge>
              <Badge className="bg-white/10 text-white">Data off-chain</Badge>
              <Badge className="bg-white/10 text-white">Verifiable by anyone</Badge>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* --------- Subcomponentes --------- */
function PersonaCard({
  icon,
  title,
  points,
}: {
  icon: React.ReactNode;
  title: string;
  points: string[];
}) {
  return (
    <Card className="bg-card/40 backdrop-blur-sm border-border/50 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-3">
        <Badge className="rounded-xl bg-white/10 text-white px-2 py-0.5">
          Persona
        </Badge>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul className="space-y-2 text-sm text-white/70">
        {points.map((pt, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00aaff]" />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
