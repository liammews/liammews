import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import WatchList from "../../../components/watching/watchList"
import BackButton from "../../../components/backButton"

const query = groq`
    *[_type=='movie'] | order(_createdAt desc) {
        ...,
    }
`

export default async function Watching() {

    const movies = await client.fetch(query);
    return(
        <div className="relative">
            <BackButton />

            <section className="mb-16">
            <h1 className="mb-12">Watching</h1>

            <WatchList movies={movies} />
            </section>
        </div>
    )
}