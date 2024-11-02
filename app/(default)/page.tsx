export const metadata = {
  title: "Home - Truxt",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import LargeTestimonial from "@/components/large-testimonial";
import FeaturesPlanet from "@/components/features-planet";
import Features from "@/components/features-home";
import Cta from "@/components/cta";

import { Gauge, Settings, Blocks, Fingerprint, CheckCircle, BarChart, LucideIcon } from 'lucide-react'

interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

const featureData: Feature[] = [
  {
    title: "Speed",
    description: "Point out the efficiency and fast response times your AI tool offers. Instant query resolution leads to enhanced productivity, enabling teams to make decisions quickly and stay agile in dynamic business environments.",
    icon: Gauge
  },
  {
    title: "Scalability",
    description: "Emphasize the ability of your AI to handle large volumes of queries seamlessly, supporting fast-growing teams by scaling from hundreds to hundreds of thousands of requests per month without compromising performance.",
    icon: BarChart
  },
  {
    title: "Customization",
    description: "Talk about how your generative AI tool can be tailored to specific business needs. Whether it's adapting to unique industry data or integrating seamlessly with existing workflows, your AI solution is flexible and personalized.",
    icon: Settings
  },
  {
    title: "Integration",
    description: "Highlight the tool's ease of integration with existing systems and platforms, ensuring smooth adoption without disrupting operations. Your AI can work alongside popular collaboration tools, CRM platforms, and databases, offering a frictionless experience.",
    icon: Blocks
  },
  {
    title: "Security",
    description: "Discuss the robust security measures your AI platform incorporates, including data encryption, secure sandbox environments, and access controls, ensuring sensitive information remains protected while maintaining compliance with industry standards.",
    icon: Fingerprint
  },
  {
    title: "Accuracy",
    description: "Highlight how your AI tool delivers precise and contextually relevant responses, reducing errors and improving decision-making. Showcase the quality of AI-driven insights that ensure teams get the right answers consistently.",
    icon: CheckCircle
  }
]

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <LargeTestimonial />
      <FeaturesPlanet title="Truxt helps your team to work efficiently" content={featureData}/>
      <Features />
      <Cta />
    </>
  );
}
