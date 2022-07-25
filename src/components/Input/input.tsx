import classNames from "classnames"
import { DetailedHTMLProps, InputHTMLAttributes } from "react"

interface IInputProps
  extends Pick<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "onChange" | "className" | "placeholder"
  > {}

const Input = ({ className, ...restProps }: IInputProps) => {
  return <input className={classNames("flex-1", className)} {...restProps} />
}

export default Input
