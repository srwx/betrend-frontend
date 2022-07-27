import classNames from "classnames"
import Image from "next/image"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background: rgba(138, 59, 240, 0.3);
  border: 0.818939px solid #8a3bf0;
  width: 10.1rem;
  height: 2.3rem;
  border-radius: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  transition-property: background;
  transition-duration: 500ms;

  :hover {
    background: #8a3bf0;
  }
`
interface IWalletButtonProps {
  onClick: () => void
}

export const WalletButton = ({ onClick }: IWalletButtonProps) => {
  return (
    <Container onClick={onClick}>
      <Image
        src="/images/icons/wallet.png"
        alt="wallet icon"
        width="20"
        height="20"
      />
      <div className={classNames("text-sm font-medium tracking-[0.04em]")}>
        Connect Wallet
      </div>
    </Container>
  )
}
