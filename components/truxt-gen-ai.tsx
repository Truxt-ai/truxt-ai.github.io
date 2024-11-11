'use client';

import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, CheckCheck, CheckCircle2, Loader2 } from 'lucide-react';

function TruxtGenAIEnablementUI() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('idle');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const testimonials = [
        { name: 'Sarah D', image: '/images/avatar-01.jpg', company: 'Tech Co' },
        { name: 'Alex M', image: '/images/avatar-02.jpg', company: 'Innovate Inc' },
        { name: 'John K', image: '/images/avatar-03.jpg', company: 'Future Systems' },
        { name: 'Emma R', image: '/images/avatar-04.jpg', company: 'AI Solutions' },
        { name: 'Mike P', image: '/images/avatar-05.jpg', company: 'Data Corp' },
        { name: 'Lisa T', image: '/images/avatar-06.jpg', company: 'Smart Tech' }
    ];

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.company.trim()) newErrors.subject = 'Company is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!.*@.*\.com)[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            newErrors.email = 'Please enter a valid business email';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;

        setFormStatus('loading');

        try {
            const status = await fetch('/api/contact-us', {
                method: 'POST',
                body: JSON.stringify({ name: formData.name, email: formData.email, subject: formData.company, comments: formData.message })
            });
            const response = await status.json();
            setFormStatus('success');
            setFormData({
                name: '',
                email: '',
                company: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setFormStatus('error');
        }
    };

    const StatusAlert = () => {
        switch (formStatus) {
            case 'success':
                return (
                    <Alert className='mb-4 bg-green-50 border-green-200'>
                        <CheckCheck className='h-4 w-4 text-green-600' />
                        <AlertTitle className='text-green-600'>Success!</AlertTitle>
                        <AlertDescription className='text-green-600'>Your demo request has been received. We'll be in touch soon!</AlertDescription>
                    </Alert>
                );
            case 'error':
                return (
                    <Alert className='mb-4 bg-red-50 border-red-200'>
                        <AlertCircle className='h-4 w-4 text-red-600' />
                        <AlertTitle className='text-red-600'>Error</AlertTitle>
                        <AlertDescription className='text-red-600'>An error occurred while submitting your request. Please try again later.</AlertDescription>
                    </Alert>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className='min-h-[70vh] bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8' data-aos='zoom-y-out' data-aos-delay={300}>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid lg:grid-cols-2 gap-12 items-center'>
                        <div className='space-y-8'>
                            <div>
                                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4'>Truxt 360° Gen AI Enablement</h1>
                                <p className='text-lg text-gray-500'>Transform your organization with comprehensive AI-powered solutions</p>
                            </div>

                            <div className='space-y-6'>
                                <div className='flex gap-3'>
                                    <CheckCircle2 className='h-6 w-6 text-primary flex-shrink-0' />
                                    <div>
                                        <h3 className='font-semibold text-gray-900'>Knowledge Hub</h3>
                                        <p className='text-gray-500'>Supercharge every bit of product information, including Knowledge base, community solutions, recorded videos, coupled with surrounding technologies.</p>
                                    </div>
                                </div>

                                <div className='flex gap-3'>
                                    <CheckCircle2 className='h-6 w-6 text-primary flex-shrink-0' />
                                    <div>
                                        <h3 className='font-semibold text-gray-900'>An Enterprise LLM</h3>
                                        <p className='text-gray-500'>Provision to restrict responses only on internal data, enterprise data remains private and does not go to LLM.</p>
                                    </div>
                                </div>

                                <div className='flex gap-3'>
                                    <CheckCircle2 className='h-6 w-6 text-primary flex-shrink-0' />
                                    <div>
                                        <h3 className='font-semibold text-gray-900'>AI-Powered Automation</h3>
                                        <p className='text-gray-500'>Automate support queries, and troubleshooting, freeing up resources for complex issues.</p>
                                    </div>
                                </div>

                                <div className='flex gap-3'>
                                    <CheckCircle2 className='h-6 w-6 text-primary flex-shrink-0' />
                                    <div>
                                        <h3 className='font-semibold text-gray-900'>Scalability</h3>
                                        <p className='text-gray-500'>Whether you're a growing startup or a large enterprise, Truxt scales with your needs, handling increasing demands effortlessly.</p>
                                    </div>
                                </div>

                                <div className='flex gap-3'>
                                    <CheckCircle2 className='h-6 w-6 text-primary flex-shrink-0' />
                                    <div>
                                        <h3 className='font-semibold text-gray-900'>Seamless Integration</h3>
                                        <p className='text-gray-500'>Easily integrate Truxt with existing enterprise systems, tools, and workflows, ensuring a smooth transition and minimal disruption.</p>
                                    </div>
                                </div>

                                <div className='flex gap-3'>
                                    <CheckCircle2 className='h-6 w-6 text-primary flex-shrink-0' />
                                    <div>
                                        <h3 className='font-semibold text-gray-900'>Real-Time Insights</h3>
                                        <p className='text-gray-500'>Access actionable analytics and performance metrics that help optimize support strategies and identify operational improvements.</p>
                                    </div>
                                </div>

                                <div className='flex gap-3'>
                                    <CheckCircle2 className='h-6 w-6 text-primary flex-shrink-0' />
                                    <div>
                                        <h3 className='font-semibold text-gray-900'>Continuous Learning</h3>
                                        <p className='text-gray-500'>Truxt's AI learns from every interaction, improving accuracy and providing smarter, more context-aware responses over time.</p>
                                    </div>
                                </div>

                                <div className='flex gap-3'>
                                    <CheckCircle2 className='h-6 w-6 text-primary flex-shrink-0' />
                                    <div>
                                        <h3 className='font-semibold text-gray-900'>Security & Compliance</h3>
                                        <p className='text-gray-500'>Ensure data protection with enterprise-grade security and regulatory compliance, with options for on-premise deployment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Demo Request Form */}
                        <div>
                            <Card className='p-6'>
                                <CardContent className='space-y-6'>
                                    <div>
                                        <h2 className='text-2xl font-semibold text-gray-900 mb-2'>Request a Demo</h2>
                                        <p className='text-gray-500'>Experience the future of AI-enabled organizations. Schedule your personalized demo today.</p>
                                    </div>

                                    <div className='flex -space-x-2 overflow-hidden'>
                                        {testimonials.map((user, index) => (
                                            <Avatar key={index} className='w-10 h-10 ring-2 ring-white'>
                                                <AvatarImage src={user.image} alt={user.name} />
                                                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                        ))}
                                    </div>

                                    <StatusAlert />

                                    <form onSubmit={handleSubmit} className='space-y-4'>
                                        <div>
                                            <Input placeholder='Name' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                            {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
                                        </div>
                                        <div>
                                            <Input placeholder='Email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                                        </div>
                                        <div>
                                            <Input placeholder='Company' value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                                            {errors.subject && <p className='text-red-500 text-sm'>{errors.subject}</p>}
                                        </div>
                                        <div>
                                            <Textarea placeholder='Message (optional)' value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                                        </div>
                                        <Button type='submit' disabled={formStatus === 'loading'}>
                                            {formStatus === 'loading' ? <Loader2 className='animate-spin mr-2 h-4 w-4' /> : 'Send Request'}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TruxtGenAIEnablementUI;
