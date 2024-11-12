'use client';

import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, CheckCheck, CheckCircle2, Loader2 } from 'lucide-react';

function DevOpsUI() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });
    const [formStatus, setFormStatus] = useState('idle');

    const waitlistUsers = [
        { name: 'Sarah D', image: '/images/avatar-01.jpg' },
        { name: 'Alex M', image: '/images/avatar-02.jpg' },
        { name: 'John K', image: '/images/avatar-03.jpg' },
        { name: 'Emma R', image: '/images/avatar-04.jpg' },
        { name: 'Mike P', image: '/images/avatar-05.jpg' },
        { name: '+123', image: '/images/avatar-06.jpg' }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('loading');
        try {
            const status = await fetch('/api/waitlist', {
                method: 'POST',
                body: JSON.stringify({ name: formData.name, email: formData.email })
            });
            const response = await status.json();

            if (response.error === 'Could not add member to waitlist') {
                setFormStatus('duplicate');
                return;
            }

            if (response.error) {
                setFormStatus('error');
                return;
            }
            setFormData({ name: '', email: '' });
            setFormStatus('success');
        } catch (err) {
            console.error('Error creating session ID:', err);
            setFormStatus('error');
            return null;
        }
    };

    const StatusAlert = () => {
        switch (formStatus) {
            case 'success':
                return (
                    <Alert className='mb-4 bg-green-50 border-green-200'>
                        <CheckCheck className='h-4 w-4 text-green-600' />
                        <AlertTitle className='text-green-600'>Success!</AlertTitle>
                        <AlertDescription className='text-green-600'>You've been added to our waitlist. We'll be in touch soon!</AlertDescription>
                    </Alert>
                );
            case 'error':
                return (
                    <Alert className='mb-4 bg-red-50 border-red-200'>
                        <AlertCircle className='h-4 w-4 text-red-600' />
                        <AlertTitle className='text-red-600'>Error</AlertTitle>
                        <AlertDescription className='text-red-600'>An internal server error occurred. Please try again later.</AlertDescription>
                    </Alert>
                );
            case 'duplicate':
                return (
                    <Alert className='mb-4 bg-yellow-50 border-yellow-200'>
                        <AlertCircle className='h-4 w-4 text-yellow-600' />
                        <AlertTitle className='text-yellow-600'>Already Registered</AlertTitle>
                        <AlertDescription className='text-yellow-600'>This email is already on our waitlist.</AlertDescription>
                    </Alert>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <div className=' bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8' data-aos='zoom-y-out' data-aos-delay={300}>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid lg:grid-cols-2 gap-12 items-center'>
                        <div className='space-y-8'>
                            <div>
                                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4'>DevOps Technical Support</h1>
                                <p className='text-lg text-gray-500'>Truxt's DevOpsGPT brings AI-driven automation and troubleshooting to DevOps teams, speeding up incident resolution and minimizing downtime with seamless integration into existing workflows.</p>
                            </div>

                            <div className='space-y-6'>
                                <div className='flex gap-3'>
                                    <CheckCircle2 className='h-6 w-6 text-primary flex-shrink-0' />
                                    <div>
                                        <h3 className='font-semibold text-gray-900'>AI-Powered DevOps Assistance</h3>
                                        <p className='text-gray-500'>Quickly diagnose and resolve infrastructure issues, reducing downtime with fast, intelligent troubleshooting.</p>
                                    </div>
                                </div>

                                <div className='flex gap-3'>
                                    <CheckCircle2 className='h-6 w-6 text-primary flex-shrink-0' />
                                    <div>
                                        <h3 className='font-semibold text-gray-900'>Integration with DevOps Tools</h3>
                                        <p className='text-gray-500'>Works smoothly with DevOps tools like Kubernetes, ArgoCD, and Jenkins, optimizing monitoring and issue response.</p>
                                    </div>
                                </div>

                                <div className='flex gap-3'>
                                    <CheckCircle2 className='h-6 w-6 text-primary flex-shrink-0' />
                                    <div>
                                        <h3 className='font-semibold text-gray-900'>Faster Incident Resolution</h3>
                                        <p className='text-gray-500'>Use Truxt's GenAI capabilities to identify root causes and remediate both simple and complex infrastructure issues efficiently.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Column - Waitlist Form */}
                        <div>
                            <Card className='p-6'>
                                <CardContent className='space-y-6'>
                                    <div>
                                        <h2 className='text-2xl font-semibold text-gray-900 mb-2'>Join our journey and get early access</h2>
                                        <p className='text-gray-500'>Join our exclusive waitlist to be among the first to experience the future of DevOps</p>
                                    </div>

                                    <div className='flex -space-x-2 overflow-hidden'>
                                        {waitlistUsers.map((user, index) => (
                                            <Avatar key={index} className='border-2 border-white inline-block ring-2 ring-white'>
                                                {user.image ? <AvatarImage src={user.image} alt={user.name} /> : <AvatarFallback className='bg-primary text-primary-foreground'>{user.name}</AvatarFallback>}
                                            </Avatar>
                                        ))}
                                    </div>

                                    <StatusAlert />

                                    <form onSubmit={handleSubmit} className='space-y-4'>
                                        <div>
                                            <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>
                                                Name
                                            </label>
                                            <Input id='name' placeholder='Enter your name' value={formData.name} onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))} required disabled={formStatus === 'loading'} />
                                        </div>
                                        <div>
                                            <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
                                                Email
                                            </label>
                                            <Input id='email' type='email' placeholder='you@example.com' value={formData.email} onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} required disabled={formStatus === 'loading'} />
                                        </div>
                                        <Button type='submit' className='w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] ' disabled={formStatus === 'loading'}>
                                            {formStatus === 'loading' ? (
                                                <>
                                                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                                    Please wait
                                                </>
                                            ) : (
                                                'Join Waitlist'
                                            )}
                                        </Button>
                                    </form>

                                    <p className='text-xs text-gray-500 text-center'>
                                        Don't worry Truxt keeps your infromation secure always.
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

export default DevOpsUI;
