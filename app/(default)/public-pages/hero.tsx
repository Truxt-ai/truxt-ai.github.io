import PageIllustration from '@/components/page-illustration';

export default function Hero() {
    return (
        <section className='relative'>
            <PageIllustration />
            <div className='mx-auto max-w-6xl sm:px-6'>
                <div className='mx-auto max-w-3xl pt-32 md:pt-40'>
                    <div className='text-center'>
                        <h1 className='mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl'>Public Pages</h1>
                        <div className='mx-auto max-w-3xl'>
                            <p className='text-lg text-gray-700'>Public Pages offer a simplified, lightweight version of our software-as-a-service platform, allowing users to ask questions directly without needing authentication. It provides the quickest way to submit your queries. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
