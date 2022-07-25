import Image from "next/image"
import React from "react"

export const ScrollToVoteButton = ({ text }: { text: string }) => {
  return (
    <div className="w-full h-[3.9rem] bg-[#8A3BF0] rounded-lg flex items-center">
      <Image
        src="/images/icons/vote.svg"
        alt="icon"
        width="28px"
        height="28px"
      />
      <span>{text}</span>
    </div>
  )
}
