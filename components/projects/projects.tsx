import { ArrowRight, Code2, FileText, LayoutTemplate, Search } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

type Project = {
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
};

const PROJECTS: Project[] = [
  { icon: LayoutTemplate, iconLabel: "Portfolio website", title: "A personal portfolio with a clear, confident point of view.", description: "A responsive site that brings together my background, skills, and ongoing learning in one focused experience.", meta: "HTML & CSS · Personal project" },
  { icon: Code2, iconLabel: "Web foundations", title: "Learning how the web works from the structure up.", description: "Exploring semantic HTML, reusable CSS patterns, responsive layouts, and the small details that make pages easier to use.", meta: "HTML · CSS · Responsive design" },
  { icon: Search, iconLabel: "Research & problem-solving", title: "Turning questions into practical next steps.", description: "I enjoy researching unfamiliar tools, breaking problems into smaller parts, and finding solutions I can explain clearly.", meta: "Research · Problem-solving" },
  { icon: FileText, iconLabel: "Communication", title: "Writing and communicating with intention.", description: "Strong written and spoken English helps me collaborate remotely, document my work, and contribute thoughtfully to a team.", meta: "Written · Spoken · Remote-ready" },
];

export type ProjectsProps = { withHeadline?: boolean; viewMoreVisible?: boolean };

export function Projects({ withHeadline = false, viewMoreVisible = false }: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;
  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col gap-4 pt-12 pb-10 sm:pt-20 sm:pb-14">
            <p className="eyebrow">Selected work & learning</p>
            <h2 className="max-w-[12ch] font-serif text-[2.9rem] font-medium leading-[0.98] tracking-tight text-foreground md:text-[4rem]">What I&apos;m building</h2>
            <p className="max-w-[43ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">A snapshot of the skills, experiments, and habits I&apos;m developing as I prepare for my first remote internship.</p>
          </FadeIn>
        ) : null}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {items.map((project, index) => <ProjectCard key={project.iconLabel} project={project} index={index} />)}
        </div>
        {viewMoreVisible ? <div className="mt-10 flex justify-start"><Link href="/projects" className="focus-ring group inline-flex items-center gap-2 rounded-full border border-foreground/10 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5">View all projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" /></Link></div> : null}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }): ReactNode {
  const Icon = project.icon;
  return <FadeIn delay={Math.min(index * 0.06, 0.3)}><article className="project-card flex min-h-64 flex-col justify-between rounded-[1.5rem] border border-foreground/10 bg-background p-6"><div><div className="mb-12 flex items-center justify-between"><span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400"><Icon className="h-5 w-5" aria-hidden="true" /></span><span className="text-xs uppercase tracking-[0.16em] text-foreground/40">0{index + 1}</span></div><h3 className="max-w-[18ch] text-[23px] font-medium leading-[1.12] tracking-tight text-foreground">{project.title}</h3><p className="mt-3 max-w-[40ch] text-[15px] leading-relaxed text-foreground/60">{project.description}</p></div><p className="mt-8 text-xs uppercase tracking-[0.12em] text-foreground/45">{project.meta}</p></article></FadeIn>;
}
