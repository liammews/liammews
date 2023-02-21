import ClientSideRoute from "../ClientSideRoute";
import urlFor from "../../lib/urlFor";
import Image from "next/image";

type Props = {
    apps: App[];
};

function AppList({ apps }: Props) {
    return (
        <div className="flex flex-col space-y-6">
            {apps.map(app => (
                <ClientSideRoute key={app._id} route={app.link}>
                    <div className="hover:text-text dark:hover:text-dark-text flex items-center h-full p-6 space-x-4 rounded-md bg-foreground dark:bg-dark-foreground dark:border-dark-stroke border-[1px] border-stroke hover-scale hover:text-black">
                        <div className="w-12 h-12 overflow-hidden border-[1px] shrink-0 border-stroke rounded-xl">
                        <Image
                            className="object-cover"
                            src={urlFor(app.icon).url()}
                            alt={app.name}
                            placeholder="blur"
                            height="48"
                            width="48"
                            />
                        </div>

                        <div className="hover:text-text dark:hover:text-dark-text">
                            <p className="-mb-1 font-medium hover:text-text dark:hover:text-dark-text">{app.name}</p>
                            <p className="text-muted dark:text-dark-muted">{app.description}</p>
                        </div>
                    </div>
            </ClientSideRoute>
            ))}
        </div>
    )
}

export default AppList