import Image from "next/image";
import urlFor from "../../lib/urlFor";
import ExternalButton from "../global/ExternalButton";


type Props = {
  books: Book[];
};

function ReadingList({ books }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-16">
      {books.map(book => (
        <div key={book._id} className="flex flex-col items-center p-6 space-y-4 bg-foreground dark:bg-dark-foreground border-[1px] border-stroke dark:border-dark-stroke rounded-xl hover-scale">

          <div className="w-32 shrink-0 h-48 border-[1px] border-stroke rounded-md overflow-hidden">
            <Image
              className="object-cover w-full h-48"
              src={urlFor(book.cover).url()}
              alt={book.title}
              height="128"
              width="128"
            />
          </div>

          <div className="flex flex-col items-center justify-end w-full text-sm">
            <p className="font-medium text-center">{book.title}</p>
            <p className="mb-6 text-center text-muted dark:text-dark-muted">{book.author}</p>

            <ExternalButton link={book.link} label="Buy on Amazon" />
          </div>


        </div>
      ))}
    </div>
  )
}

export default ReadingList
