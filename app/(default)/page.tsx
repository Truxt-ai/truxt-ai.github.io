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

import { Fingerprint, CheckCircle, BarChart, LucideIcon } from 'lucide-react'

interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

const featureData: Feature[] = [
  {
    title: "Accuracy",
    description: "Truxt combines its deep expertise in Customer Experience with advanced GenAI to deliver superior accuracy. Our Pre-trained GenAI Platform comprehensively analyzes various knowledge bases, providing precise understanding of customer inquiries for relevant and accurate responses. This enhances customer satisfaction and trust in our automated solutions.",
    icon: CheckCircle
  },
  {
    title: "Security",
    description: "We are committed to data security. 'Your organization's data stays within your boundaries, ensuring absolute confidentiality and control.' We implement stringent data protection measures to securely manage organizational data, protecting sensitive customer and business information within the enterprise.",
    icon: Fingerprint
  },
  {
    title: "Scalability",
    description: "Truxt's AI workforce operates 24/7, eliminating wait times and staffing issues. Our highly scalable platform efficiently manages growing support volumes, maintaining quality while being cost-effective. This makes it an ideal choice for growing businesses seeking dependable, scalable customer support solutions.",
    icon: BarChart
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <LargeTestimonial />
      <BusinessCategories />
      <FeaturesPlanet title="Truxt helps your team to work efficiently" content={featureData}/>
      <Features />
      <Cta />
    </>
  );
}
