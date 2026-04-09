"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Simulate subscription
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-dark to-indigo-900 p-8 md:p-12 text-white">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
      
      <div className="relative z-10 max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Stay Ahead of the Curve
        </h2>
        <p className="text-white/80 text-sm md:text-base mb-6 leading-relaxed">
          Get the latest articles on technology, web development, and productivity
          delivered straight to your inbox. No spam, unsubscribe anytime.
        </p>

        {status === "success" ? (
          <div className="bg-white/20 rounded-xl px-6 py-4 animate-fade-in">
            <p className="font-medium flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Thank you for subscribing!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-5 py-3.5 rounded-xl bg-white/15 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/20 transition-all backdrop-blur-sm"
              required
              aria-label="Email address for newsletter"
            />
            <button
              type="submit"
              className="px-7 py-3.5 bg-white text-primary-dark font-semibold rounded-xl hover:bg-white/90 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-white/50 text-xs mt-4">
          By subscribing, you agree to our{" "}
          <a href="/privacy-policy" className="underline hover:text-white/70 transition-colors">
            Privacy Policy
          </a>
        </p>
      </div>
    </section>
  );
}
