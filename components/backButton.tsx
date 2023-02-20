import ClientSideRoute from "./ClientSideRoute";


function DynamicPostItem({ title, slug, description}) {
    return (
        <div>
        <aside className="absolute hidden md:flex -left-36">
        <ClientSideRoute route="/">
            <p className="text-sm text-muted dark:text-dark-muted">← Back</p>
        </ClientSideRoute>
        </aside>

        <ClientSideRoute route="/">
        <div className="fixed top-0 left-0 px-3 py-4 right-0 z-50 flex w-full md:hidden bg-foreground dark:bg-dark-foreground border-b-[1px] border-stoke dark:border-stroke">
    

            <div className="">
                <p className="text-sm text-muted dark:text-dark-muted">← Back</p>
            </div>            

        
        </div>
        </ClientSideRoute>
        </div>
    )
}

export default DynamicPostItem