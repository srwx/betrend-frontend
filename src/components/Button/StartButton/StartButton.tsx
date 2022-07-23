import classNames from "classnames"
import Image from "next/image"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 12rem;
  height: 3rem;
  border-radius: 0.5rem;
  background: #8a3bf0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  cursor: pointer;

  :hover {
    background: linear-gradient(
      81.88deg,
      #8a3bf0 34.96%,
      #6274f3 71.34%,
      #3ea7f6 98.63%,
      #00fffb 124.1%
    );
  }
`
export const StartButton = () => {
  return (
    <Container>
      <span className="text-white font-semibold text-lg tracking-wider">
        Get Started
      </span>
      <Image src="/images/icons/arrow.png" alt="arrow" width="15" height="12" />
    </Container>
  )
}
