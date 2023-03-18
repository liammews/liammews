import Button from "./Button";


function ExternalButton({ link, label }: { link: string; label: string; }) {
  return (
    <a href={link} className="no-underline" target="_blank">
      <Button label={label} />
    </a>
  )
}

export default ExternalButton
