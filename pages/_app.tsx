import "styles/global.css"
import type { AppProps } from "next/app"
import { Header } from "component/Header/Header"
import { Footer } from "component/Footer/Footer"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
