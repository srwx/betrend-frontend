import classNames from "classnames"
import { WalletButton } from "component/Button/WalletButton/WalletButton"
import React from "react"
import styled from "styled-components"
import useConnectWallet from "src/hooks/useConnectWallet"
import Link from "next/link"

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
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  border-bottom: 0.001rem solid gray;
`

export const Header = () => {
  const [handleConnectWallet, account] = useConnectWallet()

  return (
    <Container>
      <Link href="/">
        <div
          className={classNames(
            "text-lg text-white font-semibold tracking-wide cursor-pointer"
          )}
        >
          Squeeze
        </div>
      </Link>

      <div
        className={classNames(
          "w-[80%] text-sm text-white font-light",
          "flex justify-end items-center gap-8"
        )}
      >
        {account ? (
          <div>{account}</div>
        ) : (
          <WalletButton onClick={handleConnectWallet} />
        )}
      </div>
    </Container>
  )
}
