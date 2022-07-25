import classNames from "classnames"
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"

type VoteButtonTypes = "onClick" | "disabled" | "className"

interface IVoteButtonProps
  extends Pick<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    VoteButtonTypes
  > {
  children?: ReactNode
}

const VoteButton = ({
  className,
  children,
  ...restProps
}: IVoteButtonProps) => {
  return (
    <button
      className={classNames(
        "w-full my-3 border border-[#B58DC1] rounded-[10px] bg-[#8A3BF0] py-4",
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  )
}
export default VoteButton
