'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';

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
    const searchParams = useSearchParams();

    useEffect(() => {
        const subjectQuery = searchParams.get('subject');
        if (subjectQuery) {
            setFormData((prevData) => ({ ...prevData, subject: subjectQuery.replace('-', ' ') }));
        }
    }, [searchParams]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
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
            const status = await fetch('/api/contact-us', {
                method: 'POST',
                body: JSON.stringify({ name: formData.name, email: formData.email, subject: formData.subject, comments: formData.message })
            });
            const response = await status.json();
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
        <div className=' bg-white p-8' data-aos='zoom-y-out' data-aos-delay={450}>
            <div className='max-w-6xl mx-auto'>
                <h1 className='text-2xl font-bold mb-8'>Connect with Us</h1>
                <div className='flex flex-col md:flex-row gap-12'>
                    <div className='flex-1'>
                        <StatusAlert />
                        <form onSubmit={handleSubmit} className='space-y-6'>
                            <div className='space-y-2'>
                                <Label htmlFor='name'>Name *</Label>
                                <Input id='name' name='name' value={formData.name} onChange={handleInputChange} placeholder='John Doe' required className={errors.name ? 'border-red-500' : ''} disabled={formStatus === 'loading'} />
                                {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='email'>Business Email *</Label>
                                <Input id='email' name='email' type='email' value={formData.email} onChange={handleInputChange} placeholder='john@company.com' required className={errors.email ? 'border-red-500' : ''} disabled={formStatus === 'loading'} />
                                {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='subject'>Subject *</Label>
                                <Input id='subject' name='subject' value={formData.subject} onChange={handleInputChange} placeholder='Inquiry about your services' required className={errors.subject ? 'border-red-500' : ''} disabled={formStatus === 'loading'} />
                                {errors.subject && <p className='text-red-500 text-sm'>{errors.subject}</p>}
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='message'>Detailed Contact Reason</Label>
                                <Textarea id='message' name='message' value={formData.message} onChange={handleInputChange} placeholder='Please provide details about your inquiry...' rows={5} disabled={formStatus === 'loading'} />
                            </div>
                            <Button type='submit' className='w-full bg-black hover:bg-gray-800 bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] '  disabled={formStatus === 'loading'}>
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
                            <h3 className='font-semibold'>Official Email</h3>
                            <a href='mailto:hello@truxt.ai' className='text-blue-600 hover:underline'>
                                hello@truxt.ai
                            </a>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='font-semibold'>Connect with us</h3>
                            <div className='flex space-x-4'>
                                <a href='https://www.linkedin.com/company/truxt-ai/' target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:text-blue-800'>
                                    <img src='/images/linkedin.png' alt='LinkedIn' className='size-6' />
                                    <span className='sr-only'>LinkedIn</span>
                                </a>
                                <a href='https://x.com/truxtai' target='_blank' rel='noopener noreferrer' className='text-blue-400 hover:text-blue-600'>
                                    <img src='/images/twitter.png' alt='Twitter' className='size-6' />
                                    <span className='sr-only'>Twitter</span>
                                </a>
                            </div>
                        </div>
                        <Card className='overflow-hidden'>
                            <CardContent className='p-0'>
                                <div className='relative'>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12071.257707321425!2d-74.03050467981883!3d40.85399794004852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f765d06b3ecb%3A0x1411e80500d8a29a!2sRidgefield%20Park%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sin!4v1731353694987!5m2!1sen!2sin" width='100%' height='300' style={{ border: 0 }}  allowFullScreen={true} loading="lazy"></iframe>
                                    <div className='absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-2'>
                                        <h2 className='text-xl font-semibold'>Truxt.ai</h2>
                                        <p className='text-gray-600'>
                                            Ridgefield Park <br />
                                            New Jersey,
                                            <br />
                                            United States
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}


