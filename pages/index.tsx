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
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BgImage = styled.img`
  width: 100vw;
  height: 50rem;
  z-index: 1;
`

const Home: NextPage = () => {
  return (
    <Container>
      <HomeHero />
      <div className="relative flex flex-col items-center">
        <BgImage src="/images/allTopics/bg.png" alt="bg" />
        <AllTopics />
      </div>
    </Container>
  )
}

export default Home
