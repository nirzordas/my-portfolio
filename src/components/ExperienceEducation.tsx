import { educationData, volunteerData } from "@/data/portfolioData";
import { GraduationCap, Users2, Calendar, MapPin, Award } from "lucide-react";

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-8 border-b border-neutral-200 dark:border-neutral-800">
      <div className="space-y-8">
        {/* Section Header */}
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            04 / Education & Leadership
          </h2>
          <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mt-0.5">
            Academic Track Record & Civic Impact
          </p>
        </div>

        {/* Education Sub-section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-1 text-xs font-mono text-neutral-500 uppercase">
            <GraduationCap size={15} />
            <span>Formal Education</span>
          </div>

          <div className="space-y-3">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-950 hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="text-xs font-mono text-neutral-500 text-left sm:text-right">
                    <div>{edu.period}</div>
                    <div className="text-emerald-600 dark:text-emerald-400 font-medium">
                      {edu.grade}
                    </div>
                  </div>
                </div>

                {edu.details && (
                  <p className="mt-2 text-xs text-neutral-500 leading-relaxed pt-2 border-t border-neutral-100 dark:border-neutral-900">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Volunteer & Leadership Sub-section */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-2 pb-1 text-xs font-mono text-neutral-500 uppercase">
            <Users2 size={15} />
            <span>Leadership & Community Service</span>
          </div>

          <div className="space-y-3">
            {volunteerData.map((vol, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-950 hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      {vol.role}
                    </h3>
                    {vol.badge && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                        <Award size={10} />
                        {vol.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-mono text-neutral-500">
                    {vol.period} &bull; {vol.location}
                  </div>
                </div>

                <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400 mt-0.5">
                  {vol.organization}
                </p>

                <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed pt-2 border-t border-neutral-100 dark:border-neutral-900">
                  {vol.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
