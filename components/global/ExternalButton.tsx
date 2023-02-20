
import ClientSideRoute from "../ClientSideRoute";
import UpRight from "../icons/upRight";


function ExternalButton({ link, label}) {
    return (
        <ClientSideRoute route={link}>
        <button className="flex items-center justify-center w-full px-8 py-3 space-x-1 text-xs no-underline rounded-lg bg-foreground dark:bg-dark-background border-[1px] border-stroke dark:border-dark-stroke hover:shadow smooth300 hover:text-text dark:hover:text-dark-text">
            
            <p >
                {label}
            </p>

            <div className="w-3 h-3">
            <UpRight />
            </div>
        </button>
        </ClientSideRoute>
    )
}

export default ExternalButton