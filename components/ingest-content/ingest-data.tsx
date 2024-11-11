'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check, Loader2, AlertCircle } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { File, Gamepad2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

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
    icon: React.ElementType;
}

type MessageType = 'ValidationError' | 'NetworkError' | 'AuthError' | 'CustomError' | 'InternalError' | 'Success';

interface MessageState {
    type: MessageType;
    message: string;
}

export default function Component() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        docsUrl: '',
        subdomain: '',
        otp: ''
    });
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [message, setMessage] = useState<MessageState | null>(null);
    const [isSendingOtp, setIsSendingOtp] = useState(false);
    const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);

    const searchParams = useSearchParams();

    useEffect(() => {
        const emailQuery = searchParams.get('email');
        if (emailQuery) {
            setFormData((prevData) => ({ ...prevData, email: emailQuery }));
        }
    }, [searchParams]);

    useEffect(() => {
        if (formData.email) {
            const domain = formData.email.split('@')[1];
            if(domain) {
                setFormData((prevData) => ({ ...prevData, subdomain: domain.split('.')[0]}));
            }
        }
    }, [formData.email]);

    const formFields: FormField[] = [
        { id: 'name', name: 'name', label: 'Full Name', placeholder: 'John', required: true },
        {
            id: 'email',
            name: 'email',
            label: 'Business Email',
            type: 'email',
            placeholder: 'me@mycompany.com',
            required: true
        },
        {
            id: 'docsUrl',
            name: 'docsUrl',
            label: 'Link to your docs, help center, or website',
            type: 'url',
            placeholder: 'https://docs.example.com',
            required: true
        },
        {
            id: 'subdomain',
            name: 'subdomain',
            label: 'Preferred Subdomain',
            placeholder: 'mycompany',
            required: true
        }
    ];

    const steps: Step[] = [
        { step: 1, title: 'Data Ingesting', icon: File },
        { step: 2, title: 'Start query with your playground', icon: Gamepad2 }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);

        try {
            const status = await fetch('/api/sandbox/create-sandbox', {
                method: 'POST',
                body: JSON.stringify({ name: formData.name, email: formData.email, docsLink: formData.docsUrl, subdomain: formData.subdomain })
            });
            const response = await status.json();
            console.log(response);

            if (response.data.error) {
                setMessage({
                    type: 'InternalError',
                    message: response.data.message
                });
            } else {
                setMessage({
                    type: 'Success',
                    message: response.data.message
                });
                setCurrentStep(2);
            }
        } catch (err) {
            setMessage({
                type: 'NetworkError',
                message: 'Failed to submit form. Please try again.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSendOtp = async () => {
        if (!formData.name || !formData.email) {
            setMessage({
                type: 'ValidationError',
                message: 'Please enter both name and email before requesting OTP.'
            });
            return;
        }

        setIsSendingOtp(true);
        setMessage(null);

        try {
            const status = await fetch('/api/sandbox/send-otp', {
                method: 'POST',
                body: JSON.stringify({ email: formData.email })
            });
            const response = await status.json();
            if (response.data.error) {
                setMessage({
                    type: 'InternalError',
                    message: response.data.message
                });
            } else {
                setMessage({
                    type: 'Success',
                    message: response.data.message
                });
                setIsOtpSent(true);
            }
        } catch (err) {
            setMessage({
                type: 'NetworkError',
                message: 'An Internal error occurred while sending your OTP.'
            });
        } finally {
            setIsSendingOtp(false);
        }
    };

    const handleVerifyOtp = async () => {
        setIsVerifyingOtp(true);
        setMessage(null);

        try {
            const status = await fetch('/api/sandbox/verify-otp', {
                method: 'POST',
                body: JSON.stringify({ email: formData.email, code: formData.otp })
            });
            const response = await status.json();
            console.log(response);

            if (response.data.error) {
                setMessage({
                    type: 'AuthError',
                    message: response.data.message
                });

            }
             else {
                setMessage({
                    type: 'Success',
                    message: response.data.message
                });
                setIsEmailVerified(true);
                setIsOtpSent(false); // Hide OTP field after successful verification
            }
        } catch (err) {
            setMessage({
                type: 'AuthError',
                message: 'Invalid OTP. Please try again.'
            });
        } finally {
            setIsVerifyingOtp(false);
        }
    };

    return (
        <div className='bg-white p-8' data-aos='zoom-y-out' data-aos-delay={450}>
            <div className='mx-auto max-w-6xl'>
                <h1 className='mb-8 text-4xl font-bold'>See it for your content</h1>

                <div className='flex flex-col gap-8 lg:flex-row lg:gap-16'>
                    {/* Left side - Form */}
                    <div className='flex-1'>
                        <p className='mb-8 text-gray-600'>Share a link to your content and we'll create a personalized sandbox for you to preview</p>

                        {currentStep === 1 && (
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                {message && (
                                    <Alert variant={message.type === 'Success' ? 'default' : 'destructive'} className={`mb-4 ${message.type === 'Success' ? 'bg-green-50 text-green-700 border-green-200' : ''}`}>
                                        {message.type === 'Success' ? <Check className='h-4 w-4 text-green-500' /> : <AlertCircle className='h-4 w-4' />}
                                        <AlertTitle>{message.type}</AlertTitle>
                                        <AlertDescription>{message.message}</AlertDescription>
                                    </Alert>
                                )}
                                {formFields.map((field) => (
                                    <div key={field.id} className='space-y-2'>
                                        <Label htmlFor={field.id}>{field.label}</Label>
                                        {field.name === 'subdomain' ? (
                                            <div className='flex items-center'>
                                                <span className='rounded-l-md border border-r-0 border-gray-300 bg-gray-100 px-3 py-2 text-gray-500'>https://</span>
                                                <Input id={field.id} name={field.name} type={field.type || 'text'} value={formData[field.name as keyof typeof formData]} onChange={handleInputChange} placeholder={field.placeholder} required={field.required} className='rounded-none border-l-0 border-r-0' disabled={!isEmailVerified} />
                                                <span className='rounded-r-md border border-l-0 border-gray-300 bg-gray-100 px-3 py-2 text-gray-500'>.truxt.xyz</span>
                                            </div>
                                        ) : field.name === 'email' ? (
                                            <div className='flex items-center space-x-2'>
                                                <Input id={field.id} name={field.name} type={field.type || 'text'} value={formData[field.name as keyof typeof formData]} onChange={handleInputChange} placeholder={field.placeholder} required={field.required} disabled={isEmailVerified} />
                                                <Button type='button' onClick={handleSendOtp} disabled={isEmailVerified || isOtpSent || !formData.email || !formData.name || isSendingOtp}>
                                                    {isSendingOtp ? <Loader2 className='h-4 w-4 animate-spin' /> : isOtpSent ? 'Sent' : 'Send Code'}
                                                </Button>
                                            </div>
                                        ) : (
                                            <Input id={field.id} name={field.name} type={field.type || 'text'} value={formData[field.name as keyof typeof formData]} onChange={handleInputChange} placeholder={field.placeholder} required={field.required} disabled={field.name !== 'name' && !isEmailVerified} />
                                        )}
                                    </div>
                                ))}
                                {isOtpSent && !isEmailVerified && (
                                    <div className='space-y-2'>
                                        <Label htmlFor='otp'>Verification Code</Label>
                                        <div className='flex items-center space-x-2'>
                                            <Input
                                                id='otp'
                                                name='otp'
                                                type='text'
                                                value={formData.otp}
                                                onChange={handleInputChange}
                                                placeholder='Enter OTP'
                                                required
                                            />
                                            <Button type='button' onClick={handleVerifyOtp} disabled={!formData.otp || isVerifyingOtp}>
                                                {isVerifyingOtp ? <Loader2 className='h-4 w-4 animate-spin' /> : 'Verify Code'}
                                            </Button>
                                        </div>
                                    </div>
                                )}
                                <Button type='submit' className='w-full bg-black text-white hover:bg-gray-800' disabled={!isEmailVerified || isLoading}>
                                    {isLoading ? <Loader2 className='h-4 w-4 animate-spin mr-2' /> : null}
                                    Next →
                                </Button>
                            </form>
                        )}

                        {currentStep > 1 && <div className='flex h-64 items-center justify-center'>{isLoading ? <Loader2 className='h-8 w-8 animate-spin' /> : <div className='text-xl font-medium'>{currentStep === 3 ? 'Ready to start querying!' : 'Processing your content...'}</div>}</div>}
                    </div>

                    {/* Right side - Animated GIF and Progress Steps */}
                    <div className='w-full lg:w-[400px] space-y-8'>
                        {/* Progress Steps */}
                        <div className='bg-gray-50 p-6 rounded-xl'>
                            <h3 className='text-lg font-semibold mb-4'>Progress</h3>
                            <div className='relative'>
                                {steps.map((item, index) => (
                                    <div key={item.step} className='flex items-center mb-4 last:mb-0'>
                                        <div
                                            className={`
                                                flex h-8 w-8 items-center justify-center rounded-full z-10
                                                ${currentStep >= item.step ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'}
                                            `}
                                        >
                                            {currentStep > item.step ? <Check /> : <item.icon />}
                                        </div>
                                        <div className='ml-4 flex-grow'>
                                            <div className='text-sm font-medium'>{item.title}</div>
                                            <div className='text-xs text-gray-500'>Step {item.step}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='relative h-[300px] rounded-xl overflow-hidden'>
                            <Image src='/images/public-pages-ui.png' alt='Processing animation' width={400} height={300} className='object-cover' priority />
                            {/* <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' /> */}
                            {/* <div className='absolute bottom-4 left-4 right-4'>
                                <h3 className='text-lg font-semibold text-white'>Content Processing</h3>
                                <p className='text-sm text-white/90'>Watch as we analyze and process your content in real-time</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}