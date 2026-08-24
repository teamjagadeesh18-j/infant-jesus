"use client";
import React from "react";

export default function SchoolMessageSection() {
  const config = {
    "themeBg": "bg-[#f3f5ff]",
    "border": "border-indigo-100",
    "badgeBg": "bg-[#e5e7ff]",
    "badgeText": "text-[#4457ff]",
    "badgeBorder": "border-[#4457ff]/30",
    "primaryText": "text-[#181c31]",
    "accentGold": "text-[#4457ff]",
    "cardBg": "bg-white",
    "cardShadow": "shadow-[0_20px_50px_rgba(68,87,255,0.08)]",
    "leaderName": "School Management & Leadership",
    "leaderRole": "Correspondent & Principal",
    "motto": "Nurturing intellect and character to prepare young champions for global leadership.",
    "salutation": "TO OUR ESTIMATED PARENTS & PROUD STUDENTS",
    "heading": "Where Excellence is a Sacred Commitment",
    "paragraph1": "At Infant Jesus Hr. Sec. School, we view education as a divine calling to nurture intellect, spiritual strength, and moral courage. Admission into Infant Jesus is a mark of pride and opportunity for every student.",
    "paragraph2": "Our dedicated faculty and modern facilities ensure that every student discovers their latent talents, excels in academics, and emerges as a confident global citizen grounded in compassion.",
    "stats": [
        {
            "value": "100%",
            "label": "Board Exam Excellence"
        },
        {
            "value": "30+",
            "label": "Years of Trust"
        },
        {
            "value": "1:15",
            "label": "Teacher-Student Attention"
        }
    ]
};

  return (
    <section className={`w-full ${config.themeBg} py-20 px-6 ${config.border} border-t border-b`}>
      <div className="max-w-6xl mx-auto">
        <div className={`${config.cardBg} ${config.cardShadow} rounded-3xl p-8 sm:p-12 border ${config.border} relative overflow-hidden`}>
          
          {/* Top Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${config.badgeBg} ${config.badgeText} border ${config.badgeBorder} font-body`}>
              {config.salutation}
            </span>
            <span className={`text-xs font-bold tracking-widest uppercase ${config.accentGold} font-body`}>
              LEADERSHIP DIRECTIVE
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-5">
              <h2 className={`text-3xl sm:text-4xl font-extrabold ${config.primaryText} font-heading leading-tight`}>
                {config.heading}
              </h2>
              
              <p className="text-slate-600 text-base sm:text-lg font-body leading-relaxed">
                "{config.paragraph1}"
              </p>

              <p className="text-slate-600 text-sm sm:text-base font-body leading-relaxed">
                "{config.paragraph2}"
              </p>

              {/* Leadership Signature Badge */}
              <div className="pt-4 flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${config.badgeBg} flex items-center justify-center font-bold font-heading text-lg ${config.badgeText}`}>
                  ✦
                </div>
                <div>
                  <h4 className={`text-base font-bold ${config.primaryText} font-heading`}>
                    Principal & Management Desk
                  </h4>
                  <p className="text-xs text-slate-500 font-body">
                    {config.leaderRole}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Stats Column */}
            <div className="lg:col-span-4 bg-slate-50/80 rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-100">
              <span className={`text-xs font-bold uppercase tracking-widest ${config.accentGold} font-body`}>
                INSTITUTION HIGHLIGHTS
              </span>
              <div className="space-y-5">
                {config.stats.map((stat, idx) => (
                  <div key={idx} className="border-b border-slate-200/60 pb-3 last:border-0 last:pb-0">
                    <span className={`text-2xl sm:text-3xl font-extrabold ${config.primaryText} font-heading block`}>
                      {stat.value}
                    </span>
                    <span className="text-xs text-slate-500 font-body">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
