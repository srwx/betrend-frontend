import classNames from "classnames"
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"
import CheckIcon from "../../../../public/images/icons/checked.svg"
import Image from "next/image"

type ChoiceButtonTypes = "onClick" | "disabled" | "className"

interface IChoiceButtonProps
  extends Pick<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    ChoiceButtonTypes
  > {
  title: string
  isSelect: boolean
  isVote?: boolean
}

const ChoiceButton = ({
  title,
  isSelect,
  className,
  isVote = false,
  ...restProps
}: IChoiceButtonProps) => {
  return (
    <button
      className={classNames(
        "w-full my-3 border rounded-[10px] relative transition-[border-color] duration-300",
        {
          "border-[#20FDA5]": isSelect,
          "border-[#B58DC1]": !isSelect,
        },
        className
      )}
      {...restProps}
    >
      <div
        className={classNames("text-center text-lg py-4 relative", {
          "bg-clip-text text-transparent text-bold bg-gradient-to-r from-[#00A6C7] to-[#20FDA5] text-gradient-to-r":
            isSelect,
          "text-[rgba(181,189,193,1)]": !isSelect,
        })}
      >
        {title}
      </div>
      {isVote && (
        <div
          className={classNames(
            "absolute right-6 bottom-0 h-full flex justify-center items-center"
          )}
        >
          <Image src={CheckIcon} width="24px" height="24px" alt="checked" />
        </div>
      )}
    </button>
  )
}
export default ChoiceButton
