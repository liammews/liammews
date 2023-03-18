import { previewData } from "next/headers";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";
import DynamicPosts from "../../components/DynamicPosts";
import SEO from "../../components/global/SEO";
import WorkItem from "../../components/workItem";
const query = groq`
    *[_type=='post'] {
        ...,
        author->,
        categories[]->
    } | order(_createAt desc)
`

export default async function Homepage() {
  if (previewData()) {
    return (<PreviewSuspense fallback={
      <div role="status">
        <SEO title="Liam Mews" description="Designer, developer, founder of Studio Tenth." link="" />
        <p>
          Loading Preview Data...
        </p>
      </div>
    }>
      <PreviewBlogList query={query} />
    </PreviewSuspense>);
  }

  const posts = await client.fetch(query);
  return (
    <div>
      <SEO title="Liam Mews" description="Designer, developer, founder of Studio Tenth." link="" />
      <section className="mb-20">
        <Image
          className="object-cover w-full h-24 w-24 rounded-full mb-6"
          src="/headshot.webp"
          alt="Headshot of Liam Mews"
          height="340"
          width="340"
        />
        <h1 className="text-base">Liam Mews</h1>
        <h2 className="mb-8 text-base text-muted dark:text-dark-muted">Founder of <a href="https://www.studiotenth.com/">Tenth Studio</a></h2>
        <p className="mb-6 prose text-text dark:text-dark-text">I am a designer, developer, and founder of Studio Tenth, a creative micro-studio specialising in design, development and branding.</p>
      </section>

      <section className="mb-20">
        <h2 className="mb-8 text-base">Work</h2>

        <WorkItem title="Studio Tenth" link="https://www.studiotenth.com/" date="2023" description="My creative micro-studio" />

        <WorkItem title="Good Design Tools" link="https://www.gooddesign.tools/" date="2023" description="A collection of the best tools for designers" />

        <WorkItem title="Savills" link="https://www.savills.com/" date="2016 - 2022" description="Designer" />

      </section>

      <section className="mb-20">
        <h2 className="mb-8 text-base">Explore</h2>
        <DynamicPosts />
      </section>

      <section className="mb-20">
        <h2 className="mb-8 text-base">Connect</h2>

        <WorkItem title="Email" link="mailto:hi@liammews.com" date="hi@liammews.com" description="" />
        <WorkItem title="Twitter" link="https://www.twitter.com/liammews" date="@liammews" description="" />
        <WorkItem title="Linkedin" link="https://www.linkedin.com/in/liam-mews-07806b110/" date="Liam Mews" description="" />
        <WorkItem title="Read CV" link="https://read.cv/liammews" date="@liammews" description="" />
        <WorkItem title="Layers" link="https://layers.to/liammews" date="@liammews" description="" />

      </section>

      <section className="mb-20 hidden">
        <h2 className="mb-8 text-base">Writing</h2>

        <BlogList posts={posts} />
      </section>
    </div>
  )
}
