import { personalData } from "@/data/portfolioData";
import { BookOpen, Code2, Award, UserCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-8 border-b border-neutral-200 dark:border-neutral-800">
      <div className="space-y-4">
        {/* Section title */}
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            01 / Background
          </h2>
          <span className="text-xs font-mono text-neutral-400">AIUB CS Undergraduate</span>
        </div>

        {/* Narrative */}
        <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          {personalData.summary}
        </p>

        {/* Highlight Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-3 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-zinc-900/30">
            <div className="text-xs font-mono text-neutral-500">Undergrad CGPA</div>
            <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mt-0.5">
              3.78 <span className="text-xs font-normal text-neutral-400">/ 4.00</span>
            </div>
            <div className="text-[11px] text-neutral-500 font-mono mt-0.5">AIUB CSE</div>
          </div>

          <div className="p-3 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-zinc-900/30">
            <div className="text-xs font-mono text-neutral-500">Core Stack</div>
            <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mt-0.5">
              Next.js + Nest
            </div>
            <div className="text-[11px] text-neutral-500 font-mono mt-0.5">PostgreSQL / C#</div>
          </div>

          <div className="p-3 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-zinc-900/30">
            <div className="text-xs font-mono text-neutral-500">Research Area</div>
            <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mt-0.5">
              Shannon Entropy
            </div>
            <div className="text-[11px] text-neutral-500 font-mono mt-0.5">Information Theory</div>
          </div>

          <div className="p-3 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-zinc-900/30">
            <div className="text-xs font-mono text-neutral-500">Leadership</div>
            <div className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mt-0.5">
              Dept Chief & Cadet
            </div>
            <div className="text-[11px] text-neutral-500 font-mono mt-0.5">Red Crescent / BNCC</div>
          </div>
        </div>

        {/* Academic Reference */}
        <div className="mt-4 p-3 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50/30 dark:bg-zinc-900/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
            <UserCheck size={14} className="text-neutral-400 shrink-0" />
            <div>
              <span className="font-medium text-neutral-900 dark:text-neutral-200">
                Academic Reference: {personalData.reference.name}
              </span>
              <span className="text-neutral-500"> &mdash; {personalData.reference.title}, {personalData.reference.institution}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 font-mono text-neutral-500 text-[11px] shrink-0">
            <a href={`mailto:${personalData.reference.email}`} className="hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors">
              {personalData.reference.email}
            </a>
            <span>&bull;</span>
            <span>{personalData.reference.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
