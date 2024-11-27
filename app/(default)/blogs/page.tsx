import PageIllustration from '@/components/page-illustration';
import PostItem from '@/components/post-item';
import { getAllBlogs } from '@/lib/api/blogs/api';

export const metadata = {
    title: "Blogs",
    description: "Stay updated with Truxt.ai blogs. Explore insights, case studies, and AI trends shaping the future of enterprise automation and customer experience.",
  };

export default async function Page() {
    const allBlogs = await getAllBlogs();
    return (
        <section className='relative'>
            <PageIllustration />
            <div className='mx-auto max-w-6xl px-4 sm:px-6'>
                <div className='mx-auto max-w-3xl pb-12 pt-32 md:pb-20 md:pt-40'>
                    <div className='pb-16'>
                        <h1 className='mb-4 text-5xl font-bold'>The Truxt blog</h1>
                        <p className='text-lg text-gray-700'>Content for developers, product, and digital experts.</p>
                    </div>
                    <div className='space-y-10 border-l [border-image:linear-gradient(to_bottom,theme(colors.slate.200),theme(colors.slate.300),transparent)1]'>
                        {allBlogs.map((post) => (
                            <PostItem key={post.id} {...post} k />
                        ))}
                    </div>

                    <div className='mt-12 text-center'>
                        <button className='btn-sm min-w-[220px] bg-gray-800 py-1.5 text-gray-200 shadow hover:bg-gray-900'>
                            Load more <span className='ml-2 tracking-normal text-gray-500'>↓</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
