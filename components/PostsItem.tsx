
import ClientSideRoute from "./ClientSideRoute";


function DynamicPostItem({ title, slug, description}) {
    return (
        <div>
                <ClientSideRoute key={title} route={`${slug}`}>
                    <div className="flex flex-row justify-between py-6 rounded-md md:p-4 hover:bg-foreground dark:hover:bg-dark-foreground">
                        <div className="flex space-x-2">
                            <div>
                                <p className="text-text dark:text-dark-text">{title}</p>
                            </div>

                                    <div className="">
                                        <p className="text-muted dark:text-dark-muted">{description}</p>
                                    </div>
                        </div>

                        <div className="flex space-x-2">
                            <div>
                            <p className="text-muted dark:text-dark-muted">
                                2023
                            </p>
                            </div>
                        </div>

                    </div>
            </ClientSideRoute>
        </div>
    )
}

export default DynamicPostItem