import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const cardData = [
    {
        iconBg: 'bg-purple-600',
        title: 'DevOpsGPT',
        subtitle: 'Technical Support',
        description: 'DevOpsGPT is your DevOps technical support. It enables instant AI-powered troubleshooting, reducing downtime and accelerating resolution. It uses multiple open-source technologies to provide precise support through DevOps-trained large language models (LLMs).',
        previewVideo: 'https://example.com/path/to/your/video.mp4',
        previewAlt: 'DevOps GPT preview',
        buttonText: 'Learn More',
        buttonLink: '/devops-gpt'
    },
    {
        iconBg: 'bg-purple-600',
        title: 'Truxt Gen AI',
        subtitle: 'Platform',
        description: 'Truxt GenAI Platform enhances self-service support with an AI-powered Knowledge Hub, automation, and secure LLM, offering seamless scaling and real-time insights for improved efficiency and customer satisfaction.',
        previewImage: '/images/truxt-gen-ai.png',
        previewAlt: 'Truxt Gen AI preview',
        buttonText: 'Request demo',
        buttonLink: '/contact-us'
    }
];

export default function Component() {
    return (
        <div className='pb-10'>
            <div className='grid gap-6 p-6 md:grid-cols-2 max-w-7xl mx-auto'>
                {cardData.map((card, index) => (
                    <Card key={index} className='bg-white border-gray-200' data-aos='zoom-y-out' data-aos-delay={450}>
                        <CardHeader className='space-y-4'>
                            <div className='rounded-lg overflow-hidden border border-gray-200 h-1/2'>
                                {card.previewVideo ? (
                                 <iframe className='w-full h-full object-cover aspect-video' src='https://www.youtube.com/embed/Z28zvZEglKQ' title='Introducing Truxt.ai DevOpsGPT: Your dedicated DevOps Technical Support' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen></iframe>
                                ) : card.previewImage ? (
                                    <Image src={card.previewImage} alt={card.previewAlt} className='h-full mx-auto rounded-md w-full aspect-video' width={400} height={300} />
                                ) : (
                                    <div className='h-full w-full bg-gray-200 flex items-center justify-center'>
                                        <span className='text-gray-500'>No preview available</span>
                                    </div>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className='space-y-2'>
                                <CardTitle className='flex items-center gap-2 text-2xl'>
                                    {card.title} <span className='text-gray-500'>{card.subtitle}</span>
                                </CardTitle>
                                <p className='text-sm text-gray-600'>{card.description}</p>
                            </div>
                        </CardContent>
                        <CardFooter className='flex'>
                            <Link className='w-fit bg-gradient-to-t px-3 flex py-2 items-center rounded-lg gap-1 from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] group-hover' href={card.buttonLink}>
                                {card.buttonText}
                                <ArrowRight className='w-4 h-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1' />
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}