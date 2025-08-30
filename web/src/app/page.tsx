"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import Aurora from "@/components/Aurora"
import StarsBackground from "@/components/StarsBackground"
import UseCasesCarousel from "@/components/UseCasesCarousel"
import {
  ShieldCheck,
  Link,
  Lock,
  Zap,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Star,
  Globe,
  Users,
  Award,
  CreditCard,
} from "lucide-react"
import FlipCredential from "@/components/FlipCredential"
import Image from "next/image"
import ScrollProgress from "@/components/ScrollProgress"
import AnimatedText from "@/components/AnimatedText";
import HowItWorks from "@/components/HowItWorks";
import WaitlistForm from "@/components/WaitlistForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";



const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function StarProofLanding() {
  const [activeDemo, setActiveDemo] = useState("verified")
  const { toast } = useToast()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      {/* Starfield Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[#1B1F2E]" />
        <Aurora />
        <StarsBackground />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image 
              src="/preview-img1.png" 
              alt="StarProof Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8"
            />
            <span className="text-2xl font-bold">StarProof</span>
          </div>
          
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <AnimatedText
              text="Welcome to StarProof"
              className="text-7xl font-bold"
              animationType="letters"
              staggerDelay={0.08} 
              duration={0.9}
            />
          </div>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            One API. Easy to use. Verifiable credentials on Stellar.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <Button className="bg-gradient-to-r from-[#1B6BFF] to-[#8F43FF] text-white hover:from-[#1657CC] hover:to-[#7A36E0] rounded-2xl h-12 px-6 font-semibold shadow-lg transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1B6BFF]/40">
              Try our Demo!
            </Button>
            
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "One-click verification",
                description: "Portal & embeddable widget",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Live status tracking",
                description: "Active / revoked / expired",
              },
              {
                icon: <Lock className="w-8 h-8" />,
                title: "API/SDK integration",
                description: "Integrate in hours, not weeks",
              },
            ].map((prop, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-105 rounded-2xl">
                  <CardHeader>
                    <div className="text-primary mb-4">{prop.icon}</div>
                    <CardTitle className="text-xl">{prop.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{prop.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-4xl font-bold text-center mb-16" {...fadeInUp}>
            How it works
          </motion.h2>
          <motion.div {...fadeInUp}>
            <HowItWorks />
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-4xl font-bold text-center mb-16" {...fadeInUp}>
            Use cases
          </motion.h2>
          <motion.div {...fadeInUp}>
            <UseCasesCarousel />
          </motion.div>
        </div>
      </section>

      {/* Verifier Demo */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.h2 className="text-4xl font-bold text-center mb-16" {...fadeInUp}>
            Credential Demo
          </motion.h2>
          <motion.div className="flex justify-center" {...fadeInUp}>
            <FlipCredential /> 
          </motion.div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeInUp}>
            <WaitlistForm />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.h2 className="text-4xl font-bold text-center mb-16" {...fadeInUp}>
            Frequently asked questions
          </motion.h2>
          <motion.div {...fadeInUp}>
            <FAQ />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-border/50">
        <Footer />
      </footer>
    </div>
  )
}
