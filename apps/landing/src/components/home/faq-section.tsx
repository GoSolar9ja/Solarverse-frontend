import React from "react";
import SectionLayout from "../common/layout/section-layout";
import { Typography } from "@solar-verse/ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@solar-verse/ui";
export default function FaqSection() {
  const faqs = [
    {
      id: "item-1",
      question: "How do I trust the installers?",
      answer:
        "Every installer on Solarverse is verified through a strict background and certification process. We check their licenses, certifications, and previous work history to ensure quality service.",
    },
    {
      id: "item-2",
      question: "How much can I save with solar?",
      answer:
        "Savings vary based on your current electricity usage, roof size, and location. Most customers save 50-90% on their electricity bills after installation.",
    },
    {
      id: "item-3",
      question: "How long does installation take?",
      answer:
        "Typical residential solar installations take 1-3 days to complete, depending on the system size and complexity. Commercial installations may take longer.",
    },
    {
      id: "item-4",
      question: "What warranty do I get?",
      answer:
        "Solar panels typically come with 20-25 year warranties, while inverters have 10-12 year warranties. We also provide installation warranties through our certified installers.",
    },
  ];

  return (
    <SectionLayout
      sectionProps={{ className: "bg-[#FCFCFC]" }}
      headerProps={{ className: "max-w-full" }}
      header={
        <div>
          <Typography.h2 weight={"semibold"}>
            Frequently Asked Questions{" "}
          </Typography.h2>
          <Typography.h6 className="text-[#11121499] mt-2">
            Here are answers to questions you might want to ask us
          </Typography.h6>
        </div>
      }
    >
      <Accordion type="single" collapsible className="space-y-4 mt-12">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger className="bg-[#2495D10A] text-[#11121499] px-5 rounded-lg">
              <Typography.h6>{faq.question}</Typography.h6>
            </AccordionTrigger>
            <AccordionContent className="bg-white p-5 mt-3 rounded-lg">
              <Typography.h6 className="text-[#111214CC]">
                {faq.answer}
              </Typography.h6>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionLayout>
  );
}
