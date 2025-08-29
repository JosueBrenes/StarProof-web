"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

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
  );
}