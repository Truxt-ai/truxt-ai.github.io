export const metadata = {
  title: "Home - Truxt",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import Offerings from "@/components/offerings";

import { Fingerprint, CheckCircle, BarChart, LucideIcon } from 'lucide-react'
import WhyTruxt from "@/components/why-truxt";

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
    description: "Our highly scalable platform seamlessly adapts to larger Datasets & growing support volumes, delivering consistent quality while reducing operational costs—an ideal solution for businesses looking for reliable, scalable customer support.",
    icon: BarChart
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <Offerings/>
      <WhyTruxt/>
    </>
  );
}
