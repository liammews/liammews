import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import WatchList from "../../../components/watching/watchList"
import BackButton from "../../../components/backButton"
import SEO from "../../../components/global/SEO";

const query = groq`
    *[_type=='movie'] | order(_createdAt desc) {
        ...,
    }
`

export default async function Watching() {

    const movies = await client.fetch(query);
    return(
        <div className="relative">
            <SEO title="Watching" description="What I've been watching." link="watching" />
            <BackButton />

            <section className="mb-16">
            <h1 className="mb-12">Watching</h1>

            <WatchList movies={movies} />
            </section>
        </div>
    )
}