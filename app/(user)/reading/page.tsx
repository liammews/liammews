import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import ReadList from "../../../components/reading/readList";
import ReadingList from "../../../components/reading/readingList";
import BackButton from "../../../components/backButton"

const query1 = groq`
    *[_type=='book'][finished==true] {
        ...,
    } | order(_createAt desc)
`

const query2 = groq`
    *[_type=='book'][finished==false] {
        ...,
    } | order(_createAt desc)
`

export default async function Reading() {

    const books = await client.fetch(query1);
    const unread = await client.fetch(query2);
    return(
        <div className="relative">
            <BackButton />
            <section className="mb-16">
            <h1 className="mb-12">Reading</h1>

                <div className="">
                 <p className="mb-6">I'm currently reading using the <a href="">Amazon Kindle Paperwhite</a> and read atleast 1 chapter per week day (usually at night, before I sleep).</p>
                
                <p className="mb-2 text-sm font-medium">2023 Reading Goal - 12 books</p>
                 <div className="grid h-3 grid-cols-12">
                    <div className="w-full h-full col-span-2 bg-green-300 rounded-l-full"></div>
                    <div className="w-full h-full col-span-10 rounded-r-full bg-neutral-200 dark:bg-neutral-700"></div>
                 </div>
                </div>
            </section>

            <section className="mb-28">
            <h3 className="mb-8">Currently Reading</h3>

            <ReadingList books={unread} />
            </section>

            <section className="mb-28">
            <h3 className="mb-8">Read This Year</h3>

            <ReadList books={books} />
            </section>
        </div>
    )
}