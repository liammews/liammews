

function Button({ label }: { label: string; }) {
  return (
    <button className="flex text-[13px] flex-row px-[16px] py-[8px] rounded bg-black text-white hover-scale">
      <p>
        {label}
      </p>
    </button>
  )
}

export default Button
