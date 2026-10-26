"use client";

import { useState } from "react";
import Image from "next/image";
import { certificatesData, CertificateItem } from "@/data/portfolioData";
import CertificateModal from "./CertificateModal";
import { Award, ZoomIn } from "lucide-react";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Leadership", "Academic", "Sports", "Certification"];

  const filteredCerts =
    activeCategory === "All"
      ? certificatesData
      : certificatesData.filter((c) => c.category === activeCategory);

  return (
    <section id="credentials" className="py-8 border-b border-neutral-200 dark:border-neutral-800">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              05 / Honors & Certifications
            </h2>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mt-0.5">
              Verified Badges, Regimental Training & Awards
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  activeCategory === cat
                    ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950 font-medium"
                    : "border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-950 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all overflow-hidden flex flex-col"
            >
              {/* Thumbnail Container */}
              <div className="relative h-36 w-full bg-neutral-100 dark:bg-zinc-900 overflow-hidden border-b border-neutral-100 dark:border-neutral-900">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300 filter grayscale contrast-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <div className="flex items-center gap-1 text-xs font-mono bg-black/70 px-2 py-1 rounded">
                    <ZoomIn size={12} />
                    <span>View</span>
                  </div>
                </div>
                <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/90 dark:bg-zinc-950/90 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400">
                  {cert.year}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-3 flex-1 flex flex-col justify-between space-y-1">
                <div>
                  <div className="flex items-center gap-1 text-[10px] font-mono text-neutral-400">
                    <Award size={10} />
                    <span>{cert.category}</span>
                  </div>
                  <h3 className="text-xs font-semibold text-neutral-900 dark:text-neutral-100 line-clamp-1 mt-0.5">
                    {cert.title}
                  </h3>
                  <p className="text-[11px] text-neutral-500 line-clamp-1">
                    {cert.organization}
                  </p>
                </div>
                <p className="text-[11px] text-neutral-600 dark:text-neutral-400 line-clamp-2 pt-1 border-t border-neutral-100 dark:border-neutral-900">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
