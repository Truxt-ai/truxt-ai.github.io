import Image from 'next/image';

interface Product {
    id: number;
    title: string;
    description: string;
    features?: string[];
    imageSrc: string;
}

const products: Product[] = [
    {
        id: 1,
        title: 'End 2 End Truxt Gen AI Platform',
        description: 'The End-to-End Truxt GenAI Platform is a comprehensive solution that transforms support operations by creating a robust knowledge hub. Designed for privacy and seamless integration, this platform enhances customer support efficiency with secure data handling and compatibility with third-party CRMs, ticketing systems, and more.',
        features: [
            'Build a Robust Knowledge Hub: Centralized support resources for improved team efficiency.',
            'Enhanced Privacy: Secure and private handling of organizational data.',
            'Broader Third-Party Integration: Easily integrates with popular CRMs and ticketing platforms.',
            'Seamless Support: Ensures high-performance, continuous support for complex customer needs.'
        ],
        imageSrc: '/images/public-pages-ui.png'
    },
    {
        id: 2,
        title: 'Truxt Gen AI Platform',
        description: 'The Truxt GenAI Platform is a scalable, multi-modal solution designed to transform your knowledge base into a GenAI-powered support system. Offering on-premise deployment and pretrained models, it ensures high accuracy, adaptable scalability, and reliable performance across diverse support environments.',
        features: [
            'Pretrained GenAI Model: Optimized for precision in complex issue resolution.',
            'Data Privacy: Your organization’s data remains private and secure.',
            'Scalability: Adapts to large datasets and handles increasing support volume seamlessly.',
            'Multi-Modal Capabilities: Supports various media types for a richer support experience.',
            'On-Premise Deployment: Available for organizations requiring strict data control.'
        ],
        imageSrc: '/images/public-pages-ui.png'
    },
    {
        id: 3,
        title: 'DevOpsGPT',
        description: 'DevOpsGPT is a generative AI solution tailored for DevOps support environments. Trained on DevOps workflows, this platform offers instant troubleshooting for technical issues, ensuring quick responses and minimizing downtime. Ideal for open-source DevOps environments requiring agentic AI solutions.',
        features: [
            'DevOps-Specific Models: Fine-tuned for DevOps-related support queries.',
            'Instant Technical Issue Resolution: Quickly identifies and resolves technical issues.',
            'Agentic AI Troubleshooting: Contextual troubleshooting aligned with your organization’s technical setup.',
            'Integration with Open-Source Tools: Built to support open-source DevOps toolsets.'
        ],
        imageSrc: '/images/public-pages-ui.png'
    }
];


export default function ProductComparison() {
    return (
        <div className='container mx-auto px-4 py-8' data-aos='zoom-y-out' data-aos-delay={450}>
            {products.map((product, index) => (
                <div key={product.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items- md:items-start gap-6 items-start ${index !== 0 ? 'mt-52' : ''}`}>
                    <div className='w-full md:w-1/2'>
                        <Image src={product.imageSrc} alt={product.title} width={400} height={300} className='rounded-lg object-cover w-full h-auto' />
                    </div>
                    <div className='w-full md:w-1/2 p-10'>
                        <h2 className='text-2xl font-semibold mb-4'>{product.title}</h2>
                        <p className='text-gray-600 text-lg'>{product.description}</p>
                        {product.features && (
                            <ul className='mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400'>
                                {product.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className='flex items-center text-lg'>
                                        <svg className='mr-2 h-4 w-4 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
