import classNames from "classnames"
import { WalletButton } from "component/WalletButton/WalletButton"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background: linear-gradient(
    81.88deg,
    #352489 -14.13%,
    #0b0013 53.72%,
    #7a2d7a 124.1%
  );
  height: 4rem;
  padding: 0 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Header = () => {
  return (
    <Container>
      <div
        className={classNames("text-lg text-white font-semibold tracking-wide")}
      >
        BeTrend
      </div>
      <div
        className={classNames(
          "w-[80%] text-sm text-white font-light",
          "flex justify-end items-center gap-8"
        )}
      >
        <div>Category</div>
        <div>Ranking</div>
        <div>More</div>
        <WalletButton />
      </div>
    </Container>
  )
}
