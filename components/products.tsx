import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProductsPage() {
    const products = [
        {
            name: 'DevOps Analyzer',
            description: 'AI-powered code analysis and optimization tool',
            features: ['Intelligent code review', 'Performance optimization suggestions', 'Security vulnerability detection'],
            image: '/placeholder.svg?height=400&width=400'
        },
        {
            name: 'CI/CD Automator',
            description: 'Streamline your CI/CD pipelines with AI assistance',
            features: ['Automated pipeline generation', 'Intelligent test selection', 'Deployment risk assessment'],
            image: '/placeholder.svg?height=400&width=400'
        },
        {
            name: 'DevOps Assistant',
            description: 'Your AI-powered DevOps companion',
            features: ['Natural language interface', 'Contextual DevOps recommendations', 'Automated documentation generation'],
            image: '/placeholder.svg?height=400&width=400'
        }
    ];

    return (
        <div className='container mx-auto py-12 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-4xl font-bold text-center mb-12'>Our Products</h1>
            <div className='space-y-12'>
                {products.map((product, index) => (
                    <Card key={index} className='overflow-hidden'>
                        <div className='flex flex-col md:flex-row'>
                            <div className='md:w-1/2'>
                                <Image src={product.image} alt={product.name} width={400} height={400} className='w-full h-full object-cover' />
                            </div>
                            <div className='md:w-1/2 p-6'>
                                <CardHeader>
                                    <CardTitle className='text-2xl font-bold'>{product.name}</CardTitle>
                                    <CardDescription>{product.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className='list-disc list-inside space-y-2'>
                                        {product.features.map((feature, featureIndex) => (
                                            <li key={featureIndex}>{feature}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button className='w-full'>Learn More</Button>
                                </CardFooter>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
