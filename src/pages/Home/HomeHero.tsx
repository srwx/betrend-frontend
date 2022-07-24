import classNames from "classnames"
import { LearnMoreButton } from "component/Button/LearnmoreButton/LearnMoreButton"
import { StartButton } from "component/Button/StartButton/StartButton"
import Image from "next/image"
import React, { forwardRef, MutableRefObject } from "react"
import styled, { keyframes } from "styled-components"
import { HomeContainer } from "styles/index"

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: scale(85%);
  }
`

const scrollUp = keyframes`
  100% {
    transform: translateY(-6px);
  }
`

const scrollDown = keyframes`
  100%{
    transform: translateY(6px);
  }
`

const RotateWrapper1 = styled.div`
  position: absolute;
  top: 33.2%;
  left: 43.1%;
  /* transform-style: preserve-3d;
  transform: perspective(500px) rotateX(45deg); */
  animation: ${fadeOut} 4s linear infinite alternate;
`

const RotateWrapper2 = styled.div`
  position: absolute;
  top: 24.6%;
  left: 19%;
  animation: ${scrollUp} 3s linear infinite alternate;
`

const RotateWrapper3 = styled.div`
  position: absolute;
  top: 16.9%;
  left: 26.5%;
  animation: ${scrollDown} 3.5s linear infinite alternate;
`

const RotateWrapper4 = styled.div`
  position: absolute;
  top: 12.9%;
  left: 35.5%;
  animation: ${scrollUp} 4s linear infinite alternate;
`

export const HomeHero = forwardRef<HTMLDivElement>((_, ref) => {
  const scrollToAllTopicsSection = () =>
    (ref as MutableRefObject<HTMLDivElement>).current.scrollIntoView({
      behavior: "smooth",
    })

  return (
    <HomeContainer>
      <div
        className={classNames("px-[2.5rem] py-[4rem] flex items-center w-full")}
      >
        <div className="flex-[0.5] space-y-10">
          <article className={classNames("text-white space-y-6")}>
            <h1 className={classNames("text-5xl font-semibold")}>
              The Easiest Way to
              <br />
              Drive in Trend with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A6C7] to-[#20FDA5] font-semibold">
                DAO
              </span>
            </h1>
            <p className="text-[#F0F2F2]">
              100 % transparency. Secure and annonymouse transactions.
              <br />
              Stay up to date with exciting news while driving ideas with
              <br />
              The power of Decentralized Autonomous Organization.
            </p>
          </article>
          <div className="flex gap-6">
            <StartButton onClick={scrollToAllTopicsSection} />
            <LearnMoreButton />
          </div>
        </div>
        <div className="flex-[0.5] relative">
          <Image
            src="/images/hero/bg.png"
            alt="temp"
            width="3267"
            height="2630"
          />
          <div className="absolute top-[53%] left-[8%] animate-[floatingUp_3.2s_linear_infinite_alternate]">
            <Image
              src="/images/hero/diamond.png"
              alt="eth"
              width="21"
              height="42"
            />
          </div>
          <div className="absolute top-[58%] left-[19.2%] animate-[floatingDown_3s_linear_infinite_alternate]">
            <Image
              src="/images/hero/diamond.png"
              alt="eth"
              width="21"
              height="42"
            />
          </div>
          <div className="absolute top-[69%] left-[30.3%] animate-[floatingUp_3.2s_linear_infinite_alternate]">
            <Image
              src="/images/hero/diamond.png"
              alt="eth"
              width="21"
              height="42"
            />
          </div>
          <div className="absolute top-[57.3%] right-[19.5%] animate-[floatingUp_3.2s_linear_infinite_alternate]">
            <Image
              src="/images/hero/chart1.png"
              alt="eth"
              width="38"
              height="58"
            />
          </div>
          <div className="absolute top-[57%] right-[15.8%] animate-[floatingUp_3.2s_linear_infinite_alternate]">
            <Image
              src="/images/hero/chart2.png"
              alt="eth"
              width="36"
              height="50"
            />
          </div>
          <div className="absolute top-[55%] right-[12.4%] animate-[floatingUp2_3.2s_linear_infinite_alternate]">
            <Image
              src="/images/hero/chart2.png"
              alt="eth"
              width="36"
              height="50"
            />
          </div>
          <RotateWrapper1>
            <Image
              src="/images/hero/circle1.png"
              alt="eth"
              width="77"
              height="57"
            />
          </RotateWrapper1>
          <RotateWrapper2>
            <Image
              src="/images/hero/circle2.png"
              alt="eth"
              width="27"
              height="47"
            />
          </RotateWrapper2>
          <RotateWrapper3>
            <Image
              src="/images/hero/circle3.png"
              alt="eth"
              width="37"
              height="61"
            />
          </RotateWrapper3>
          <RotateWrapper4>
            <Image
              src="/images/hero/circle4.png"
              alt="eth"
              width="27"
              height="47"
            />
          </RotateWrapper4>
        </div>
      </div>
    </HomeContainer>
  )
})

HomeHero.displayName = "HomeHero"
