'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Linkedin, Twitter, Youtube, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState<FormStatus>('idle');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
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
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Simulating successful submission
            console.log('Form submitted:', formData);
            setFormStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
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
                        <CheckCircle className='h-4 w-4 text-green-600' />
                        <AlertTitle className='text-green-600'>Success!</AlertTitle>
                        <AlertDescription className='text-green-600'>Your message has been sent successfully. We'll get back to you soon!</AlertDescription>
                    </Alert>
                );
            case 'error':
                return (
                    <Alert className='mb-4 bg-red-50 border-red-200'>
                        <AlertCircle className='h-4 w-4 text-red-600' />
                        <AlertTitle className='text-red-600'>Error</AlertTitle>
                        <AlertDescription className='text-red-600'>An error occurred while sending your message. Please try again later.</AlertDescription>
                    </Alert>
                );
            default:
                return null;
        }
    };

    return (
        <div className='min-h-screen bg-white p-8' data-aos='zoom-y-out' data-aos-delay={450}>
            <div className='max-w-6xl mx-auto'>
                <h1 className='text-2xl font-bold mb-8'>Connect with Us</h1>
                <div className='flex flex-col md:flex-row gap-12'>
                    <div className='flex-1'>
                        <StatusAlert />
                        <form onSubmit={handleSubmit} className='space-y-6'>
                            <div className='space-y-2'>
                                <Label htmlFor='name'>Name *</Label>
                                <Input id='name' name='name' value={formData.name} onChange={handleInputChange} placeholder='John Doe' required className={errors.name ? 'border-red-500' : ''} disabled={formStatus==='loading'}/>
                                {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='email'>Business Email *</Label>
                                <Input id='email' name='email' type='email' value={formData.email} onChange={handleInputChange} placeholder='john@company.com' required className={errors.email ? 'border-red-500' : ''} disabled={formStatus==='loading'}/>
                                {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='subject'>Subject *</Label>
                                <Input id='subject' name='subject' value={formData.subject} onChange={handleInputChange} placeholder='Inquiry about your services' required className={errors.subject ? 'border-red-500' : ''} disabled={formStatus==='loading'}/>
                                {errors.subject && <p className='text-red-500 text-sm'>{errors.subject}</p>}
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='message'>Detailed Contact Reason</Label>
                                <Textarea id='message' name='message' value={formData.message} onChange={handleInputChange} placeholder='Please provide details about your inquiry...' rows={5} disabled={formStatus==='loading'} />
                            </div>
                            <Button type='submit' className='w-full bg-black text-white hover:bg-gray-800' disabled={formStatus === 'loading'}>
                                {formStatus === 'loading' ? (
                                    <>
                                        <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                        Submitting...
                                    </>
                                ) : (
                                    'Submit'
                                )}
                            </Button>
                        </form>
                    </div>

                    <div className='md:w-72 space-y-6'>
                        <div className='space-y-2'>
                            <h2 className='text-xl font-semibold'>Truxt</h2>
                            <p className='text-gray-600'>
                                New Jersey
                                <br />
                                Innovation City, TC 12345
                                <br />
                                United States
                            </p>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='font-semibold'>Official Email</h3>
                            <a href='mailto:hello@truxt.ai' className='text-blue-600 hover:underline'>
                                hello@truxt.ai
                            </a>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='font-semibold'>Connect with us</h3>
                            <div className='flex space-x-4'>
                                <a href='https://www.linkedin.com/company/truxt' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800'>
                                    <Linkedin className='h-6 w-6' />
                                    <span className='sr-only'>LinkedIn</span>
                                </a>
                                <a href='https://twitter.com/truxt' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:text-blue-600'>
                                    <Twitter className='h-6 w-6' />
                                    <span className='sr-only'>Twitter</span>
                                </a>
                                <a href='https://www.youtube.com/truxt' target='_blank' rel='noopener noreferrer' className='text-red-600 hover:text-red-800'>
                                    <Youtube className='h-6 w-6' />
                                    <span className='sr-only'>YouTube</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
