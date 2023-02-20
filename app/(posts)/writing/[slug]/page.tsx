import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../lib/urlFor";
import Link from "next/link";
import ClientSideRoute from "../../../../components/ClientSideRoute";
import { PortableText } from "@portabletext/react";
import BackButton from "../../../../components/backButton"

type Props = {
    params: {
        slug: string;
    };
};

async function Post({ params: { slug } }: Props) {
    const query = groq`
        *[_type=='post' && slug.current == $slug] [0]
        {
            ...,
            author->,
            categories[]->
        }
    `

    const post: Post = await client.fetch(query, { slug });

    return (
        <div className="relative">
        <BackButton />
        <article className="relative flex space-x-16">
            <section className="space-y-8">

                <div className="flex flex-col space-y-2">
                <h1>
                    {post.title}
                </h1>

                <div className="flex items-center space-x-2 text-muted dark:text-dark-muted">
                            <p className="">
                                {new Date(post._createdAt).toLocaleDateString
                                ("en-GB", {
                                    day: "numeric",
                                    month: "numeric",
                                    year: "numeric",
                                })}
                            </p>

                 </div>
                </div>

                <div className="custom-prose prose-a:text-muted dark:prose-a:text-dark-muted">
                <PortableText value={post.body} />
                </div>
            </section>
        </article>

        </div>
    )
}

export default Post