import classNames from "classnames"
import React from "react"
import styled from "styled-components"

const VoteContainer = styled.div`
  width: 5.5rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;

  ::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 1.5px; /* border size */
    border-radius: 10px;
    background: linear-gradient(to right, #5834f8, #0faeff);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

export const Vote = () => {
  return (
    <VoteContainer>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5834F8] to-[#0FAEFF] font-semibold">
        Vote
      </span>
    </VoteContainer>
  )
}

export const Bet = () => {
  return (
    <VoteContainer>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5834F8] to-[#0FAEFF] font-semibold">
        Squeeze
      </span>
    </VoteContainer>
  )
}

const ActiveContainer = styled.div`
  width: 5.5rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;

  ::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 1.5px; /* border size */
    border-radius: 10px;
    background: linear-gradient(to right, #00a6c7, #20fda5);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

export const Active = () => {
  return (
    <ActiveContainer>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A6C7] to-[#20FDA5] font-semibold">
        Active
      </span>
    </ActiveContainer>
  )
}

const ClosedContainer = styled.div`
  width: 5.5rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;

  ::before {
    content: "";
    position: absolute;
    z-index: -1;
    inset: 0;
    padding: 1.5px; /* border size */
    border-radius: 10px;
    background: linear-gradient(to right, #d4145a, #fbb030);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`

export const Closed = () => {
  return (
    <ClosedContainer>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4145A] to-[#FBB030] font-semibold">
        Closed
      </span>
    </ClosedContainer>
  )
}
