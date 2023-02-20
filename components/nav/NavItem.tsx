import ClientSideRoute from "../ClientSideRoute";


function NavItem({ link, label }) {
    return (
        <ClientSideRoute route={link}>
        <div className='h-[40px] px-6 flex justify-center items-center rounded bg-neutral-100'>
          <p>{label}</p>
        </div>
        </ClientSideRoute>
    )
}

export default NavItem