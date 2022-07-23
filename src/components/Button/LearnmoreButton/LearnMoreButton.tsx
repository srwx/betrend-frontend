import Image from "next/image"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 12rem;
  height: 3rem;
  border: 1px solid white;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
  color: white;

  :hover {
    background: rgba(255, 255, 255, 0.3);
  }
`

export const LearnMoreButton = () => {
  return (
    <Container>
      <span className="text-white font-semibold text-lg tracking-wider">
        Learn more
      </span>
      <Image src="/icons/newtab.png" alt="icon" width="18" height="18" />
    </Container>
  )
}
