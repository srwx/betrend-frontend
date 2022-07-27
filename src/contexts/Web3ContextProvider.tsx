import { InjectedConnector } from "@web3-react/injected-connector"
import { ReactNode } from "react"
import Web3 from "web3"
import { Web3ReactProvider } from "@web3-react/core"
import { Web3Provider } from "@ethersproject/providers"

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 97, 56],
})

interface IWeb3ProviderProps {
  children?: ReactNode
}

const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

const Web3ContextProvider = ({ children }: IWeb3ProviderProps) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>{children}</Web3ReactProvider>
  )
}

export default Web3ContextProvider
