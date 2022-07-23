import classNames from "classnames"
import React from "react"
import styled from "styled-components"

export const Vote = () => {
  return (
    <div
      className={classNames(
        "w-[4.5rem] h-[2rem]", // base
        "rounded-lg flex justify-center items-center",
        "bg-gradient-to-r from-[#5834F8] to-[#0FAEFF]"
      )}
    >
      <div className="rounded-lg w-[95%] h-[90%] bg-[#0B0013] flex justify-center items-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5834F8] to-[#0FAEFF] font-semibold">
          Vote
        </span>
      </div>
    </div>
  )
}

export const Bet = () => {
  return (
    <div
      className={classNames(
        "w-[3.8rem] h-[2rem]", // base
        "rounded-lg flex justify-center items-center",
        "bg-gradient-to-r from-[#5834F8] to-[#0FAEFF]"
      )}
    >
      <div className="rounded-lg w-[95%] h-[90%] bg-[#0B0013] flex justify-center items-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5834F8] to-[#0FAEFF] font-semibold">
          Bet
        </span>
      </div>
    </div>
  )
}

export const Active = () => {
  return (
    <div
      className={classNames(
        "w-[5.3rem] h-[2rem]", // base
        "rounded-lg flex justify-center items-center",
        "bg-gradient-to-r from-[#00A6C7] to-[#20FDA5]"
      )}
    >
      <div className="rounded-lg w-[95%] h-[90%] bg-[#0B0013] flex justify-center items-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A6C7] to-[#20FDA5] font-semibold">
          Active
        </span>
      </div>
    </div>
  )
}

export const Closed = () => {
  return (
    <div
      className={classNames(
        "w-[5.5rem] h-[2rem]", // base
        "rounded-lg flex justify-center items-center",
        "bg-gradient-to-r from-[#D4145A] to-[#FBB030]"
      )}
    >
      <div className="rounded-lg w-[95%] h-[90%] bg-[#0B0013] flex justify-center items-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4145A] to-[#FBB030] font-semibold">
          Closed
        </span>
      </div>
    </div>
  )
}
