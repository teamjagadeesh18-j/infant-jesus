"use client";

import React, { useRef } from "react";
import { LazyMotion, domAnimation, m, useScroll, useTransform, useSpring, type MotionValue } from "framer-motion";

const Pin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 3a1 1 0 0 1 .117 1.993l-.117 .007v4.764l1.894 3.789a1 1 0 0 1 .1 .331l.006 .116v2a1 1 0 0 1 -.883 .993l-.117 .007h-4v4a1 1 0 0 1 -1.993 .117l-.007 -.117v-4h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-2a1 1 0 0 1 .06 -.34l.046 -.107l1.894 -3.791v-4.762a1 1 0 0 1 -.117 -1.993l.117 -.007h8z" />
  </svg>
);

export interface TrackStep {
  title: string;
  description: string;
  colorTheme?: "orange" | "blue" | "purple";
  colors?: { bg: string; text: string; border: string };
}

export interface HowItWorksTrackProps {
  steps?: TrackStep[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const DEFAULT_STEPS: TrackStep[] = [
  { title: "Submit Online Inquiry", description: "Fill out the online application form or call our admissions desk.", colorTheme: "orange" },
  { title: "Campus Visit & Meeting", description: "Visit campus to interact with faculty and explore our facilities.", colorTheme: "blue" },
  { title: "Document Submission", description: "Provide birth certificate, transfer certificate (TC), and mark sheets.", colorTheme: "purple" },
  { title: "Admission Confirmation", description: "Receive official confirmation and complete enrollment formalities.", colorTheme: "orange" },
  { title: "Welcome & Academic Start", description: "Join orientation, collect uniform & books, and start learning!", colorTheme: "blue" },
];

const bgColors = { orange: "bg-orange-50 dark:bg-orange-500/10", blue: "bg-blue-50 dark:bg-blue-500/10", purple: "bg-purple-50 dark:bg-purple-500/10" };
const textColors = { orange: "text-orange-500 dark:text-orange-400", blue: "text-blue-600 dark:text-blue-400", purple: "text-purple-600 dark:text-purple-400" };
const borderColors = { orange: "border-orange-100 dark:border-orange-500/20", blue: "border-blue-100 dark:border-blue-500/20", purple: "border-purple-100 dark:border-purple-500/20" };
const dotColors = { orange: "bg-orange-500 shadow-orange-500/50", blue: "bg-blue-500 shadow-blue-500/50", purple: "bg-purple-500 shadow-purple-500/50" };

function StepRow({ step, index, progress, total }: { step: TrackStep; index: number; progress: MotionValue<number>; total: number }) {
  const theme = step.colorTheme || "blue";
  const bg = step.colors?.bg || bgColors[theme];
  const text = step.colors?.text || textColors[theme];
  const border = step.colors?.border || borderColors[theme];
  const isLeft = index % 2 === 0;

  const segStart = index / total;
  const segEnd = (index + 1) / total;
  const lit = useTransform(progress, [segStart, segEnd], [0, 1]);
  const scale = useTransform(lit, [0, 1], [0.5, 1]);
  const opacity = useTransform(lit, [0, 0.35, 1], [0.75, 0.9, 1]);
  // cardX disabled on mobile to prevent line overlap

  return (
    // COMPACT: min-h reduced 220px -> 130px so 5 rows fit in a normal section, not a scroll-jacked page
    <div className="relative flex items-center min-h-[130px] w-full">
      <m.div style={{ scale }} className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
        <m.div style={{ opacity }} className={`w-4 h-4 rounded-full ${dotColors[theme]} shadow-[0_0_12px_2px] ring-4 ring-white dark:ring-neutral-950`} />
      </m.div>

      <m.div style={{ opacity }} className={`w-full md:w-[42%] ${isLeft ? "md:mr-auto md:pr-10 md:text-right" : "md:ml-auto md:pl-10 md:text-left"} pl-12 md:pl-0`}>
        <div className="bg-white dark:bg-neutral-900 p-1.5 rounded-[16px] shadow-[0px_6px_14px_0px_#D3D3D3] dark:shadow-none border border-neutral-100 dark:border-neutral-800">
          <div className={`${bg} border ${border} rounded-[12px] p-3 relative overflow-hidden`}>
            <Pin className={`w-4 h-4 ${text} mb-1.5 ${isLeft ? "md:ml-auto" : ""}`} />
            <span className={`${text} text-xl font-bold`}>0{index + 1}</span>
            <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-100 mt-1 mb-1">{step.title}</h3>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-snug tracking-tight">{step.description}</p>
          </div>
        </div>
      </m.div>
    </div>
  );
}

export default function HowItWorksTrack({
  steps,
  title = "How Admissions Work",
  subtitle = "Follow the track from start to finish.",
  className
}: HowItWorksTrackProps) {
  const data = steps && steps.length > 0 ? steps : DEFAULT_STEPS;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 0.8", "end 0.4"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.3 });

  const trackLength = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const dotTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <LazyMotion features={domAnimation}>
      {/* COMPACT: py-20 -> py-10 */}
      <section className={`bg-white dark:bg-black py-10 px-6 relative overflow-hidden ${className || ""}`}>
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08] dark:opacity-[0.15]"
          style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px)", backgroundSize: "100% 32px" }}
        />
        <div className="from-white dark:from-black to-transparent pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
        <div className="from-white dark:from-black to-transparent pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />

        {/* COMPACT: mb-16 -> mb-8 */}
        <div className="max-w-3xl mx-auto text-center mb-8 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">{title}</h2>
          <p className="text-neutral-500 dark:text-neutral-400 mt-2 text-sm">{subtitle}</p>
        </div>

        <div ref={containerRef} className="relative max-w-2xl mx-auto z-10">
          <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-neutral-200 dark:bg-neutral-800 rounded-full" />
          <m.div style={{ height: trackLength }} className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-orange-400 via-blue-400 to-purple-400 rounded-full origin-top z-10" />
          <m.div style={{ top: dotTop }} className="absolute left-4 md:left-1/2 -translate-x-1/2 z-30 -mt-1.5">
            <div className="w-3 h-3 rounded-full bg-white dark:bg-black border-2 border-blue-400 shadow-[0_0_10px_2px_rgba(96,165,250,0.7)]" />
          </m.div>

          <div className="flex flex-col gap-1">
            {data.map((step, index) => (
              <StepRow key={step.title} step={step} index={index} progress={smoothProgress} total={data.length} />
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
