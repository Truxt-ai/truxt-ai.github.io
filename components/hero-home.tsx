import PageIllustration from '@/components/page-illustration';
import BoardingSteps from './boarding-steps';

export default function HeroHome() {
    return (
        <section className='relative'>
            <PageIllustration />
            <div className='mx-auto max-w-6xl px-4 sm:px-6'>
                <div className='pb-6 pt-32 md:pb-20 md:pt-40'>
                    <div className='pb-12 text-center md:pb-16'>
                        <h1 className='mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl' data-aos='zoom-y-out' data-aos-delay={150}>
                            Empower Customer Support with <br className='max-lg:hidden' />
                            Generative AI
                        </h1>
                        <div className='mx-auto max-w-3xl'>
                            <p className='mb-8 text-lg text-gray-700' data-aos='zoom-y-out' data-aos-delay={300}>
                                Supercharge/Transform your knowledge base into a GenAI-powered support engine for faster issue resolution.{' '}
                            </p>
                            <div className='relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]'>
                                <div className='relative mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-2' data-aos='zoom-y-out' data-aos-delay={450}>
                                    <input type='email' placeholder='Business Email' className='w-1/2 rounded-lg' />
                                    <a className='btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto' href='/playground'>
                                        <span className='relative inline-flex items-center'>Create my playground</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto max-w-3xl rounded-xl' data-aos='zoom-y-out' data-aos-delay={600}>
                        <BoardingSteps />
                    </div>
                </div>
            </div>
        </section>
    );
}
