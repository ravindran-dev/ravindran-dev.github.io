"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { PageWrapper } from "@/components/ui/PageWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Copy,
  Check,
  Send,
  ArrowRight,
  ExternalLink,
  Terminal,
  Loader2,
  AlertCircle,
} from "lucide-react";

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://formsubmit.co/ajax/ravindrans.dev@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `[Portfolio Inquiry] ${formData.subject || "New message from " + formData.name}`,
          message: formData.message,
          _template: "table",
        }),
      });

      const data = await res.json();

      if (!res.ok && data.success === "false") {
        throw new Error(data.message || "Failed to deliver message.");
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Unable to send message automatically. Please email directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <SectionHeader
        badge="Direct Inquiry"
        title="Get in Touch"
        description="Whether you have an SDE role opportunity, systems research inquiry, or want to collaborate on high-impact projects, send a direct message below."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Left Column: Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-1.5">
            <h3 className="text-lg sm:text-xl font-bold text-foreground font-heading">
              Direct Contact
            </h3>
            <p className="text-xs sm:text-sm text-muted">
              I monitor my inbox actively and typically respond within 24 hours.
            </p>
          </div>

          <div className="space-y-3">
            {/* Email Card */}
            <Card className="p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-primary flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-mono text-muted uppercase block">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-mono font-medium text-foreground hover:text-primary transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg border border-border hover:bg-surface-muted text-muted hover:text-foreground transition-colors shrink-0"
                aria-label="Copy Email Address"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </Card>

            {/* Location Card */}
            <Card className="p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-surface-muted text-muted flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-muted uppercase block">
                  Location &amp; Mobility
                </span>
                <p className="text-xs sm:text-sm font-medium text-foreground">
                  {PERSONAL_INFO.location}
                </p>
              </div>
            </Card>

            {/* Linux Terminal Edition Card */}
            <a
              href={PERSONAL_INFO.terminalPortfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded-xl border border-emerald-500/40 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent hover:border-emerald-500 hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 uppercase font-semibold block">
                      Retro Shell
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-foreground font-heading">
                      Linux Terminal Portfolio
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="text-xs text-muted mt-2">
                Experience an interactive Arch Linux style CLI terminal interface with custom shell commands.
              </p>
            </a>
          </div>

          {/* Social Profiles */}
          <div className="pt-4 border-t border-border/60 space-y-2">
            <span className="text-xs font-mono text-muted uppercase tracking-wider block">
              Professional Profiles
            </span>
            <div className="flex flex-col gap-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border bg-card hover:bg-surface-muted flex items-center justify-between text-xs sm:text-sm font-medium text-foreground transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  <span>linkedin.com/in/ravindran-s</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-muted group-hover:text-foreground" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-border bg-card hover:bg-surface-muted flex items-center justify-between text-xs sm:text-sm font-medium text-foreground transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4" />
                  <span>github.com/ravindran-dev</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-muted group-hover:text-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: In-Web Contact Form */}
        <div className="lg:col-span-7">
          <Card className="p-5 sm:p-8">
            <div className="mb-6 space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-foreground font-heading">
                  Direct In-Web Message
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 font-semibold border border-emerald-200 dark:border-emerald-800">
                  Direct Delivery
                </span>
              </div>
              <p className="text-xs text-muted">
                Delivered straight to my primary inbox ({PERSONAL_INFO.email}) without opening your email client.
              </p>
            </div>

            {error && (
              <div className="mb-5 p-3.5 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/50 flex items-start gap-2.5 text-xs sm:text-sm text-red-700 dark:text-red-300">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {success ? (
              <div className="p-8 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-xs">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-foreground font-heading">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs sm:text-sm text-muted max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Your message has been delivered directly to <strong>{PERSONAL_INFO.email}</strong>. I will get back to you shortly.
                </p>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="text-xs font-semibold text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-muted block text-xs">
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Alex Smith"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-muted block text-xs">
                      Your Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-muted block text-xs">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="SDE Opportunity / Technical Inquiry"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-muted block text-xs">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Hi Ravindran, I came across your portfolio and would like to discuss..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-surface text-foreground text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-primary hover:bg-primary-hover disabled:opacity-60 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </Card>
        </div>
      </div>

      {/* Back to Home CTA */}
      <div className="flex items-center justify-between pt-6 border-t border-border">
        <Link
          href="/achievements"
          className="text-xs sm:text-sm font-medium text-muted hover:text-foreground transition-colors"
        >
          ← Achievements &amp; Accolades
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-primary hover:text-primary-hover transition-colors"
        >
          <span>Return to Home</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageWrapper>
  );
}
