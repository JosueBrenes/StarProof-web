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
} from "lucide-react"

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
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeDemo, setActiveDemo] = useState("verified")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, company, message }),
      })

      toast({
        title: "Thanks for your interest!",
        description: "We'll be in touch soon with your API access.",
      })

      setEmail("")
      setCompany("")
      setMessage("")
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
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
            <Star className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold">StarProof</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Try Demo
            </Button>
            <Button className="bg-gradient-to-r from-[#1B6BFF] to-[#8F43FF] text-white hover:from-[#1657CC] hover:to-[#7A36E0] rounded-2xl h-12 px-6 font-semibold shadow-lg transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1B6BFF]/40">
              Get API Key
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent"
            {...fadeInUp}
          >
            Issue trust at the speed of light.
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            One API. Zero databases. Verifiable credentials on Stellar.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            <Button className="bg-gradient-to-r from-[#1B6BFF] to-[#8F43FF] text-white hover:from-[#1657CC] hover:to-[#7A36E0] rounded-2xl h-12 px-6 font-semibold shadow-lg transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1B6BFF]/40">
              Get API Key
            </Button>
            <Button
              variant="outline"
              className="border-border/70 text-foreground hover:bg-card/50 rounded-2xl h-12 px-6 bg-transparent"
            >
              Try Demo
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
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                step: "1",
                icon: <Globe className="w-8 h-8" />,
                title: "Issuer emits credential",
                description: "Use our API or admin panel to create verifiable credentials",
              },
              {
                step: "2",
                icon: <Link className="w-8 h-8" />,
                title: "Hash stored on-chain",
                description: "Document hash goes to Stellar blockchain, encrypted data stays off-chain",
              },
              {
                step: "3",
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Anyone verifies instantly",
                description: "Share verification link or embed widget for instant proof",
              },
            ].map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative">
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <Badge className="bg-primary text-primary-foreground mr-4 text-lg px-3 py-1">{step.step}</Badge>
                    <div className="text-primary">{step.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-8 h-8" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-4xl font-bold text-center mb-16" {...fadeInUp}>
            Use cases
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Escrow Completed",
                description: "Prove an escrow settled successfully.",
                icon: <CheckCircle className="w-6 h-6" />,
              },
              {
                title: "Grant Delivered",
                description: "Attest deliveries tied to grants.",
                icon: <Award className="w-6 h-6" />,
              },
              {
                title: "KYC Verified",
                description: "Share-only-the-proof, not the PII.",
                icon: <ShieldCheck className="w-6 h-6" />,
              },
              {
                title: "Participation Badge",
                description: "Badges for events, hackathons, courses.",
                icon: <Users className="w-6 h-6" />,
              },
            ].map((useCase, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-105 rounded-2xl">
                  <CardHeader>
                    <div className="flex space-x-4 mb-2">
                      {useCase.icon}
                      <CardTitle className="text-lg">{useCase.title}</CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">{useCase.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Verifier Demo */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.h2 className="text-4xl font-bold text-center mb-16" {...fadeInUp}>
            Live verification demo
          </motion.h2>
          <motion.div {...fadeInUp}>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl">
              <CardHeader>
                <div className="flex space-x-4 mb-4">
                  {[
                    { id: "verified", label: "Verified", icon: CheckCircle },
                    { id: "expired", label: "Expired", icon: AlertTriangle },
                    { id: "revoked", label: "Revoked", icon: XCircle },
                  ].map(({ id, label, icon: Icon }) => (
                    <Button
                      key={id}
                      variant={activeDemo === id ? "default" : "outline"}
                      onClick={() => setActiveDemo(id)}
                      className="flex items-center space-x-2"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{label}</span>
                    </Button>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <Badge
                      className={
                        activeDemo === "verified"
                          ? "bg-[#00D27A] text-white"
                          : activeDemo === "expired"
                            ? "bg-[#FFB020] text-white"
                            : "bg-[#FF4D4F] text-white"
                      }
                    >
                      {activeDemo === "verified" ? "✓ Verified" : activeDemo === "expired" ? "⚠ Expired" : "✖ Revoked"}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Issuer:</span>
                      <p>Stellar Foundation</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Type:</span>
                      <p>KYC Certificate</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Receiver:</span>
                      <p>john.doe@example.com</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Amount:</span>
                      <p>$50,000 USD</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Date:</span>
                      <p>2024-01-15</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">TX ID:</span>
                      <p className="font-mono text-xs">abc123...def789</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeInUp}>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Join the waitlist</CardTitle>
                <CardDescription className="text-center">
                  Get early access to StarProof API and credits for early partners.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-input border-border rounded-xl"
                  />
                  <Input
                    type="text"
                    placeholder="Company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="bg-input border-border rounded-xl"
                  />
                  <Textarea
                    placeholder="Tell us about your use case..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-input border-border rounded-xl min-h-[100px]"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#1B6BFF] to-[#8F43FF] text-white hover:from-[#1657CC] hover:to-[#7A36E0] rounded-2xl h-12 font-semibold shadow-lg transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1B6BFF]/40"
                  >
                    {isSubmitting ? "Submitting..." : "Join Waitlist"}
                  </Button>
                </form>
              </CardContent>
            </Card>
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
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "What goes on-chain?",
                  answer: "Only the hash + status. Your sensitive data stays encrypted off-chain for privacy.",
                },
                {
                  question: "Do I need blockchain knowledge?",
                  answer: "No, use our API/SDK. We handle all the blockchain complexity for you.",
                },
                {
                  question: "Are there templates available?",
                  answer:
                    "Start from our bases or customize. We provide templates for common use cases like KYC, escrow, and certifications.",
                },
                {
                  question: "Is verification public?",
                  answer: "Yes, via link or widget. Anyone can verify credentials without needing special access.",
                },
                {
                  question: "What about pricing?",
                  answer:
                    "Coming soon; early partners get credits. We're working on transparent, developer-friendly pricing.",
                },
                {
                  question: "How secure is the system?",
                  answer:
                    "Built on Stellar blockchain with enterprise-grade encryption. Your data is protected both on and off-chain.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card/30 rounded-xl border-border/50 px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-border/50">
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
            © 2024 StarProof. Issue trust at the speed of light.
          </div>
        </div>
      </footer>
    </div>
  )
}
