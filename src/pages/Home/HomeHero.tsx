import classNames from "classnames"
import { LearnMoreButton } from "component/Button/LearnmoreButton/LearnMoreButton"
import { StartButton } from "component/Button/StartButton/StartButton"
import Image from "next/image"
import React, { forwardRef, MutableRefObject } from "react"
import styled from "styled-components"
import { HomeContainer } from "styles/index"

export const HomeHero = forwardRef<HTMLDivElement>((_, ref) => {
  const scrollToAllTopicsSection = () =>
    (ref as MutableRefObject<HTMLDivElement>).current.scrollIntoView({
      behavior: "smooth",
    })

  return (
    <HomeContainer>
      <div
        className={classNames(
          "px-[2.5rem] py-[4rem] flex items-center gap-x-20 w-full"
        )}
      >
        <div className="flex-[0.55] space-y-10">
          <article className={classNames("text-white space-y-6")}>
            <h1 className={classNames("text-4xl font-semibold")}>
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
        <div className="flex-[0.45]">
          <Image
            src="/gray-rectangle.png"
            alt="temp"
            width="590"
            height="480"
          />
        </div>
      </div>
    </HomeContainer>
  )
})

HomeHero.displayName = "HomeHero"
