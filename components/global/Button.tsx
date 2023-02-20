
import ClientSideRoute from "../ClientSideRoute";


function ExternalButton({ link, label} : { link: string; label: string; }) {
    return (
        <ClientSideRoute route={link}>
        <button className="flex items-center justify-center w-full px-8 py-3 space-x-1 text-xs no-underline rounded-lg bg-foreground dark:bg-dark-background border-[1px] border-stroke dark:border-dark-stroke hover:text-text dark:hover-text-dark-text hover:shadow smooth300">  
            <p>
                {label}
            </p>
        </button>
        </ClientSideRoute>
    )
}

export default ExternalButton