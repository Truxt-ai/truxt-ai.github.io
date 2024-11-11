import PageIllustration from '@/components/page-illustration';

export default function HeroHome() {
    return (
        <section className='relative'>
            <PageIllustration />
            <div className='mx-auto max-w-6xl px-4 sm:px-6'>
                <div className='pb-6 pt-32 md:pb-20 md:pt-40'>
                    <div className='pb-12 text-center md:pb-16'>
                        <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
                            <span className='block xl:inline'>Discover Our</span> <span className='block text-primary xl:inline'>AI-Powered Solutions</span>
                        </h1>
                        <div className='mx-auto max-w-3xl'>
                            <p className='mb-8 text-lg text-gray-700' data-aos='zoom-y-out' data-aos-delay={300}>
                                Revolutionize your operations with cutting-edge AI technology. Explore our products designed to enhance efficiency and drive innovation.{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
