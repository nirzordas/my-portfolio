"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { personalData } from "@/data/portfolioData";

export default function Header() {
  const [dhakaTime, setDhakaTime] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setDhakaTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Credentials", href: "#credentials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-medium text-sm tracking-tight text-neutral-900 dark:text-neutral-100 group-hover:text-emerald-500 transition-colors">
            {personalData.name}
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-neutral-400 dark:text-neutral-500">
            / SWE
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 text-xs font-medium text-neutral-600 dark:text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Right: Clock + Resume + Theme */}
        <div className="flex items-center gap-3">
          {dhakaTime && (
            <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-mono text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 px-2 py-1 rounded">
              <span className="text-neutral-400">Dhaka</span>
              <span>{dhakaTime}</span>
            </div>
          )}

          <a
            href={personalData.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-neutral-400 text-neutral-800 dark:text-neutral-200 transition-colors"
          >
            <span>CV</span>
            <ArrowUpRight size={12} />
          </a>

          <ThemeToggle />

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden w-8 h-8 flex items-center justify-center rounded border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-950 px-4 py-3 flex flex-col gap-2.5 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-100"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
            <span className="text-xs text-neutral-500 font-mono">Dhaka (GMT+6)</span>
            <a
              href={personalData.cvPath}
              download
              className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1"
            >
              Download CV <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
