import classNames from "classnames"
import VoteButton from "component/Button/VoteButton.tsx"
import { ChangeEvent, ChangeEventHandler, useRef, useState } from "react"
import { useClickAway } from "react-use"
import Image from "next/image"
import Input from "component/Input"

interface IModalProps {
  isOpen?: boolean
  onClose: () => void
}

const Modal = ({ onClose }: IModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const [inputAmount, setInputAmount] = useState<string>("")
  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault()
    setInputAmount(event.target.value)
  }
  useClickAway(modalRef, () => {
    onClose()
  })
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[rgba(22,27,29,0.75)] z-50">
      <div
        className="border-2 rounded-[10px] border-white w-[40%] bg-[rgba(255,255,255,0.2)] backdrop-blur-[48px] flex flex-col justify-start items-center p-12"
        ref={modalRef}
        style={{
          boxShadow: "0px 3.34566px 35.1295px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div className="text-white text-3xl font-bold">Squeeze</div>
        <div
          className={classNames(
            "border-[#20FDA5] border-2 rounded-[10px] my-8 w-full py-4 mx-8 px-8 flex justify-between items-center"
          )}
        >
          <div className="bg-clip-text text-lg text-transparent font-bold bg-gradient-to-r from-[#00A6C7] to-[#20FDA5] text-gradient-to-r">
            Squeeze amount:
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <Image
              src="/images/icons/token.svg"
              alt="BTR Token"
              width="24px"
              height="24px"
            />
            <Input
              className="bg-inherit border-2 rounded-[10px] focus:outline-none text-white w-[150px] px-2 py-1"
              onChange={handleOnChange}
            />
            <div className="text-lg text-white"> BTR</div>
          </div>
        </div>
        <VoteButton
          className="border-0 mt-8"
          disabled={isNaN(parseFloat(inputAmount))}
          onClick={onClose}
        >
          <div className="text-xl text-white font-bold">Confirm Squeeze</div>
        </VoteButton>
      </div>
    </div>
  )
}

export default Modal
