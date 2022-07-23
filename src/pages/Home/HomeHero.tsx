import classNames from "classnames"
import { LearnMoreButton } from "component/Button/LearnmoreButton/LearnMoreButton"
import { StartButton } from "component/Button/StartButton/StartButton"
import Image from "next/image"
import React from "react"
import styled from "styled-components"
import { HomeContainer } from "styles/index"

const Container = styled.div`
  background: linear-gradient(
    81.88deg,
    #352489 -14.13%,
    #0b0013 53.72%,
    #7a2d7a 124.1%
  );
`
export const HomeHero = () => {
  return (
    <Container>
      <HomeContainer>
        <div
          className={classNames(
            "px-[2.5rem] py-[3.5rem] flex items-center gap-x-20"
          )}
        >
          <div className="flex-[0.55] space-y-10">
            <article className={classNames("text-white space-y-6")}>
              <h1 className={classNames("text-4xl font-semibold")}>
                Lorem ipsum dolor sit amet,
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </article>
            <div className="flex gap-6">
              <StartButton />
              <LearnMoreButton />
            </div>
          </div>
          <div className="flex-[0.45]">
            <Image
              src="/gray-rectangle.png"
              alt="temp"
              width="470"
              height="470"
            />
          </div>
        </div>
      </HomeContainer>
    </Container>
  )
}
