import { skillsCategories } from "@/data/portfolioData";
import { Cpu, Terminal, Database, Code, Brain, Wrench } from "lucide-react";

export default function Skills() {
  const getIcon = (title: string) => {
    switch (title) {
      case "Frontend Engineering":
        return <Code size={14} className="text-neutral-500" />;
      case "Backend & Systems":
        return <Terminal size={14} className="text-neutral-500" />;
      case "Databases & Storage":
        return <Database size={14} className="text-neutral-500" />;
      case "Languages & Core":
        return <Cpu size={14} className="text-neutral-500" />;
      case "Machine Learning & Research":
        return <Brain size={14} className="text-neutral-500" />;
      case "Tools & Environment":
        return <Wrench size={14} className="text-neutral-500" />;
      default:
        return <Code size={14} className="text-neutral-500" />;
    }
  };

  return (
    <section id="skills" className="py-8 border-b border-neutral-200 dark:border-neutral-800">
      <div className="space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
            03 / Technical Stack
          </h2>
          <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mt-0.5">
            Engineering Competencies & Runtimes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillsCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-3.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-950 flex flex-col justify-between"
            >
              <div className="flex items-center gap-2 pb-2.5 border-b border-neutral-100 dark:border-neutral-900">
                {getIcon(cat.title)}
                <h3 className="text-xs font-mono font-semibold text-neutral-800 dark:text-neutral-200 uppercase tracking-tight">
                  {cat.title}
                </h3>
              </div>

              <div className="pt-3 flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-zinc-900/40 text-xs"
                  >
                    <span className="text-neutral-800 dark:text-neutral-200">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
                      &bull; {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
