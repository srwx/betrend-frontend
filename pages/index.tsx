import { Header } from "component/Header/Header"
import type { NextPage } from "next"
import { HomeHero } from "pages/Home/HomeHero"
import { HomeContainer } from "styles/index"
import styled from "styled-components"
import { AllTopics } from "pages/Home/AllTopics"

const Container = styled.div`
  background: linear-gradient(
    81.88deg,
    #352489 -14.13%,
    #0b0013 53.72%,
    #7a2d7a 124.1%
  );
`

const Home: NextPage = () => {
  return (
    <Container>
      <HomeHero />
      <AllTopics />
    </Container>
  )
}

export default Home
