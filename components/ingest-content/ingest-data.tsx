'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';

interface FormField {
    id: string;
    name: string;
    label: string;
    type?: string;
    placeholder: string;
    required: boolean;
}

interface Step {
    step: number;
    title: string;
    icon: string;
}

export default function IngestData() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        docsUrl: '',
        youtubeUrl: '',
        subdomain: ''
    });

    const formFields: FormField[] = [
        { id: 'name', name: 'name', label: 'Name', placeholder: 'John', required: true },
        { id: 'email', name: 'email', label: 'Business Email', type: 'email', placeholder: 'me@mycompany.com', required: true },
        { id: 'docsUrl', name: 'docsUrl', label: 'Link to your docs, help center, or website', type: 'url', placeholder: 'https://docs.example.com', required: true },
        { id: 'youtubeUrl', name: 'youtubeUrl', label: 'YouTube URL', type: 'url', placeholder: 'https://youtube.com/your-channel', required: true },
        { id: 'subdomain', name: 'subdomain', label: 'Preffered Subdomain', placeholder: 'mycompany', required: true }
    ];

    const steps: Step[] = [
        { step: 1, title: 'Data Ingesting', icon: '📄' },
        { step: 2, title: 'Start query with your playground', icon: '🎮' }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setCurrentStep(2);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setCurrentStep(3);
        setIsLoading(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className='min-h-[70vh] bg-white p-8' data-aos='zoom-y-out' data-aos-delay={450}>
            <div className='max-w-6xl mx-auto'>
                <h1 className='text-4xl font-bold mb-8'>See it for your content</h1>

                <div className='flex gap-16'>
                    {/* Left side - Form */}
                    <div className='flex-1'>
                        <p className='text-gray-600 mb-8'>Share a link to your content and we'll create a personalized sandbox for you to preview</p>

                        {currentStep === 1 && (
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                {formFields.map((field) => (
                                    <div key={field.id} className='space-y-2'>
                                        <Label htmlFor={field.id}>{field.label}</Label>
                                        {field.name === 'subdomain' ? (
                                            <div className='flex items-center'>
                                                <Input id={field.id} name={field.name} type={field.type || 'text'} value={formData[field.name]} onChange={handleInputChange} placeholder={field.placeholder} required={field.required} className='rounded-r-none' />
                                                <span className='bg-gray-100 border border-l-0 border-gray-300 rounded-r-md px-3 py-2 text-gray-500'>.truxt.xyz</span>
                                            </div>
                                        ) : (
                                            <Input id={field.id} name={field.name} type={field.type || 'text'} value={formData[field.name as keyof typeof formData]} onChange={handleInputChange} placeholder={field.placeholder} required={field.required} />
                                        )}
                                    </div>
                                ))}
                                <Button type='submit' className='w-full bg-black text-white hover:bg-gray-800'>
                                    Next →
                                </Button>
                            </form>
                        )}

                        {currentStep > 1 && <div className='flex items-center justify-center h-64'>{isLoading ? <Loader2 className='h-8 w-8 animate-spin' /> : <div className='text-xl font-medium'>{currentStep === 3 ? 'Ready to start querying!' : 'Processing your content...'}</div>}</div>}
                    </div>

                    {/* Right side - Progress Steps */}
                    <div className='w-72'>
                        <div className='relative'>
                            {steps.map((item, index) => (
                                <div key={item.step} className='flex items-start mb-12'>
                                    <div className='relative'>
                                        <div
                                            className={`
                        w-8 h-8 rounded-full flex items-center justify-center
                        ${currentStep >= item.step ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-400'}
                      `}
                                        >
                                            {currentStep > item.step ? '✓' : item.icon}
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div
                                                className={`
                          absolute top-8 left-1/2 w-0.5 h-12 -translate-x-1/2
                          ${currentStep > item.step ? 'bg-blue-500' : 'bg-gray-200'}
                        `}
                                            />
                                        )}
                                    </div>
                                    <div className='ml-4'>
                                        <div className='text-sm text-gray-500'>STEP {item.step}</div>
                                        <div className='font-medium'>{item.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
