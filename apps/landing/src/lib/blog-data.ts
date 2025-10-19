import { IMAGE_URLS } from "@/assets/images";

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  time: string;
  author: string;
  excerpt: string;
  content: string;
  img: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Myths About Solar Power in Nigeria Debunked",
    date: "18/09/2025",
    time: "09:30am",
    author: "Solarverse Update",
    img: IMAGE_URLS.blogOneImg,
    excerpt:
      "Solar energy is changing how Nigerians power their homes and businesses, but a lot of myths still hold people back. Let's clear them up.",
    content: `

Myth: "Solar is too expensive."
Truth: Generators seem cheaper at first, but fuel and maintenance costs pile up. Solar is a one-time investment with free "fuel" from the sun, saving you money year after year.

Myth: "Solar doesn't work during the rainy season."
Truth: Solar panels still produce electricity on cloudy days—just at a reduced level compared to sunny days. With proper system design, you'll still have reliable power.

Myth: "Solar can't power big appliances."
Truth: With the right system size, solar can run freezers, TVs, pumps—even air conditioners. It's all about proper design.

Myth: "Solar energy is unreliable."
Truth: A well-designed system with battery backup provides steady power—even at night. Plus, solar requires far less maintenance than constantly repairing a generator.

Myth: "Solar is only for rural areas."
Truth: Urban homes and businesses in cities like Lagos and Abuja benefit greatly from solar, especially with unstable grid supply.

Solar isn't a luxury—it's a smart, reliable, and cost-saving solution for Nigerians. At Solarverse, we connect you with trusted installers to make the switch simple and safe.`,
  },
  {
    id: "2",
    title: "Why Choosing the Right Solar Installer Is Easy with Solarverse",
    date: "18/09/2025",
    time: "10:35am",
    author: "Solarverse Update",
    img: IMAGE_URLS.blogTwoImg,

    excerpt:
      "One of the biggest worries for Nigerians going solar is: 'How do I know I'm picking the right installer?' The truth is, choosing wrongly can lead to wasted money, incomplete projects, or systems that don't perform. That's exactly why Solarverse was built—to take the guesswork out of the process.",
    content: `

Here's how Solarverse makes sure you always get the right installer:

Verified Projects & Certificates
Every installer on Solarverse showcases their past projects and professional certifications. You don't have to take anyone's word for it—you can see their track record yourself.

Ratings & Reviews from Real Clients
Installers are rated by people who have actually used their services. You'll see honest feedback, so you can choose based on proven performance, not empty promises.

Transparent Pricing & Competitive Bidding
No hidden costs. Installers submit clear bids for your project, and you can compare offers side by side. That means you get the best value without the stress of negotiating blindly.

Secure Payments & Dispute Resolution
With Solarverse, your money is safe. Payments are only released when your project is completed. If issues arise, our team steps in to resolve disputes and ensure fairness—including refunds if necessary.

The Solarverse Advantage
Instead of worrying about scams, poor workmanship, or inflated prices, Solarverse gives you a trusted platform where quality, transparency, and accountability are guaranteed.

Going solar should be exciting, not stressful. With Solarverse, you don't just find an installer—you find the right installer, every time.`,
  },
  {
    id: "3",
    title:
      "The True Cost of Solar in Nigeria: Investment vs. Long-Term Savings",
    date: "18/09/2025",
    time: "11:55am",
    author: "Solarverse Update",
    img: IMAGE_URLS.blogThreeImg,

    excerpt:
      "When most Nigerians think about solar, the first question is always: 'How much will it cost me?' The truth is, while solar requires an upfront investment, it quickly pays for itself and keeps saving you money for years.",
    content: `
Upfront Costs vs. Generators
A small solar setup may cost more than buying a generator. But unlike generators, solar doesn't need constant fuel or frequent repairs. Over time, the money you save on petrol and maintenance outweighs the initial cost.

Free Fuel from the Sun
Once installed, your "fuel" is sunlight—completely free. That means no more fuel queues, no more rising petrol prices, and no more noisy nights.

Financing Options
Solar is becoming more accessible with pay-as-you-go plans, loans, and installment payments. You don't need to pay everything upfront to start enjoying reliable power.

Long-Term Savings
Most systems pay for themselves in 2–5 years, depending on usage. After that, you're essentially enjoying free electricity for the lifespan of your panels (often 20+ years).

Solar isn't just an expense—it's an investment in freedom, savings, and peace of mind. At Solarverse, we connect you with trusted installers who can design a system that fits your budget and energy needs.`,
  },
];
