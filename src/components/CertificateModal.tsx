"use client";

import { useEffect } from "react";
import Image from "next/image";
import { CertificateItem } from "@/data/portfolioData";
import { X, ExternalLink, Award } from "lucide-react";

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (certificate) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full rounded-lg border border-neutral-700 bg-neutral-950 text-neutral-100 p-4 space-y-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-3 pb-3 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-neutral-800 text-neutral-400">
                {certificate.category}
              </span>
              <span className="text-xs font-mono text-neutral-400">
                {certificate.year}
              </span>
            </div>
            <h3 className="text-base font-semibold text-neutral-100 mt-1">
              {certificate.title}
            </h3>
            <p className="text-xs text-neutral-400">
              {certificate.organization}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded border border-neutral-800 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-900 transition-colors"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Certificate Image Frame */}
        <div className="relative w-full max-h-[60vh] h-80 sm:h-96 rounded border border-neutral-800 bg-neutral-900 flex items-center justify-center overflow-hidden">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-contain p-2"
          />
        </div>

        {/* Description & Link */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 text-xs text-neutral-400">
          <p className="max-w-md">{certificate.description}</p>
          <a
            href={certificate.image}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-mono text-neutral-300 hover:text-white transition-colors"
          >
            <span>Open Original</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
