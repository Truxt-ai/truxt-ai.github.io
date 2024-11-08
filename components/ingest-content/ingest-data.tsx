'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

interface FormField {
  id: string
  name: string
  label: string
  type?: string
  placeholder: string
  required: boolean
}

interface Step {
  step: number
  title: string
  icon: string
}

export default function IngestData() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    docsUrl: '',
    subdomain: '',
    otp: '',
  })
  const [isEmailVerified, setIsEmailVerified] = useState(false)
  const [isOtpSent, setIsOtpSent] = useState(false)

  const searchParams = useSearchParams()

  useEffect(() => {
    const emailQuery = searchParams.get('email')
    if (emailQuery) {
      setFormData((prevData) => ({ ...prevData, email: emailQuery }))
      console.log(emailQuery)
    }
  }, [searchParams])

  useEffect(() => {
    if (formData.email) {
      const domain = formData.email.split('@')[1]
      setFormData((prevData) => ({ ...prevData, subdomain: domain }))
    }
  }, [formData.email])

  const formFields: FormField[] = [
    { id: 'name', name: 'name', label: 'Name', placeholder: 'John', required: true },
    {
      id: 'email',
      name: 'email',
      label: 'Business Email',
      type: 'email',
      placeholder: 'me@mycompany.com',
      required: true,
    },
    {
      id: 'otp',
      name: 'otp',
      label: 'OTP',
      type: 'text',
      placeholder: 'Enter OTP',
      required: true,
    },
    {
      id: 'docsUrl',
      name: 'docsUrl',
      label: 'Link to your docs, help center, or website',
      type: 'url',
      placeholder: 'https://docs.example.com',
      required: true,
    },
    {
      id: 'subdomain',
      name: 'subdomain',
      label: 'Preferred Subdomain',
      placeholder: 'mycompany',
      required: true,
    },
  ]

  const steps: Step[] = [
    { step: 1, title: 'Data Ingesting', icon: '📄' },
    { step: 2, title: 'Start query with your playground', icon: '🎮' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setCurrentStep(2)
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setCurrentStep(3)
    setIsLoading(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSendOtp = async () => {
    setIsLoading(true)
    // Simulating OTP sending
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsOtpSent(true)
    setIsLoading(false)
  }

  const handleVerifyOtp = async () => {
    setIsLoading(true)
    // Simulating OTP verification
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsEmailVerified(true)
    setIsLoading(false)
  }

  return (
    <div className="min-h-[70vh] bg-white p-8" data-aos="zoom-y-out" data-aos-delay={450}>
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-4xl font-bold">See it for your content</h1>

        <div className="flex gap-16">
          {/* Left side - Form */}
          <div className="flex-1">
            <p className="mb-8 text-gray-600">
              Share a link to your content and we'll create a personalized sandbox for you to preview
            </p>

            {currentStep === 1 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                {formFields.map((field) => (
                  <div key={field.id} className="space-y-2">
                    <Label htmlFor={field.id}>{field.label}</Label>
                    {field.name === 'subdomain' ? (
                      <div className="flex items-center">
                        <span className="rounded-l-md border border-r-0 border-gray-300 bg-gray-100 px-3 py-2 text-gray-500">
                          https://
                        </span>
                        <Input
                          id={field.id}
                          name={field.name}
                          type={field.type || 'text'}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleInputChange}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="rounded-none border-l-0 border-r-0"
                          disabled={isEmailVerified}
                        />
                        <span className="rounded-r-md border border-l-0 border-gray-300 bg-gray-100 px-3 py-2 text-gray-500">
                          .truxt.xyz
                        </span>
                      </div>
                    ) : field.name === 'email' ? (
                      <div className="flex items-center space-x-2">
                        <Input
                          id={field.id}
                          name={field.name}
                          type={field.type || 'text'}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleInputChange}
                          placeholder={field.placeholder}
                          required={field.required}
                          disabled={isEmailVerified}
                        />
                        <Button 
                          type="button" 
                          onClick={handleSendOtp}
                          disabled={isEmailVerified || isOtpSent || !formData.email}
                        >
                          {isOtpSent ? 'Resend OTP' : 'Send OTP'}
                        </Button>
                      </div>
                    ) : field.name === 'otp' ? (
                      <div className="flex items-center space-x-2">
                        <Input
                          id={field.id}
                          name={field.name}
                          type={field.type || 'text'}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleInputChange}
                          placeholder={field.placeholder}
                          required={field.required}
                          disabled={!isOtpSent || isEmailVerified}
                        />
                        <Button 
                          type="button" 
                          onClick={handleVerifyOtp}
                          disabled={isEmailVerified || !isOtpSent || !formData.otp}
                        >
                          Verify OTP
                        </Button>
                      </div>
                    ) : (
                      <Input
                        id={field.id}
                        name={field.name}
                        type={field.type || 'text'}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        placeholder={field.placeholder}
                        required={field.required}
                        disabled={field.name === 'name' && isEmailVerified}
                      />
                    )}
                  </div>
                ))}
                <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800" disabled={!isEmailVerified}>
                  Next →
                </Button>
              </form>
            )}

            {currentStep > 1 && (
              <div className="flex h-64 items-center justify-center">
                {isLoading ? (
                  <Loader2 className="h-8 w-8 animate-spin" />
                ) : (
                  <div className="text-xl font-medium">
                    {currentStep === 3 ? 'Ready to start querying!' : 'Processing your content...'}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right side - Progress Steps */}
          <div className="w-72">
            <div className="relative">
              {steps.map((item, index) => (
                <div key={item.step} className="mb-12 flex items-start">
                  <div className="relative">
                    <div
                      className={`
                        flex h-8 w-8 items-center justify-center rounded-full
                        ${
                          currentStep >= item.step
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-400'
                        }
                      `}
                    >
                      {currentStep > item.step ? '✓' : item.icon}
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`
                          absolute left-1/2 top-8 h-12 w-0.5 -translate-x-1/2
                          ${currentStep > item.step ? 'bg-blue-500' : 'bg-gray-200'}
                        `}
                      />
                    )}
                  </div>
                  <div className="ml-4">
                    <div className="text-sm text-gray-500">STEP {item.step}</div>
                    <div className="font-medium">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}