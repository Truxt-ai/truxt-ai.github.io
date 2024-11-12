'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'
import PageIllustration from '@/components/page-illustration'

const features = [
  {
    title: 'Knowledge Hub',
    description: 'Centralizes product information, community solutions, and resources.'
  },
  {
    title: 'Data Privacy',
    description: 'Keeps enterprise data secure with on-premise deployment options.'
  },
  {
    title: 'Automated Support',
    description: 'Uses AI to automate support and improve through interactions.'
  },
  {
    title: 'Scalable Integration',
    description: 'Adapts to growth, integrating with systems and offering real-time insights.'
  }
];

export default function TruxtGenAIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-7" data-aos='zoom-y-out' data-aos-delay={400}>
        <div className="mx-auto max-w-6xl px-4 sm:px-4">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/truxt-gen-ai.png"
              alt="Truxt Gen AI Enablement"
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent flex items-center">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">Experience the Future of AI</h2>
                <p className="text-white text-lg max-w-md">
                  Truxt GenAI and DevOpsGPT revolutionize enterprise operations with cutting-edge AI solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8" data-aos='zoom-y-out' data-aos-delay={450}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Card className="p-6">
              <CardContent>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Features</h2>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" color='#60a5fa' />
                      <div>
                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-gray-500">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8" data-aos='zoom-y-out' data-aos-delay={450}>
              {/* <Card className="p-6">
                <CardContent>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why Choose Truxt?</h2>
                  <p className="text-gray-500 mb-6">
                    Truxt GenAI and DevOpsGPT offer AI-powered self-service support and instant troubleshooting, integrating seamlessly with enterprise tools to enhance efficiency, minimize downtime, and improve customer satisfaction.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-500">
                    <li>Handles complex, high-volume inquiries.</li>
                    <li>Grows with demand, ensuring quality service.</li>
                    <li>Multi-LLM tech for fast, accurate resolutions.</li>
                    <li>Data privacy with on-premise deployment.</li>
                    <li>Tailored to organizational needs.</li>
                    <li>Analytics on resolutions and trends.</li>
                  </ul>
                </CardContent>
              </Card> */}

              <Card className="p-6 bg-gradient-to-t from-blue-600 to-blue-500">
                <CardContent>
                  <h2 className="text-2xl font-semibold mb-4 text-white">Ready to Get Started?</h2>
                  <p className="mb-6 text-white">
                    Experience the future of AI-enabled organizations. Contact our team to schedule your personalized demo today.
                  </p>
                  <Link
                    href="/contact-us"
                    className="inline-block bg-white text-primary font-semibold py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Request demo
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}