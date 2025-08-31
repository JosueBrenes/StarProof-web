"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ShineBorder } from "@/components/magicui/shine-border";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setEmail("");
    setCompany("");
    setMessage("");
    setIsSubmitting(false);
    
    // You can add actual form submission logic here
    console.log("Form submitted:", { email, company, message });
  };

  return (
    <div className="relative">
      <ShineBorder
        borderWidth={2}
        duration={12}
        shineColor={["#6a52ff", "#1B6BFF", "#8F43FF"]}
        className="rounded-2xl"
      />
      <Card className="bg-card/50 backdrop-blur-sm border-border/50 rounded-2xl relative">
        <CardHeader className="px-8 pt-8 pb-6">
          <CardTitle className="text-3xl text-center mb-3">Join the waitlist</CardTitle>
          <CardDescription className="text-center text-lg">
            Get early access to StarProof API and credits for early partners.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-input border-border rounded-xl h-12 text-base"
            />
            <Input
              type="text"
              placeholder="Company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="bg-input border-border rounded-xl h-12 text-base"
            />
            <Textarea
              placeholder="Tell us about your use case..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-input border-border rounded-xl min-h-[140px] text-base p-4"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#1B6BFF] to-[#8F43FF] text-white hover:from-[#1657CC] hover:to-[#7A36E0] rounded-2xl h-14 font-semibold text-lg shadow-lg transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1B6BFF]/40"
            >
              {isSubmitting ? "Submitting..." : "Join Waitlist"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}