import { MetadataRoute } from "next";
const baseUrl = "https://truxt.ai";

export default async function sitemap():Promise<MetadataRoute.Sitemap>{
        return[
            {
                url:`${baseUrl}/`,
            },
            {
                url:`${baseUrl}/truxt-gen-ai`
            },
            {
                url:`${baseUrl}/solutions`
            },
            {
                url:`${baseUrl}/sandbox`
            },
            {
                url:`${baseUrl}/products`
            },
            {
                url:`${baseUrl}/devops-gpt`
            },
            {
                url:`${baseUrl}/contact-us`
            }
        ]
}