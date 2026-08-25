"use client";
import { TextEffect } from '@/components/core/text-effect';

import SchoolMessageSection from "@/components/ui/school-message-section";

import { ScrollVelocityDemo } from "@/components/ui/scroll-velocity-demo";

import CssImageStacking from "@/components/ui/css-image-stacking";

import { InfiniteRibbon } from "@/components/ui/infinite-ribbon";
import { Footer } from "@/components/ui/footer-section";
import FAQs from "@/components/ui/text-reveal-faqs";
import React from "react";
import { AnnouncementBar, SpatialHeader, LogoStripCard, SpatialFeatureSection } from "@/components/ui/themed-spatial-hero";
import { AuroraBackground } from "@/components/ui/aurora-background";
import AcademicStructure from "@/components/ui/academic-structure";
import TestimonialsSection from "@/components/ui/community-testimonial";
import ConnectSection from "@/components/ui/connect-section";
import { NeuralDiagram } from "@/components/originkit/ui/hero-22/neural-diagram";
import OrbitBorderButton from "@/components/ui/orbit-border-button";
import { MaskTextReveal } from "@/components/ui/mask-text-reveal";
import HowItWorksTrack from "@/components/ui/how-it-works-track";

export default function Home() {
  const communityTestimonialsData = {
  "title": "Parent & Community Reviews",
  "subtitle": "Heartfelt feedback from parents and alumni of Infant Jesus Hr. Sec. School, Vallalar Nagar",
  "rows": [
    {
      "id": "row1",
      "speed": "45s",
      "direction": "left",
      "testimonials": [
        {
          "id": "t1",
          "quote": "Infant Jesus School treats every student with equal care and respect. The academic support my daughter received was exceptional.",
          "authorName": "S. Prema",
          "authorTitle": "Parent of Class 12 Student"
        },
        {
          "id": "t2",
          "quote": "The campus atmosphere in Vallalar Nagar is so peaceful and encouraging. My child built strong reading and math skills early on.",
          "authorName": "Mohamed Farooq",
          "authorTitle": "Parent of Class 5 Student"
        },
        {
          "id": "t3",
          "quote": "I passed out in 2019 and the discipline taught by our teachers continues to guide me in my professional life every single day.",
          "authorName": "Anthony Raj",
          "authorTitle": "Alumnus (Batch 2019)"
        }
      ]
    },
    {
      "id": "row2",
      "speed": "35s",
      "direction": "right",
      "testimonials": [
        {
          "id": "t4",
          "quote": "The dedicated staff takes extra effort for higher secondary exam coaching while keeping children motivated and stress-free.",
          "authorName": "K. Jayanthi",
          "authorTitle": "Parent Forum Coordinator"
        },
        {
          "id": "t5",
          "quote": "Extracurricular events, science club, and sports activities keep students active and confident throughout the academic year.",
          "authorName": "Joseph Daniel",
          "authorTitle": "High School Parent"
        },
        {
          "id": "t6",
          "quote": "Very safe campus with caring management. We feel completely assured sending our young daughter here every morning.",
          "authorName": "Mary Stella",
          "authorTitle": "Primary School Parent"
        }
      ]
    },
    {
      "id": "row3",
      "speed": "50s",
      "direction": "left",
      "testimonials": [
        {
          "id": "t7",
          "quote": "Excellent State Board results year after year. The teachers dedicate extra time for remedial classes whenever students need help.",
          "authorName": "R. Gomathi",
          "authorTitle": "Alumna & Software Developer"
        },
        {
          "id": "t8",
          "quote": "Transparent management and polite staff. Infant Jesus has earned the trust of diverse families across Pattabiram.",
          "authorName": "Christopher V.",
          "authorTitle": "Parent Representative"
        },
        {
          "id": "t9",
          "quote": "A school that truly balances character formation with high academic achievements. Highly recommended!",
          "authorName": "N. Saranya",
          "authorTitle": "Parent of Class 8 Student"
        }
      ]
    }
  ]
};

  return (
    <main className="min-h-screen bg-[#f3f5ff] text-[#757693] antialiased selection:bg-[#4457ff] selection:text-white font-body">
      {/* Spatial Header */}
      <SpatialHeader />

      {/* Upper-Middle Hero Velocity Ribbon */}
      
      {/* School Specific Animated Hero Section with 3D Neural Brain Visual */}
      <AuroraBackground showRadialGradient={true}>
        <div className="relative z-10 max-w-[1250px] mx-auto px-4 sm:px-6 py-6 sm:py-10 lg:py-16 grid lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full min-w-0 max-w-full overflow-hidden sm:overflow-visible">
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left font-heading min-w-0 max-w-full">
            <span className="inline-flex flex-wrap items-center max-w-full px-3.5 sm:px-4 py-1.5 rounded-[9999px] bg-[#e5e7ff] text-[#4457ff] text-[11px] sm:text-xs font-semibold uppercase tracking-wider font-body leading-normal border border-[#d2d6ff] shadow-sm">
              📍 Vallalar Nagar, Pattabiram • Rating 4.4★
            </span>
            <TextEffect as="h1" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-[#181c31] leading-[1.2] sm:leading-[1.18] font-heading max-w-full break-words [overflow-wrap:break-word]">
              A School Built on Faith, Family & Genuine Care
            </TextEffect>
            <TextEffect as="p" preset="fade-in-blur" speedReveal={1.1} speedSegment={0.3} className="text-base sm:text-xl text-[#757693] max-w-xl font-body leading-relaxed max-w-full break-words [overflow-wrap:break-word]">
              Providing structured Matriculation education with dedicated teachers, modern facilities, and individual guidance for every student.
            </TextEffect>
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 font-body max-w-full">
              <OrbitBorderButton
                label="Apply Now"
                link="/apply"
                padding="12px 22px 12px 22px"
                colors={{ fill: "#4457ff", textColor: "#ffffff" }}
                stroke={{ color: "#7988ff", size: 30, speed: 50, direction: "ccw", hoverFill: 100 }}
              />
              <a href="#about" className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-[9999px] border border-[#e5e7eb] text-[#181c31] bg-white text-sm sm:text-base font-medium hover:bg-slate-50 transition-all shadow-sm shrink-0">
                Explore Curriculum
              </a>
            </div>
          </div>

          {/* Right Column (Top Right Position): 3D Brain & Neural Particle Visual */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center min-h-[340px] sm:min-h-[420px] py-1 sm:py-0 overflow-hidden sm:overflow-visible">
            <NeuralDiagram />
          </div>
        </div>
      </AuroraBackground>

            
                        {/* Student Achievement Strip Card */}
      <LogoStripCard />
      <InfiniteRibbon duration={35} className="bg-white text-[#181c31] border-y border-[#e5e7eb] py-4 text-sm sm:text-base font-semibold tracking-wide font-body shadow-sm">
        <span className="text-[#4457ff]">✦</span> Academic Excellence
        <span className="text-[#4457ff]">✦</span> State Board Rigor
        <span className="text-[#4457ff]">✦</span> Dedicated Faculty
        <span className="text-[#4457ff]">✦</span> Holistic Student Development
        <span className="text-[#4457ff]">✦</span> Safe & Caring Campus
        <span className="text-[#4457ff]">✦</span> Admissions Open
      </InfiniteRibbon>

      {/* Alternating Feature Block */}
      <SpatialFeatureSection />

      {/* Clean Frameless Middle Image Velocity Strip */}
      <ScrollVelocityDemo />

      {/* How Admissions Work Track */}
      <HowItWorksTrack
        title="How Admissions Work"
        subtitle="Follow the track from start to finish."
      />

      {/* Academic Structure Section */}
      <AcademicStructure
        secondaryColor="#4457ff"
        title="Academic Journey"
        subtitle="From Early Learning to Higher Secondary"
        description="A well-structured learning journey designed to support students at every stage of their academic and personal development."
        cards={[
          {
            tag: "LKG & UKG",
            title: "Kindergarten & Early Years",
            description: "A gentle, play-integrated foundational curriculum focusing on language, numbers, sensory development, and social confidence.",
            buttonText: "Explore Early Years",
          },
          {
            tag: "Classes 1 to 5",
            title: "Primary Foundation Stage",
            description: "Building fundamental skills in Mathematics, Science, Languages, and Environmental Studies through engaging, activity-based lessons.",
            buttonText: "View Curriculum",
          },
          {
            tag: "Classes 6 to 8",
            title: "Middle School Exploration",
            description: "Strengthening analytical thinking, practical lab work, digital literacy, and collaborative problem-solving across core subjects.",
            buttonText: "Middle School Details",
          },
          {
            tag: "Classes 9 & 10",
            title: "High School Board Preparation",
            description: "Comprehensive State Board exam preparation supported by expert faculty, mock tests, personalized feedback, and concept clarity.",
            buttonText: "Board Preparation",
          },
          {
            tag: "Classes 11 & 12",
            title: "Higher Secondary Streams",
            description: "Specialized Science, Computer Science, and Commerce streams preparing students for entrance exams, degree admissions, and future careers.",
            buttonText: "Explore Hr. Sec. Streams",
            isHighlighted: true,
          },
        ]}
      />

      {/* Testimonials Section */}
      {/* CSS Image Stacking Gallery Showcase */}
      <CssImageStacking />

      <section id="testimonials" className="py-16 bg-[#f3f5ff] border-t border-[#e5e7eb]">
        <TestimonialsSection data={communityTestimonialsData} />
      </section>

      {/* Frequently Asked Questions Section */}
      <FAQs />

      {/* Connect & Admission Inquiry Form */}
      <ConnectSection />

      {/* Light Clean Footer */}
      {/* Leadership Message to Parents & Students */}
      <SchoolMessageSection />

      <Footer />
      </main>
  );
}