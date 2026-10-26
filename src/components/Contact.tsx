"use client";

import { useState } from "react";
import { personalData } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Construct mailto as a reliable fallback
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <section id="contact" className="py-8">
      <div className="space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            06 / Connect
          </h2>
          <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mt-0.5">
            Get In Touch
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Direct channels */}
          <div className="space-y-2.5">
            {/* Email card */}
            <div className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-950 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400">
                  <Mail size={14} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-neutral-400 uppercase">Email</div>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-xs font-medium text-neutral-900 dark:text-neutral-100 hover:underline"
                  >
                    {personalData.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                title="Copy email"
              >
                {copiedEmail ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
              </button>
            </div>

            {/* Phone card */}
            <div className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-950 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400">
                  <Phone size={14} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-neutral-400 uppercase">Phone / WhatsApp</div>
                  <a
                    href={`tel:${personalData.phone.replace(/\s+/g, '')}`}
                    className="text-xs font-medium text-neutral-900 dark:text-neutral-100 hover:underline"
                  >
                    {personalData.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-1.5 rounded border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                title="Copy phone"
              >
                {copiedPhone ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
              </button>
            </div>

            {/* Location & Status */}
            <div className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-950 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-600 dark:text-neutral-400 shrink-0">
                <MapPin size={14} />
              </div>
              <div>
                <div className="text-[10px] font-mono text-neutral-400 uppercase">Location & Relocation</div>
                <div className="text-xs text-neutral-800 dark:text-neutral-200 font-medium">
                  {personalData.location}
                </div>
                <div className="text-[11px] text-neutral-500 font-mono mt-0.5">
                  {personalData.relocation}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Box */}
          <form
            onSubmit={handleSubmit}
            className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-950 flex flex-col justify-between space-y-2.5"
          >
            <div className="space-y-2">
              <div className="text-[11px] font-mono text-neutral-400 uppercase">Send a Direct Message</div>
              
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-2.5 py-1.5 text-xs rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-zinc-900/50 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-2.5 py-1.5 text-xs rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-zinc-900/50 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600"
                />
              </div>

              <textarea
                placeholder="Brief message or role inquiry..."
                rows={3}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-2.5 py-1.5 text-xs rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-zinc-900/50 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              {formSent ? (
                <span className="text-xs font-mono text-emerald-500 flex items-center gap-1">
                  <Check size={12} /> Opening email client...
                </span>
              ) : (
                <span className="text-[10px] font-mono text-neutral-400">
                  Direct dispatch to {personalData.email}
                </span>
              )}

              <button
                type="submit"
                className="px-3 py-1.5 rounded text-xs font-medium bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:text-neutral-950 transition-colors flex items-center gap-1.5"
              >
                <Send size={12} />
                <span>Send</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
