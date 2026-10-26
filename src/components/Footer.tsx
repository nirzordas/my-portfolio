import { personalData } from "@/data/portfolioData";
import { ArrowUp, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-6 mt-8 text-xs text-neutral-500">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>{personalData.name} &bull; Next.js &bull; Vercel Ready</span>
        </div>

        <div className="flex items-center gap-4 text-[11px] font-mono">
          <span>Dhaka, BD (UTC+6)</span>
          <a
            href="#"
            className="hover:text-neutral-900 dark:hover:text-neutral-100 flex items-center gap-1 transition-colors"
          >
            <span>Top</span>
            <ArrowUp size={11} />
          </a>
        </div>
      </div>
    </footer>
  );
}
