import PageIllustration from '@/components/page-illustration';

export default function HeroHome() {
    return (
        <section className='relative'>
            <PageIllustration />
            <div className='mx-auto max-w-6xl px-4 sm:px-6'>
                <div className='pb-6 pt-32 md:pb-20 md:pt-40'>
                    <div className='pb-12 text-center md:pb-16'>
                        <h1 className='mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl' data-aos='zoom-y-out' data-aos-delay={150}>
                        Create your Personalized Sandbox
                        </h1>
                        <div className='mx-auto max-w-3xl'>
                            <p className='mb-8 text-lg text-gray-700' data-aos='zoom-y-out' data-aos-delay={300}>
                            Ready to experience your supercharged documents? Set up your sandbox, your dedicated space, in just two easy steps to start experiencing the difference.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
