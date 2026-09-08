import type { ReactNode } from "react";

const SKILLS = ["English communication", "HTML & CSS basics", "Website structure", "Research", "Problem-solving", "Quick learning", "Adaptability", "Remote collaboration", "Time management"];

export function Skills(): ReactNode { return <div className="flex flex-col gap-3"><h3 className="text-[15px] font-semibold tracking-tight text-foreground">Skills & strengths</h3><div className="rounded-[1.5rem] border border-foreground/10 bg-foreground/[0.03] p-3 sm:p-5"><div className="flex flex-wrap gap-2.5">{SKILLS.map((skill) => <span key={skill} className="rounded-full border border-foreground/10 bg-background px-4 py-2 text-[14px] tracking-tight text-foreground/80 sm:text-[15px]">{skill}</span>)}</div></div></div>; }
