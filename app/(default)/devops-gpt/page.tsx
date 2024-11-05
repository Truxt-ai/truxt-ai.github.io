'use client';

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CheckCircle2 } from 'lucide-react'
import HeroHome from './hero';
// import { toast } from "@/components/ui/use-toast"

export default function Page() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
      })
    
      const waitlistUsers = [
        { name: 'Sarah D', image: '/images/avatar-01.jpg' },
        { name: 'Alex M', image: '/images/avatar-02.jpg' },
        { name: 'John K', image: '/images/avatar-03.jpg' },
        { name: 'Emma R', image: '/images/avatar-04.jpg' },
        { name: 'Mike P', image: '/images/avatar-05.jpg' },
        { name: '+123', image:'/images/avatar-06.jpg' }
      ]
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Submitted:', formData)
        setFormData({ name: '', email: '' })
      }

    return (
        <>
            <HeroHome />

            <div className="min-h-[70vh] bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8"  data-aos='zoom-y-out' data-aos-delay={450}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                DevOps GPT by Truxt
              </h1>
              <p className="text-lg text-gray-500">
                Revolutionize your DevOps workflow with AI-powered assistance
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Intelligent Code Analysis</h3>
                  <p className="text-gray-500">DevOps GPT analyzes your codebase and provides insights for optimization and best practices.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Automated CI/CD Pipelines</h3>
                  <p className="text-gray-500">Streamline your development process with AI-generated CI/CD pipelines tailored to your project.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Natural Language DevOps</h3>
                  <p className="text-gray-500">Interact with your DevOps tools using natural language, making complex tasks simple and accessible.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Waitlist Form */}
          <div>
            <Card className="p-6">
              <CardContent className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    Join our journey and get early access
                  </h2>
                  <p className="text-gray-500">
                    Join our exclusive waitlist to be among the first to experience the future of DevOps
                  </p>
                </div>

                <div className="flex -space-x-2 overflow-hidden">
                  {waitlistUsers.map((user, index) => (
                    <Avatar key={index} className="border-2 border-white inline-block ring-2 ring-white">
                      {user.image ? (
                        <AvatarImage src={user.image} alt={user.name} />
                      ) : (
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {user.name}
                        </AvatarFallback>
                      )}
                    </Avatar>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Join Waitlist
                  </Button>
                </form>

                <p className="text-xs text-gray-500 text-center">
                  By clicking "Join Waitlist" you agree to our{" "}
                  <a href="#" className="underline">Terms of Service</a> and{" "}
                  <a href="#" className="underline">Privacy Policy</a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
        </>
    );
}
