import { Header } from "component/Header/Header"
import type { NextPage } from "next"
import { HomeHero } from "pages/Home/HomeHero"
import { HomeContainer } from "styles/index"

const Home: NextPage = () => {
  return (
    <>
      <HomeHero />
    </>
  )
}

export default Home
