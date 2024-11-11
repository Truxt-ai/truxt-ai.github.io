import PageIllustration from '@/components/page-illustration';

export default function HeroHome() {
    return (
        <section className='relative'>
            <PageIllustration />
            <div className='mx-auto max-w-6xl px-4 sm:px-6'>
                <div className='pb-6 pt-32 md:pb-20 md:pt-40'>
                    <div className='pb-12 text-center md:pb-16'>
                        <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
                            <span className='block xl:inline'>Experience our </span> <span className='block text-primary xl:inline'>AI-Powered Products</span>
                        </h1>
                        <div className='mx-auto max-w-3xl'>
                            <p className='mb-8 mt-2 text-lg text-gray-700' data-aos='zoom-y-out' data-aos-delay={300}>
                                Transform your Support requirements with our cutting-edge AI technology, our products are designed to bring greater accuracy, security and cost efficiencies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
