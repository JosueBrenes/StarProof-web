"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import HowItWorks from "@/components/HowItWorks";
import WaitlistForm from "@/components/WaitlistForm";
import FAQ from "@/components/FAQ";
import { TextAnimate } from "@/components/magicui/text-animate"



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
      <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <TextAnimate animation="blurIn" as="h1" className="text-4xl sm:text-6xl lg:text-8xl font-bold">
              Welcome to StarProof
            </TextAnimate>
          </div>
          
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4"
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
      <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
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

      {/* Use Cases */}
      <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-16" {...fadeInUp}>
            Use cases
          </motion.h2>
          <motion.div {...fadeInUp}>
            <UseCasesCarousel />
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-16" {...fadeInUp}>
            How it works
          </motion.h2>
          <motion.div {...fadeInUp}>
            <HowItWorks />
          </motion.div>
        </div>
      </section>

      {/* Verifier Demo */}
      <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-16" {...fadeInUp}>
            Credential Demo
          </motion.h2>
          <motion.div className="flex justify-center" {...fadeInUp}>
            <FlipCredential /> 
          </motion.div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeInUp}>
            <WaitlistForm />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-16" {...fadeInUp}>
            Frequently asked questions
          </motion.h2>
          <motion.div {...fadeInUp}>
            <FAQ />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-4 sm:px-6 py-8 sm:py-12 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Star className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold">StarProof</span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="/legal/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="/legal/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                GitHub
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
            © 2025 StarProof. Issue trust at the speed of light.
          </div>
        </div>
      </footer>
    </div>
  )
}
