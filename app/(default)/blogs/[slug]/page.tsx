import PostNav from './post-nav';
import PageIllustration from '@/components/page-illustration';
import PostDate from '@/components/post-date';
import { getBlogBySlug } from '@/lib/api/blogs/api';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';


export async function generateMetadata({ params }: { params: { slug: string } }):Promise<Metadata>{
    const post = await getBlogBySlug(params.slug);
    return(
        {
            title:post.title,
            description:post.brief,
            alternates: {
                canonical: `/${post.slug}`
            }
        }
    )
}

export default async function SinglePost({ params }: { params: { slug: string } }) {
    const post = await getBlogBySlug(params.slug);
    if (!post) {
        notFound();
    }

    return (
        <section className='relative'>
            <PageIllustration />
            <div className='mx-auto max-w-6xl px-4 sm:px-6'>
                <div className='flex justify-between pb-12 pt-32 md:pb-20 md:pt-40'>
                    {/* Left content */}
                    <div className='max-w-3xl'>
                        <article>
                            {/* Section header */}
                            <header className='pb-8'>
                                <div className='mb-6'>
                                    <Link className='text-sm font-medium text-blue-500 transition-colors hover:text-blue-600' href='/blogs'>
                                        <span className='tracking-normal text-blue-300'>&lt;-</span> Back To Blogs
                                    </Link>
                                </div>
                                <h1 className='mb-5 text-5xl font-bold'>{post.title}</h1>
                                <div className='flex items-center gap-3'>
                                    <img className='rounded-full' src={post.author.profilePicture} width={32} height={32} alt={post.author.name} />
                                    <div className='text-sm text-gray-500'>
                                        {post.author.name}
                                        <span className='text-gray-700 ml-5'>
                                            <PostDate dateString={post.publishedAt} />
                                        </span>
                                    </div>
                                </div>
                            </header>
                            <div className="prose max-w-none text-gray-700 prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:text-gray-900 prose-a:font-medium prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-2 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:font-medium prose-blockquote:italic prose-blockquote:text-gray-900 prose-strong:font-medium prose-strong:text-gray-900 prose-code:rounded prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-gray-900 prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:border prose-pre:border-gray-700 prose-pre:bg-gray-900 prose-blockquote:xl:-ml-4">
                                <div dangerouslySetInnerHTML={{__html:post.content?.html || ''}}/>
                            </div>
                        </article>
                    </div>
                    {/* Right sidebar */}
                    <PostNav />
                </div>
            </div>
        </section>
    );
}
