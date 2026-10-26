"use client";

import { useState } from "react";
import { projectsData, Project } from "@/data/portfolioData";
import { ArrowUpRight, Github, FolderGit2, CheckCircle2 } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Full Stack", "Backend / System", "Systems / C++", "Research"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-8 border-b border-neutral-200 dark:border-neutral-800">
      <div className="space-y-6">
        {/* Header & Category Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              02 / Selected Works
            </h2>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100 mt-0.5">
              Software Systems & Research
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  filter === cat
                    ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950 font-medium"
                    : "border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div className="grid grid-cols-1 gap-4">
          {filteredProjects.map((project: Project) => (
            <article
              key={project.id}
              className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-zinc-950 hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-neutral-100 dark:border-neutral-900">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 tracking-tight">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-800 text-neutral-500">
                    {project.category}
                  </span>
                </div>
                <span className="text-xs font-mono text-neutral-400">
                  {project.period}
                </span>
              </div>

              <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300 mt-2">
                {project.tagline}
              </p>

              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="mt-3 space-y-1.5 text-xs text-neutral-600 dark:text-neutral-400">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-neutral-400 font-mono text-[11px] mt-0.5">&bull;</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies & Actions */}
              <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-900 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-neutral-900 dark:hover:text-neutral-100 flex items-center gap-1 transition-colors"
                    >
                      <Github size={13} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-neutral-900 dark:hover:text-neutral-100 flex items-center gap-1 transition-colors"
                    >
                      <span>Preview</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
