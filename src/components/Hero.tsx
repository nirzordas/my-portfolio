"use client";

import { useState } from "react";
import Image from "next/image";
import { personalData } from "@/data/portfolioData";
import {
  Mail,
  Copy,
  Check,
  Download,
  MapPin,
  Sparkles,
  ExternalLink,
  GraduationCap
} from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-8 pb-8 border-b border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* Profile Info */}
        <div className="space-y-3 max-w-xl">
          {/* Availability pill */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] font-mono border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>Open for Software Engineering roles</span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              {personalData.name}
            </h1>
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mt-1">
              Full Stack Software Engineer &bull; AIUB Undergraduate
            </p>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {personalData.tagline}
          </p>

          {/* Quick Meta Stats / Badges */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
            <div className="flex items-center gap-1.5">
              <GraduationCap size={13} className="text-neutral-400" />
              <span>AIUB CSE &bull; CGPA 3.78</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={13} className="text-neutral-400" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* CTA Actions */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded text-xs font-medium bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:text-neutral-950 transition-colors flex items-center gap-1.5"
            >
              <Mail size={13} />
              <span>Contact Me</span>
            </a>

            <a
              href={personalData.cvPath}
              download
              className="px-3 py-1.5 rounded text-xs font-medium border border-neutral-300 dark:border-neutral-700 hover:border-neutral-800 dark:hover:border-neutral-400 text-neutral-800 dark:text-neutral-200 transition-colors flex items-center gap-1.5"
            >
              <Download size={13} />
              <span>Download CV</span>
            </a>

            <button
              onClick={copyEmail}
              className="px-2.5 py-1.5 rounded text-xs font-mono border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 text-neutral-600 dark:text-neutral-300 transition-colors flex items-center gap-1.5"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check size={13} className="text-emerald-500" />
                  <span className="text-emerald-500">Copied</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>{personalData.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Headshot Photo */}
        <div className="relative group shrink-0">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
            <Image
              src={personalData.profileImage}
              alt={personalData.name}
              width={128}
              height={128}
              priority
              className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-zinc-950 border border-neutral-200 dark:border-neutral-800 text-neutral-500">
            AIUB &apos;26
          </div>
        </div>
      </div>
    </section>
  );
}
