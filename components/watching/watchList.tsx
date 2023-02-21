import Image from "next/image";
import urlFor from "../../lib/urlFor";
import ClientSideRoute from "../ClientSideRoute";
import Star from "../icons/star";

type Props = {
    movies: Movie[];
};

function WatchList({ movies }: Props) {
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
        {movies.map(movie => (
          <ClientSideRoute route={movie.link}>
                <div key={movie._id} className="flex flex-col items-center space-y-4 rounded-xl hover-scale hover:text-text dark:hover:text-dark-text">

                    <div className="w-32 shrink-0 h-48 border-[1px] border-stroke dark:border-stroke rounded-md overflow-hidden">
                        <Image
                        className="object-cover w-full h-48"
                        src={urlFor(movie.cover).url()}
                        alt={movie.title}
                        height="340"
                        width="340"
                        />
                    </div>

                    <div className="flex flex-col items-center justify-end w-full text-sm">
                        <p className="text-center">{movie.title}</p>

                        <div className="flex flex-row justify-center items-center space-x-0.5 text-xs">
                                <div className="w-5 h-5 text-neutral-400">
                                <Star />
                                </div>
                            <p className="pt-0.5 text-neutral-600">{movie.rating}/10</p>
                            </div>
                    </div>
            </div>
         </ClientSideRoute>
        ))}
    </div>
    )
}

export default WatchList