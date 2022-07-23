import { Header } from "component/Header/Header"
import type { NextPage } from "next"
import { HomeHero } from "pages/Home/HomeHero"
import { HomeContainer } from "styles/index"
import styled from "styled-components"
import { AllTopics } from "pages/Home/AllTopics"
import { SortTopics } from "pages/Home/SortTopics"
import { Faq } from "pages/Home/Faq"

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

interface BgImageProps {
  height: string
}

const BgImage = styled.img<BgImageProps>`
  width: 100vw;
  height: ${(props) => props.height};
  z-index: 1;
`

const Home: NextPage = () => {
  return (
    <Container>
      <HomeHero />
      <div className="relative flex flex-col items-center">
        <BgImage height="52rem" src="/images/allTopics/bg.png" alt="bg" />
        <AllTopics />
      </div>
      <SortTopics />
      {/* TODO: FAQ's section */}
      {/* <div className="relative flex flex-col items-center pt-32">
        <BgImage height="50rem" src="/images/faq-bg.png" alt="bg" />
        <Faq />
      </div> */}
    </Container>
  )
}

export default Home
