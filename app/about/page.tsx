import { Education } from "@/components/about/education";
import { Skills } from "@/components/about/skills";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({ title: "About", description: "Learn more about Abhijot Singh Sarin, his skills, education, and goals.", path: "/about" });

export default function AboutPage(): ReactNode {
  return <main id="main-content" className="flex flex-1 flex-col"><section className="mx-auto w-full max-w-160 px-6 pt-40 pb-16 sm:px-10 sm:pt-56 sm:pb-24"><FadeIn><div className="rounded-[2rem] border border-foreground/10 bg-foreground/[0.03] p-8 sm:p-12"><p className="eyebrow">A little about me</p><h1 className="mt-5 font-serif text-[2.4rem] font-medium leading-[1.02] tracking-tight text-foreground sm:text-[3.4rem]">Curious, dependable, and ready to learn.</h1><div className="mt-8 space-y-5 text-[17px] leading-[1.7] tracking-tight text-foreground/70 sm:text-[18px]"><p>I&apos;m <strong className="font-semibold text-foreground">Abhijot Singh Sarin</strong>, a student from Kalamboli, Navi Mumbai, currently pursuing my senior secondary education.</p><p>I&apos;m building practical skills in <strong className="font-semibold text-foreground">HTML, CSS, communication, research, and problem-solving</strong>. My goal is to apply what I learn in a work-from-home internship, contribute meaningfully to a team, and keep growing through real experience.</p><p>I&apos;m punctual, disciplined, adaptable, and comfortable working independently in remote settings.</p></div></div></FadeIn></section><section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28"><FadeIn delay={0.1}><div className="flex flex-col gap-10"><Education /><Skills /></div></FadeIn></section><ContactCard /><div className="h-12 sm:h-16" /></main>;
}
