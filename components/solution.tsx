import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, HeadphonesIcon, Users, ArrowRight, Lock } from "lucide-react"

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'End to End GenAI Enablement',
      description: '360° GenAI Enablement for comprehensive AI integration across your organization.',
      icon: <Lock className="h-8 w-8" />,
      features: [
        'Build a Robust Knowledge Hub',
        'Enhanced Data Privacy and Security',
        'Broader 3rd party, CRM, Ticketing Platform integration',
        'Truxt GenAi Platform'
      ]
    },
    {
      title: 'Superior Customer Support',
      description: 'Truxt enhances customer interactions through high-speed AI automation and advanced self-service solutions, enabling effortless issue resolution for superior service quality.',
      icon: <HeadphonesIcon className="h-8 w-8" />,
      features: [
        'Automated Support: AI-driven automation for rapid query resolution',
        'Self-Service Solutions: 24/7 AI-driven self-service',
        'Smart Knowledge Base: Continuously updated, powered by adaptive AI'
      ]
    },
    {
      title: 'Empower CX and Sales Teams',
      description: "Truxt's GenAI capabilities empower Customer Experience (CX) and Sales teams to deliver more precise, personalized, and timely responses, ultimately enhancing client satisfaction and driving growth.",
      icon: <Users className="h-8 w-8" />,
      features: [
        'Self-Service Solutions: Enable customers to access answers anytime',
        'Smart Knowledge Base: Quick access to relevant information',
        'Analytics: Real-time customer insights for strategic decision-making'
      ]
    },
    {
      title: 'DevOps Technical Support',
      description: "Truxt's DevOpsGPT brings AI-driven automation and troubleshooting to DevOps teams, speeding up incident resolution and minimizing downtime with seamless integration into existing workflows.",
      icon: <Cpu className="h-8 w-8" />,
      features: [
        'AI-Powered DevOps Assistance: Fast, intelligent troubleshooting',
        'Integration with DevOps Tools: Works with Kubernetes, ArgoCD, Jenkins',
        'Faster Incident Resolution: Identify and remediate issues efficiently'
      ]
    }
  ]

  return (
    <div className="bg-background ">
      <main className="container max-w-6xl mx-auto py-16" data-aos='zoom-y-out' data-aos-delay={400}>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
          {solutions.map((solution, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    {React.cloneElement(solution.icon, { className: "h-8 w-8 text-primary" })}
                  </div>
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}