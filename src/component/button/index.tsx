import clsx from "clsx"

type ButtonProps = {
  active?: boolean
  disabled?: boolean
  secondary?: boolean
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Button({
  //   active,
  secondary,
  disabled,
  children,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "flex justify-center item-center min-h-[36px] h-[36px] rounded-full border gap-2 text-center py-1.5 px-6 lg:py-2 lg:px-8 font-black italic items-center text-sm md:text-base uppercase transition-all border-primary hover:border-primary md:h-[40px]",
        secondary
          ? "bg-primary-black text-primary-white"
          : "bg-primary text-primary-black",
        !disabled &&
          !secondary &&
          "hover:bg-[#C79B12] hover:!border-[#C79B12] hover:text-primary-black",
        !disabled &&
          secondary &&
          "hover:bg-primary-black, hover:!border-[#FFE8AB]",
        disabled && "opacity-40 cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  )
}
