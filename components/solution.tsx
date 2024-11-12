'use client'

import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Cpu, HeadphonesIcon, Users, ArrowRight, Lock } from "lucide-react"

const solutions = [
  {
    title: 'Enterprise 360° GenAI Enablement',
    description: '360° GenAI Enablement for comprehensive AI integration across your organization.',
    icon: <Lock className="h-8 w-8" />,
    features: [
      'Build a Robust Knowledge Hub',
      'Enhanced Data Privacy and Security',
      'Broader 3rd party, CRM, Ticketing Platform integration',
      'Truxt GenAi Platform'
    ],
    image: '/images/truxt-gen-ai.png'
  },
  {
    title: 'Superior Customer Support',
    description: 'Truxt enhances customer interactions through high-speed AI automation and advanced self-service solutions, enabling effortless issue resolution for superior service quality.',
    icon: <HeadphonesIcon className="h-8 w-8" />,
    features: [
      'Automated Support: AI-driven automation for rapid query resolution',
      'Self-Service Solutions: 24/7 AI-driven self-service',
      'Smart Knowledge Base: Continuously updated, powered by adaptive AI'
    ],
    image: '/images/truxt-arch.png'
  },
  {
    title: 'Empower CX and Sales Teams',
    description: "Truxt's GenAI capabilities empower Customer Experience (CX) and Sales teams to deliver more precise, personalized, and timely responses, ultimately enhancing client satisfaction and driving growth.",
    icon: <Users className="h-8 w-8" />,
    features: [
      'Self-Service Solutions: Enable customers to access answers anytime',
      'Smart Knowledge Base: Quick access to relevant information',
      'Analytics: Real-time customer insights for strategic decision-making'
    ],
    image: '/images/cx-img.png'
  },
  {
    title: 'DevOps Technical Support',
    description: "Truxt's DevOpsGPT brings AI-driven automation and troubleshooting to DevOps teams, speeding up incident resolution and minimizing downtime with seamless integration into existing workflows.",
    icon: <Cpu className="h-8 w-8" />,
    features: [
      'AI-Powered DevOps Assistance: Fast, intelligent troubleshooting',
      'Integration with DevOps Tools: Works with Kubernetes, ArgoCD, Jenkins',
      'Faster Incident Resolution: Identify and remediate issues efficiently'
    ],
    image: '/images/truxt-arch.png'
  }
]

export default function AISolutionsPage() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* <section className="relative">
        <PageIllustration />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Discover Our</span>{' '}
                <span className="block text-primary xl:inline">AI-Powered Solutions</span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                Revolutionize your operations with cutting-edge AI technology. Explore our products designed to enhance efficiency and drive innovation.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <Button className="w-full px-8 py-3 text-base font-medium">Get started</Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button variant="outline" className="w-full px-8 py-3 text-base font-medium">Learn more</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <main className="container max-w-6xl mx-auto py-16">
        {solutions.map((solution, index) => (
          <section key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 mb-24`}>
            <div className="w-full md:w-1/2">
              <Image
                src={solution.image}
                alt={solution.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <Card className="border-none shadow-none bg-transparent">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      {React.cloneElement(solution.icon, { className: "h-8 w-8 text-primary" })}
                    </div>
                    <CardTitle className="text-2xl">{solution.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Button className="mt-6">Learn More</Button> */}
                </CardContent>
              </Card>
            </div>
          </section>
        ))}
      </main>
    </div>
  )
}