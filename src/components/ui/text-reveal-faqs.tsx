'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function FAQs() {
  const faqItems = [
    {
      id: 'item-1',
      question: 'Where is Infant Jesus Matriculation Higher Secondary School located?',
      answer: 'We are conveniently located at Vallalar Nagar, Pattabiram, Chennai, providing a safe, accessible, and nurturing educational campus for local families.',
    },
    {
      id: 'item-2',
      question: 'What academic levels are available at Infant Jesus Matriculation School?',
      answer: 'We provide continuous education from Kindergarten (LKG & UKG) up to Higher Secondary (Class 12) with proven Tamil Nadu State Board excellence.',
    },
    {
      id: 'item-3',
      question: 'How does the school foster holistic development?',
      answer: 'Alongside strong State Board academics, we emphasize moral values, outdoor sports, cultural events, science exhibitions, and leadership activities.',
    },
    {
      id: 'item-4',
      question: 'What are the teacher-to-student ratios on campus?',
      answer: 'We maintain optimal class sizes (averaging 1:15 teacher-to-student ratio) ensuring every child receives personalized academic attention.',
    },
    {
      id: 'item-5',
      question: 'How can parents apply for admissions at Infant Jesus Matriculation School?',
      answer: 'Parents can fill out the online application form on our website or visit our Pattabiram admissions desk for instant guidance and campus walkthroughs.',
    },
  ];

  return (
    <section id="faqs" className="py-16 md:py-24 bg-[#ffffff] border-t border-[#e5e7eb] font-body">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="inline-block px-3.5 py-1 rounded-[24px] bg-[#e5e7ff] text-[#4457ff] border border-[#e5e7eb] text-xs font-semibold tracking-wide uppercase font-body mb-3">
              HELP & ADMISSIONS
            </span>
            <h2 className="text-[#181c31] text-3xl md:text-4xl font-bold font-heading">Frequently Asked Questions</h2>
            <p className="text-[#757693] mt-4 text-balance text-base md:text-lg">
              Everything you need to know about Infant Jesus Matriculation Higher Secondary School.
            </p>
            <p className="text-[#757693] mt-6 hidden md:block text-sm">
              Can’t find what you’re looking for? Reach out to our{' '}
              <Link
                href="#connect"
                className="text-[#4457ff] font-semibold hover:underline"
              >
                admissions support team
              </Link>{' '}
              for assistance.
            </p>
          </div>

          <div className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible>
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-[#e5e7eb]">
                  <AccordionTrigger className="cursor-pointer text-left text-base font-semibold text-[#181c31] hover:text-[#4457ff] hover:no-underline font-heading">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#757693]">
                    <BlurredStagger text={item.answer} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <p className="text-[#757693] mt-6 md:hidden text-sm">
            Can't find what you're looking for? Contact our{' '}
            <Link
              href="#connect"
              className="text-[#4457ff] font-semibold hover:underline">
              admissions team
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export const BlurredStagger = ({
  text,
}: {
  text: string;
}) => {
  const headingText = text;
 
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.012,
      },
    },
  };
 
  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };
 
  return (
    <div className="w-full pt-1">
      <motion.p
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-sm md:text-base text-[#757693] leading-relaxed break-words whitespace-normal font-body"
      >
        {headingText.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterAnimation}
            transition={{ duration: 0.25 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};
