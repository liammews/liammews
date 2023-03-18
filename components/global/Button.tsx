

function Button({ label }: { label: string; }) {
  return (
    <button className="flex text-[13px] flex-row px-[16px] py-[6px] text-white hover-scale button-styles">
      <p>
        {label}
      </p>
    </button>
  )
}

export default Button
