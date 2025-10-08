import React from "react";
import { Typography } from "@solar-verse/ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@solar-verse/ui";
import { DefaultLayout } from "@solar-verse/ui";
import Image from "@/components/common/media/image";
import { IMAGE_URLS } from "@/assets/images";
export default function QuestionListSection() {
  const faqs = [
    {
      id: "item-1",
      question: "What is Solarverse?",
      answer:
        "Solarverse is a digital platform that connects Nigerian homeowners with trusted, certified solar installers. We make it easy to request quotes, compare offers, schedule installations, and manage your entire solar project online.",
    },
    {
      id: "item-2",
      question: "How does the platform work?",
      answer:
        "Submit a solar installation request with your location and preferences. Certified installers send you quotes. You compare offers, choose the best one, and make payment. You schedule installation and track the project until completion.",
    },
    {
      id: "item-3",
      question: "How do I know the installers are verified?",
      answer:
        "All installers go through a strict verification process. They must upload business documents, certifications, and past work samples. Only approved installers can bid on projects, and homeowners can review their ratings and reviews.",
    },
    {
      id: "item-4",
      question: "How much does it cost to use Solarverse?",
      answer:
        "Using the platform is free for homeowners. You only pay for your chosen installation package. We may charge installers a small commission or subscription fee for using the platform.",
    },
    {
      id: "item-5",
      question: "Can I finance my solar installation?",
      answer:
        "Yes! We're partnering with trusted lenders so you can get flexible financing options to spread the cost of your installation over time. Details are provided during the checkout process.",
    },
    {
      id: "item-6",
      question: "What happens after I accept a bid?",
      answer:
        "Once you accept a bid and make payment, the installer is notified, and you can schedule the installation date. You'll also be able to message the installer directly and track the progress from your dashboard.",
    },
    {
      id: "item-7",
      question: "Is my payment secure?",
      answer:
        "Absolutely. We integrate with trusted payment processors like Paystack, Flutterwave, and PayPal. Your payment is held securely and only released to the installer upon project confirmation.",
    },
    {
      id: "item-8",
      question: "Can I review an installer after the job?",
      answer:
        "Yes. After your project is marked as completed, you'll be prompted to rate and review your installer. Your feedback helps other users make informed choices and keeps the community accountable.",
    },
    {
      id: "item-9",
      question: "What if something goes wrong with my installation?",
      answer:
        "Our support team is here to help. You can file a dispute from your dashboard, and we'll investigate and mediate the issue. We may pause payments to the installer until it's resolved.",
    },
    {
      id: "item-10",
      question: "How do I contact support?",
      answer:
        "You can reach us through the Contact Us page, use the live chatbot on the site, or email us at support@solarverse.com. We're always here to help!",
    },
  ];

  return (
    <section className="">
      <DefaultLayout>
        <Image
          src={IMAGE_URLS.stripeIllustration}
          containerClassName="absolute top-0 left-0  h-[400px] rotate-180 w-[400px]  "
          alt="stripes"
        />
        <Accordion
          type="single"
          collapsible
          className="space-y-4 max-w-[1015px] mx-auto md:!py-20 py-10 relative z-20"
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="bg-[#2495D10A] text-[#11121499] px-5 rounded-lg">
                <Typography.h6 weight={"medium"}>{faq.question}</Typography.h6>
              </AccordionTrigger>
              <AccordionContent className="bg-white p-5 mt-3 rounded-lg">
                <Typography.h6 className="text-[#111214CC]">
                  {faq.answer}
                </Typography.h6>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Image
          src={IMAGE_URLS.stripeIllustration}
          containerClassName="absolute bottom-0 right-0  h-[400px] w-[400px]  "
          alt="stripes"
        />
      </DefaultLayout>
    </section>
  );
}
