import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import AppList from "../../../components/software/appList";
import BackButton from "../../../components/backButton"
import SEO from "../../../components/global/SEO";

const query = groq`
    *[_type=='app'] {
        ...,
    } | order(_createdAt desc)
`

export default async function Software() {

    const apps = await client.fetch(query);
    return(
        <div className="relative">
            <SEO title="Software" description="The software I use." link="software" />
            <BackButton />
            <section className="mb-16">
            <h1 className="mb-12">My Software Stack</h1>

                <div className="">
                 <p className="">This is the software that I currently use to create, consume and manage my business and my life. For the hardware I use, visit <a href="/workspace">My Workspace</a> page.</p>
                </div>
            </section>

            <section className="mb-28">
            <AppList apps={apps} />
            </section>
        </div>
    )
}