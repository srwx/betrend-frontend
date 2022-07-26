import { useCallback, useEffect } from "react"
import { injected } from "src/contexts/Web3ContextProvider"
import useConnectWeb3React from "./useConnectWeb3React"

const useConnectWallet = () => {
  const { activate, account } = useConnectWeb3React()
  const handleConnectWallet = useCallback(() => {
    try {
      if (Boolean(localStorage.getItem("isConnect"))) {
        activate(injected)
        localStorage.setItem("isConnect", "true")
      } else {
        activate(injected)
        localStorage.setItem("isConnect", "true")
      }
    } catch (err) {
      console.log(err)
    }
  }, [activate])

  useEffect(() => {
    const keepWalletSession = () => {
      try {
        if (Boolean(localStorage.getItem("isConnect"))) {
          activate(injected)
        }
      } catch (err) {
        console.log(err)
      }
    }
    keepWalletSession()
  }, [activate])

  return [handleConnectWallet, account] as const
}

export default useConnectWallet
