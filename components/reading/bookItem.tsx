
import ClientSideRoute from "../ClientSideRoute";
import Image from "next/image";
import Star from "../icons/star";
import urlFor from "../../lib/urlFor";


function BookItem({ title, link, author, rating, cover}: { title: string; link: string; author: number; rating: number; cover: string; }) {
    return (
        <div>
                <ClientSideRoute key={title} route={link}>
                    <div className="flex flex-row space-x-4">

                        <div className="w-32 shrink-0 h-48 border-[1px] border-neutral-100 rounded-md overflow-hidden">
                            <Image
                            className="object-cover w-full h-48"
                            src={urlFor(cover).url()}
                            alt={title}
                            height="340"
                            width="340"
                            />
                        </div>

                        <div className="flex flex-col justify-end text-sm">
                            <p>{title}</p>
                            <p className="mb-2 text-muted dark:text-muted">{author}</p>

                            <div className="flex flex-row items-center space-x-0.5">
                                <div className="w-5 h-5 text-muted dark:text-muted">
                                <Star />
                                </div>
                            <p className="text-muted dark:text-muted">{rating}/10</p>
                            </div>
                        </div>


                    </div>  
                </ClientSideRoute>
        </div>
    )
}

export default BookItem