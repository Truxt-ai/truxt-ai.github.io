import React from 'react'
import { ArrowRight, Building2, Network, Cpu, Shield, Hexagon, BarChart3 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Feature {
  Icon: React.ElementType
  title: string
  description: string
}

const features: Feature[] = [
  {
    Icon: Building2,
    title: "Enterprise-Ready",
    description: "Purpose-built to handle high volumes of complex technical inquiries with precision and efficiency"
  },
  {
    Icon: Network,
    title: "Scalable Architecture",
    description: "Adapts seamlessly to growing support demands while maintaining consistent service quality"
  },
  {
    Icon: Cpu,
    title: "Multi-LLM Technology",
    description: "Delivers faster, more accurate resolutions through an advanced multi-language model system"
  },
  {
    Icon: Shield,
    title: "Enterprise Security",
    description: "Ensures data privacy with on-premise deployment options and robust security controls"
  },
  {
    Icon: Hexagon,
    title: "Unified Ecosystem",
    description: "Integrates with your existing CRM and ticketing systems for streamlined workflows"
  },
  {
    Icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Provides actionable analytics on customer trends and team performance"
  }
]

export default function WhyTruxtSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why Truxt?</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Transform your support operations with an enterprise-grade generative AI platform
          </p>
        </div>
        <div className="mt-10 sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <Button asChild size="lg">
            <a href="/href" className="group flex items-center gap-2">
              Transform Your Support Operations
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-x-3 text-lg font-semibold leading-7">
          <feature.Icon className="h-6 w-6 text-primary" />
          {feature.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{feature.description}</p>
      </CardContent>
    </Card>
  )
}