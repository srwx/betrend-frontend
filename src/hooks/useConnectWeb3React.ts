import { useWeb3React } from "@web3-react/core"
import { Web3Provider } from "@ethersproject/providers"

const useConnectWeb3React = () => {
  const data = useWeb3React<Web3Provider>()
  return data
}

export default useConnectWeb3React
