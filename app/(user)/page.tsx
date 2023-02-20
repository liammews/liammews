import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";
import DynamicPosts from "../../components/DynamicPosts";
import Image from "next/image";
import Hire from "../../components/icons/hire";
import Email from "../../components/icons/email";
import Linkedin from "../../components/icons/linkedin";
import Twitter from "../../components/icons/twitter";

const query = groq`
    *[_type=='post'] {
        ...,
        author->,
        categories[]->
    } | order(_createAt desc)
`

export default async function Homepage() {
    if (previewData()){
        return (<PreviewSuspense fallback={
            <div role="status">
                <p>
                    Loading Preview Data...
                </p>
            </div>
        }>
        <PreviewBlogList query={query} />
        </PreviewSuspense>);
    }

    const posts = await client.fetch(query);
    return(
        <div>
            <section className="mb-20">
                <h1 className="text-base">Liam Mews</h1>
                <h2 className="mb-8 text-base text-muted dark:text-dark-muted">Founder at Tenth Studio</h2>
                <p className="mb-6 prose text-text dark:text-dark-text">Hi I'm Liam, a designer and developer from Cambridgeshire, United Kingdom. I am the founder of Studio Tenth, my creative micro-studio helping brands and businesses elevate their online presence. When I'm not designing I'm usually watching Arsenal, playing golf, or taking photos.</p>

                <div className="flex flex-row flex-wrap text-muted dark:text-dark-muted">
                        <a href="https://studiotenth.com" className="flex flex-row items-center mb-4 mr-6 space-x-1 no-underline md:justify-center">
                        <div className="w-5 h-5">
                        <Hire />
                        </div>
                        <p className="shrink-0">Work with me</p>
                        </a>
                        
                        <a href="mailto:hi@liammews.com" className="flex flex-row items-center mb-4 mr-6 space-x-1 no-underline md:justify-center">
                        <div className="w-5 h-5">
                        <Email />
                        </div>
                        <p className="shrink-0">Email me</p>
                        </a>

                        <a href="https://www.linkedin.com/in/liam-mews-07806b110/" className="flex flex-row items-center mb-4 mr-6 space-x-1 no-underline md:justify-center">
                        <div className="w-5 h-5">
                        <Linkedin />
                        </div>
                        <p className="shrink-0">Linkedin</p>
                        </a>

                        <a href="https://twitter.com/liammews" className="flex flex-row items-center mb-4 mr-6 space-x-1 no-underline md:justify-center">
                        <div className="w-5 h-5">
                        <Twitter />
                        </div>
                        <p className="shrink-0">Twitter</p>
                        </a>
                </div>           
            </section>

            <section className="mb-20">
            <h2 className="mb-8 text-base">Explore</h2>

            <DynamicPosts />
            </section>

            <section className="mb-20">
            <h2 className="mb-8 text-base">Writing</h2>

            <BlogList posts={posts} />
            </section>
        </div>
    )
}