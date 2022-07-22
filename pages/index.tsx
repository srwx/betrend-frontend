import { Header } from "component/Header/Header"
import type { NextPage } from "next"
import { HomeHero } from "pages/Home/HomeHero"

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HomeHero />
    </>
  )
}

export default Home
