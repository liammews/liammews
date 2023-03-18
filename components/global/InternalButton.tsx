import Button from "./Button";
import ClientSideRoute from "../ClientSideRoute";


function ExternalButton({ link, label }: { link: string; label: string; }) {
  return (
    <ClientSideRoute route={link}>
      <Button label={label} />
    </ClientSideRoute>
  )
}

export default ExternalButton
