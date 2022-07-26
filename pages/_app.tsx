import "styles/global.css"
import type { AppProps } from "next/app"
import { Header } from "component/Header/Header"
import { Footer } from "component/Footer/Footer"
import Web3ContextProvider from "src/contexts/Web3ContextProvider"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Web3ContextProvider>
        <Header />
        <Component {...pageProps} />
        {/* TODO: Footer */}
        {/* <Footer /> */}
      </Web3ContextProvider>
    </>
  )
}

export default MyApp
