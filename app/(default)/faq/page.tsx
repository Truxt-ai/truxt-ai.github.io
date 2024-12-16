export const metadata = {
  title: "FAQ",
  description: "Find answers to common questions about Truxt.ai's GenAI solutions, platform capabilities, integrations, and enterprise support features.",
  alternates: {
    canonical: '/faq'
  }
};

import { notFound } from "next/navigation";
import Hero from "./hero";
import Faqs from "@/components/faqs-02";

export default function Faq() {
  const shouldShowNotFound = true; // Added to down it

  if (shouldShowNotFound) {
    return notFound();
  }

  return (
    <>
      <Hero />
      <Faqs />
    </>
  );
}
