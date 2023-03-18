import Button from "./Button";


function ExternalButton({ link, label }: { link: string; label: string; }) {
  return (
    <a href={link} className="no-underline">
      <Button label={label} />
    </a>
  )
}

export default ExternalButton
