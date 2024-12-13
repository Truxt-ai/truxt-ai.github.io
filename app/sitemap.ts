import { getAllBlogs } from '@/lib/api/blogs/api';
import { MetadataRoute } from 'next';
const baseUrl = 'https://truxt.ai';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const allBlogs = await getAllBlogs();
    const blogsLinks: MetadataRoute.Sitemap = await allBlogs.map((item, index) => ({
        url: `${baseUrl}/blogs/${item.slug}`
    }));
    return [
        {
            url: `${baseUrl}/`
        },
        {
            url: `${baseUrl}/truxt-gen-ai`
        },
        {
            url: `${baseUrl}/solutions`
        },
        {
            url: `${baseUrl}/sandbox`
        },
        {
            url: `${baseUrl}/products`
        },
        {
            url: `${baseUrl}/devops-gpt`
        },
        {
            url: `${baseUrl}/contact-us`
        },
        {
            url: `${baseUrl}/faq`
        },
        {
            url: `${baseUrl}/blogs`
        },
        ...blogsLinks
    ];
}
