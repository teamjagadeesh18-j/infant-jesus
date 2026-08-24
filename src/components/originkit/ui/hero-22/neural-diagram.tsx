// Delivered by Originkit · stack: nextjs · styling: tailwind
"use client";

import { useEffect, useRef, useState } from "react";
import ParticleImage from "@/components/originkit/ui/hero-22/svg-particle";

/** Public asset under /originkit/hero-22/ */
function asset(file: string) {
  return `/originkit/hero-22/${file}`;
}

type Box = { left: number; top: number; width: number; height: number };

const SCATTER_PAD = 1.5;
const SCATTER_SCALE = 10 / SCATTER_PAD;

const padBox = (box: Box): Box => ({
  left: box.left - (box.width * (SCATTER_PAD - 1)) / 2,
  top: box.top - (box.height * (SCATTER_PAD - 1)) / 2,
  width: box.width * SCATTER_PAD,
  height: box.height * SCATTER_PAD,
});

const HEAD: Box = { left: 83, top: 125, width: 236.264, height: 298.5 };
const HEAD_TABLET: Box = { left: 241, top: 72, width: 261.194, height: 330 };
const HEAD_DESKTOP: Box = {
  left: 200,
  top: 50,
  width: 300,
  height: 380,
};

const BRAIN: Box = {
  left: HEAD.left + 13.3,
  top: HEAD.top + 16,
  width: 183.75,
  height: 156.75,
};
const BRAIN_TABLET: Box = {
  left: HEAD_TABLET.left + 14.7,
  top: HEAD_TABLET.top + 17.7,
  width: 203.14,
  height: 173.291,
};
const BRAIN_DESKTOP: Box = {
  left: HEAD_DESKTOP.left + 17,
  top: HEAD_DESKTOP.top + 20,
  width: 235,
  height: 200,
};

type Node = {
  label: string;
  color: string;
  pill: { left: number; top: number; width: number };
  pillTablet: { left: number; top: number; width: number };
  pillDesktop: { left: number; top: number; width: number };
  dot: { left: number; top: number };
  dotTablet: { left: number; top: number };
  dotDesktop: { left: number; top: number };
  connector: Box & { path: string; shadow: string };
  connectorTablet: { path: string };
  connectorDesktop: { path: string };
};

const NODES: Node[] = [
  {
    label: "Academic Excellence",
    color: "#4457ff",
    pill: { left: 147, top: 40, width: 140 },
    pillTablet: { left: 72, top: 73.5, width: 140 },
    pillDesktop: { left: 40, top: 40, width: 165 },
    dot: { left: 195, top: 163 },
    dotTablet: { left: 358.22, top: 112.24 },
    dotDesktop: { left: 345, top: 90 },
    connector: {
      left: 204.34,
      top: 71,
      width: 16.4056,
      height: 102.364,
      path: "M15.6556 0V75L0.655616 102",
      shadow: "M14.6556 0V74.5L1.15562 101",
    },
    connectorTablet: { path: "M200.6 89.75H342.5L369 123" },
    connectorDesktop: { path: "M205 60H330L352 95" },
  },
  {
    label: "Moral & Faith Values",
    color: "#8b5cf6",
    pill: { left: 25, top: 85, width: 150 },
    pillTablet: { left: 58, top: 145, width: 150 },
    pillDesktop: { left: 10, top: 150, width: 170 },
    dot: { left: 161.5, top: 220.75 },
    dotTablet: { left: 293, top: 181 },
    dotDesktop: { left: 245, top: 188 },
    connector: {
      left: 98.4,
      top: 115.53,
      width: 73.5876,
      height: 116.483,
      path: "M72.8376 114.969V89.4687L1.58757 0.468722",
      shadow: "M72.0876 116.469V89.9687L0.58757 0.468722",
    },
    connectorTablet: { path: "M199.6 161.25H277.3L303.8 191.8" },
    connectorDesktop: { path: "M180 170H230L252 201" },
  },
  {
    label: "Future Ready STEM",
    color: "#06b6d4",
    pill: { left: 249, top: 92, width: 140 },
    pillTablet: { left: 534, top: 156, width: 145 },
    pillDesktop: { left: 500, top: 110, width: 165 },
    dot: { left: 220, top: 204.75 },
    dotTablet: { left: 357, top: 188.41 },
    dotDesktop: { left: 400, top: 154 },
    connector: {
      left: 230.5,
      top: 122.42,
      width: 77.9827,
      height: 93.5766,
      path: "M0.75 92.0766V63.5766L76.5 0.576634",
      shadow: "M2 93.5766V64.0766L77.5 0.576634",
    },
    connectorTablet: { path: "M534 172.25H394.3L367.8 199.2" },
    connectorDesktop: { path: "M500 129H420L405 160" },
  },
];

const ARCS = [
  {
    id: "arc-wide",
    box: { left: -157, top: 66, width: 1059.65, height: 357.622 },
    boxDesktop: { left: 10, top: 40, width: 680, height: 400 },
    viewBox: "0 0 1059.65 357.622",
    path: "M0.324945 357.36C0.324945 357.36 289.716 -0.340318 531.513 0.423133C772.18 1.18302 1059.32 357.36 1059.32 357.36",
  },
  {
    id: "arc-inner",
    box: { left: 75.89, top: 66, width: 593.968, height: 342.348 },
    boxDesktop: { left: 120, top: 50, width: 460, height: 360 },
    viewBox: "0 0 593.968 342.348",
    path: "M0.379579 342.171C0.379579 342.171 162.484 -0.307883 297.929 0.423081C432.741 1.15063 593.588 342.171 593.588 342.171",
  },
];

const ARC_DOTS = [
  {
    id: "arc-dot-1",
    tablet: { left: 643.79, top: 362.18 },
    desktop: { left: 580, top: 370 },
  },
  {
    id: "arc-dot-2",
    tablet: { left: 626.91, top: 169.79 },
    desktop: { left: 550, top: 160 },
  },
  {
    id: "arc-dot-3",
    tablet: { left: 176.31, top: 222.95 },
    desktop: { left: 140, top: 210 },
  },
  {
    id: "arc-dot-4",
    tablet: { left: -36.33, top: 292.14 },
    desktop: { left: 30, top: 310 },
  },
];

const boxVars = (mobile: Box, tablet: Box, desktop: Box) =>
  ({
    "--l": `${mobile.left}px`,
    "--t": `${mobile.top}px`,
    "--w": `${mobile.width}px`,
    "--h": `${mobile.height}px`,
    "--l-i": `${tablet.left}px`,
    "--t-i": `${tablet.top}px`,
    "--w-i": `${tablet.width}px`,
    "--h-i": `${tablet.height}px`,
    "--l-d": `${desktop.left}px`,
    "--t-d": `${desktop.top}px`,
    "--w-d": `${desktop.width}px`,
    "--h-d": `${desktop.height}px`,
  }) as React.CSSProperties;

const BOX_CLASS =
  "absolute top-[var(--t)] left-[var(--l)] h-[var(--h)] w-[var(--w)] ipad:top-[var(--t-i)] ipad:left-[var(--l-i)] ipad:h-[var(--h-i)] ipad:w-[var(--w-i)] desktop-sm:top-[var(--t-d)] desktop-sm:left-[var(--l-d)] desktop-sm:h-[var(--h-d)] desktop-sm:w-[var(--w-d)]";

export const NeuralDiagram = () => {
  const blockRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const sync = () => setIsDesktop(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  // Trigger continuous auto-animation and mouse interaction
  useEffect(() => {
    const block = blockRef.current;
    if (!block) return;

    const canvas = () => block.querySelector("canvas");

    let animTimer: any;
    let autoState = false;

    // Pulse assemble / scatter continuously so the particle head is always dynamically alive
    const pulseLoop = () => {
      const target = canvas();
      if (target) {
        autoState = !autoState;
        if (autoState) {
          const box = target.getBoundingClientRect();
          target.dispatchEvent(
            new MouseEvent("mousemove", {
              clientX: box.left + box.width / 2 + (Math.random() - 0.5) * 40,
              clientY: box.top + box.height / 2 + (Math.random() - 0.5) * 40,
              bubbles: true,
            })
          );
        }
      }
      animTimer = setTimeout(pulseLoop, 3500);
    };

    pulseLoop();

    const assemble = (e: MouseEvent) => {
      const target = canvas();
      if (!target) return;
      target.dispatchEvent(
        new MouseEvent("mousemove", {
          clientX: e.clientX,
          clientY: e.clientY,
          bubbles: true,
        })
      );
    };

    block.addEventListener("mousemove", assemble);

    return () => {
      clearTimeout(animTimer);
      block.removeEventListener("mousemove", assemble);
    };
  }, []);

  return (
    <div
      ref={blockRef}
      className="relative h-[420px] w-full max-w-[680px] mx-auto overflow-hidden bg-transparent"
    >
      {/* Background arcs */}
      {ARCS.map((arc) => (
        <svg
          key={arc.id}
          aria-hidden
          className="pointer-events-none absolute top-[var(--t-i)] left-[var(--l-i)] h-[var(--h-i)] w-[var(--w-i)] desktop-sm:top-[var(--t-d)] desktop-sm:left-[var(--l-d)] desktop-sm:h-[var(--h-d)] desktop-sm:w-[var(--w-d)] opacity-60"
          style={
            {
              "--l-i": `${arc.box.left}px`,
              "--t-i": `${arc.box.top}px`,
              "--w-i": `${arc.box.width}px`,
              "--h-i": `${arc.box.height}px`,
              "--l-d": `${arc.boxDesktop.left}px`,
              "--t-d": `${arc.boxDesktop.top}px`,
              "--w-d": `${arc.boxDesktop.width}px`,
              "--h-d": `${arc.boxDesktop.height}px`,
            } as React.CSSProperties
          }
          viewBox={arc.viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={arc.path}
            stroke="#4457ff"
            strokeOpacity="0.4"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>
      ))}

      {/* Waypoint dots */}
      {ARC_DOTS.map((dot) => (
        <span
          key={dot.id}
          aria-hidden
          className="pointer-events-none absolute top-[var(--t-i)] left-[var(--l-i)] size-[9px] rounded-full border-[2px] border-solid border-white bg-[#4457ff] shadow-sm desktop-sm:top-[var(--t-d)] desktop-sm:left-[var(--l-d)]"
          style={
            {
              "--l-i": `${dot.tablet.left}px`,
              "--t-i": `${dot.tablet.top}px`,
              "--l-d": `${dot.desktop.left}px`,
              "--t-d": `${dot.desktop.top}px`,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Halftone head particle field */}
      <div
        className={BOX_CLASS}
        style={boxVars(padBox(HEAD), padBox(HEAD_TABLET), padBox(HEAD_DESKTOP))}
      >
        <ParticleImage
          width="100%"
          height="100%"
          backgroundColor="transparent"
          particleCount={24}
          particleSize={18}
          particleShape="circle"
          particleColor="single"
          singleColor="#4457ff"
          hoverEnabled={true}
          hoverConfig={{
            hoverType: "roam",
            roamShape: "oval",
            roamOpacity: 0.7,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          imageConfig={{
            image: asset("Vector.png"),
            mode: "fit",
            scale: SCATTER_SCALE,
          }}
        />
      </div>

      {/* 3D Brain Overlay */}
      <img
        aria-hidden
        src={asset("brain-only.png")}
        alt="3D Brain Model"
        className={`${BOX_CLASS} pointer-events-none block max-w-none filter drop-shadow-[0_10px_20px_rgba(68,87,255,0.3)]`}
        style={boxVars(BRAIN, BRAIN_TABLET, BRAIN_DESKTOP)}
      />

      {/* Desktop SVG Connectors */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 block h-full w-full opacity-80"
        viewBox="0 0 680 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {NODES.map((node) => (
          <g key={`d-${node.label}`}>
            <path
              d={node.connectorDesktop.path}
              stroke="#ffffff"
              strokeWidth="2.5"
              transform="translate(1 1)"
            />
            <path
              d={node.connectorDesktop.path}
              stroke={node.color}
              strokeWidth="2"
            />
          </g>
        ))}
      </svg>

      {/* Node Dots */}
      {NODES.map((node) => (
        <span
          key={`dot-${node.label}`}
          aria-hidden
          className="pointer-events-none absolute top-[var(--t)] left-[var(--l)] size-[18px] rounded-full border-[2.5px] border-solid border-white shadow-md ipad:top-[var(--t-i)] ipad:left-[var(--l-i)] desktop-sm:top-[var(--t-d)] desktop-sm:left-[var(--l-d)]"
          style={
            {
              "--l": `${node.dot.left}px`,
              "--t": `${node.dot.top}px`,
              "--l-i": `${node.dotTablet.left}px`,
              "--t-i": `${node.dotTablet.top}px`,
              "--l-d": `${node.dotDesktop.left}px`,
              "--t-d": `${node.dotDesktop.top}px`,
              backgroundColor: node.color,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Node Pills */}
      {NODES.map((node) => (
        <div
          key={`pill-${node.label}`}
          className="pointer-events-none absolute top-[var(--t)] left-[var(--l)] flex h-[32px] w-[var(--w)] items-center justify-center gap-2 rounded-full border border-solid bg-white/90 backdrop-blur-md p-1.5 shadow-md ipad:top-[var(--t-i)] ipad:left-[var(--l-i)] ipad:w-[var(--w-i)] desktop-sm:top-[var(--t-d)] desktop-sm:left-[var(--l-d)] desktop-sm:w-[var(--w-d)]"
          style={
            {
              "--l": `${node.pill.left}px`,
              "--t": `${node.pill.top}px`,
              "--w": `${node.pill.width}px`,
              "--l-i": `${node.pillTablet.left}px`,
              "--t-i": `${node.pillTablet.top}px`,
              "--w-i": `${node.pillTablet.width}px`,
              "--l-d": `${node.pillDesktop.left}px`,
              "--t-d": `${node.pillDesktop.top}px`,
              "--w-d": `${node.pillDesktop.width}px`,
              borderColor: `${node.color}60`,
            } as React.CSSProperties
          }
        >
          <span
            className="size-[8px] rounded-full shrink-0 animate-pulse"
            style={{ backgroundColor: node.color }}
          />
          <span
            className="font-body text-[12px] sm:text-[13px] font-bold tracking-tight whitespace-nowrap"
            style={{ color: "#181c31" }}
          >
            {node.label}
          </span>
        </div>
      ))}
    </div>
  );
};
