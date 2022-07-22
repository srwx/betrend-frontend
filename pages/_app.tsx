import "styles/global.css"
import type { AppProps } from "next/app"
import { Header } from "component/Header/Header"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
