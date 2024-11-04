'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Linkedin, Twitter, Youtube } from 'lucide-react';


export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        console.log('Form submitted:', formData);

        setIsSubmitting(false);
        // toast({
        //   title: "Form submitted successfully!",
        //   description: "We'll get back to you as soon as possible.",
        // })

        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className='min-h-screen bg-white p-8'  data-aos='zoom-y-out' data-aos-delay={450}>
            <div className='max-w-6xl mx-auto'>
                <h1 className='text-2xl font-bold mb-8'>Connect with Us</h1>
                <div className='flex flex-col md:flex-row gap-12'>
                    <div className='flex-1'>
                        <form onSubmit={handleSubmit} className='space-y-6'>
                            <div className='space-y-2'>
                                <Label htmlFor='name'>Name</Label>
                                <Input id='name' name='name' value={formData.name} onChange={handleInputChange} placeholder='John Doe' required />
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='email'>Business Email</Label>
                                <Input id='email' name='email' type='email' value={formData.email} onChange={handleInputChange} placeholder='john@company.com' required />
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='subject'>Subject</Label>
                                <Input id='subject' name='subject' value={formData.subject} onChange={handleInputChange} placeholder='Inquiry about your services' required />
                            </div>
                            <div className='space-y-2'>
                                <Label htmlFor='message'>Detailed Contact Reason</Label>
                                <Textarea id='message' name='message' value={formData.message} onChange={handleInputChange} placeholder='Please provide details about your inquiry...' rows={5} required />
                            </div>
                            <Button type='submit' className='w-full bg-black text-white hover:bg-gray-800' disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit'}
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
                            <a href='mailto:contact@truxt.com' className='text-blue-600 hover:underline'>
                                hello@truxt.ai
                            </a>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='font-semibold'>Connect with us</h3>
                            <a href='https://www.linkedin.com/company/truxt' target='_blank' rel='noopener noreferrer' className='inline-flex items-center text-blue-600 hover:underline'>
                                <Linkedin className="mr-2 h-5 w-5" />
                            </a>
                            <a href='https://www.linkedin.com/company/truxt' target='_blank' rel='noopener noreferrer' className='inline-flex items-center text-blue-600 hover:underline'>
                                <Twitter className="mr-2 h-5 w-5" />
                            </a>
                            <a href='https://www.linkedin.com/company/truxt' target='_blank' rel='noopener noreferrer' className='inline-flex items-center text-blue-600 hover:underline'>
                                <Youtube className="mr-2 h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
