import type { ReactNode } from "react";

import { FadeIn } from "@/components/ui/motion-primitives";
import { HeroCtas } from "./hero-ctas";

export function Hero(): ReactNode {
  return (
    <section className="relative w-full">
      <div className="mx-auto grid w-full max-w-275 grid-cols-1 items-end gap-12 px-6 pt-44 pb-24 sm:px-10 sm:pt-56 sm:pb-32 md:grid-cols-[1.2fr_0.8fr]">
        <FadeIn className="flex flex-col gap-5">
          <p className="eyebrow">Web development & communication</p>
          <h1 className="max-w-[11ch] font-serif text-[3.6rem] font-medium leading-[0.96] tracking-[-0.055em] text-foreground sm:text-[5.25rem]">
            Hello, I&apos;m Abhijot.
          </h1>
          <p className="max-w-[31ch] text-[20px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[24px]">
            A motivated student building a foundation in web development, thoughtful communication, and remote collaboration.
          </p>
          <HeroCtas />
        </FadeIn>

        <FadeIn delay={0.12} className="flex justify-stretch md:justify-end">
          <div className="w-full max-w-sm rounded-[2rem] border border-foreground/10 bg-foreground/[0.03] p-3 shadow-sm">
            <div className="flex aspect-square flex-col justify-between rounded-[1.5rem] bg-[linear-gradient(145deg,#d97706_0%,#f4c27a_48%,#253044_48%,#111827_100%)] p-6 text-white">
              <div className="flex items-start justify-between text-xs uppercase tracking-[0.18em] text-white/75">
                <span>Portfolio</span>
                <span>2026</span>
              </div>
              <div>
                <p className="font-serif text-5xl leading-none tracking-tight">AS</p>
                <p className="mt-3 max-w-[18ch] text-sm leading-relaxed text-white/80">Learning, making, and growing one project at a time.</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Hero;
