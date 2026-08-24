"use client";
import React, { useState } from "react";

export default function CssImageStacking() {
  const cards = [
    { title: "Interactive Smart Classrooms", category: "ACADEMICS", src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&auto=format&fit=crop", text: "Structured state board learning with individual faculty care." },
    { title: "Annual Athletic Track & Field", category: "SPORTS", src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&auto=format&fit=crop", text: "Developing endurance, sportsmanship, and team spirit." },
    { title: "Stage Drama & Cultural Festivals", category: "CULTURAL", src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&auto=format&fit=crop", text: "Fostering creative expression and public speaking confidence." },
    { title: "Science & Computer Labs", category: "PRACTICALS", src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&auto=format&fit=crop", text: "Hands-on physics, chemistry, and computer science learning." },
    { title: "Knowledge Center Library", category: "LIBRARY", src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&auto=format&fit=crop", text: "Extensive collection of books supporting independent study." },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-[#f3f5ff] py-24 px-6 border-t border-[#e5e7eb]">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#e5e7ff] text-[#4457ff] border border-[#4457ff]/20 font-body">
          ULTRA-PREMIUM GALLERY SHOWCASE
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#181c31] mt-4 font-heading leading-tight">
          Explore Life at Infant Jesus School
        </h2>
        <p className="text-[#757693] text-base sm:text-lg mt-3 font-body">
          Interactive campus moments designed with smooth depth transitions.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Interactive Selector List */}
        <div className="lg:col-span-5 space-y-4">
          {cards.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActive(idx)}
              className={`cursor-pointer p-5 rounded-2xl transition-all duration-300 backdrop-blur-md ${active === idx ? "bg-white text-[#181c31] shadow-[0_10px_30px_rgba(68,87,255,0.12)] border border-[#4457ff]/30 translate-x-2" : "bg-white/50 text-[#757693] hover:bg-white/80 border border-transparent"}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#4457ff] font-body">
                  0{idx + 1}. {item.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">0{idx + 1} / 0{cards.length}</span>
              </div>
              <h3 className="text-lg font-bold text-[#181c31] font-heading mt-1">{item.title}</h3>
              {active === idx && (
                <p className="text-xs text-[#757693] font-body mt-2 leading-relaxed animate-fadeIn">
                  {item.text}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right Column: Dynamic Focal Image Stage */}
        <div className="lg:col-span-7">
          <div className="relative w-full h-[520px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] group">
            <img
              src={cards[active].src}
              alt={cards[active].title}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#181c31] text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
              📍 {cards[active].title}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
