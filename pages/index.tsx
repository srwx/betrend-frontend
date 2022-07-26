import { Header } from "component/Header/Header"
import type { NextPage } from "next"
import { HomeHero } from "pages/Home/HomeHero"
import { HomeContainer } from "styles/index"
import styled from "styled-components"
import { AllTopics } from "pages/Home/AllTopics"
import { SortTopics } from "pages/Home/SortTopics"
import { Faq } from "pages/Home/Faq"
import { useRef } from "react"
import Image from "next/image"
import PopularTopics from "pages/Home/PopularTopics"

export const Container = styled.div`
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
  z-index: 1;
`

const Home: NextPage = () => {
  const allTopicsRef = useRef<HTMLDivElement>(null)
  return (
    <Container>
      <HomeHero ref={allTopicsRef} />
      {/* allTopics section */}
      <div className="relative flex justify-center items-center">
        <BgImage src="/images/allOrganization/bg.png" alt="bg" />
        <AllTopics ref={allTopicsRef} />
      </div>
      {/* If don't have this div, screen is error */}
      <div className="h-[70rem]" />
      {/* <PopularTopics />
      <SortTopics /> */}
      {/* TODO: FAQ's section */}
      {/* <div className="relative flex flex-col items-center pt-32">
        <BgImage height="50rem" src="/images/faq-bg.png" alt="bg" />
        <Faq />
      </div> */}
    </Container>
  )
}

export default Home
