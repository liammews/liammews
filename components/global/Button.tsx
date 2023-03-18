

function Button({ label }: { label: string; }) {
  return (
    <button className="flex text-[13px] flex-row px-[16px] py-[8px] rounded bg-dark-background border-[0.5px] border-neutral-900/10 dark:border-neutral-100/10 text-white hover-scale">
      <p>
        {label}
      </p>
    </button>
  )
}

export default Button
