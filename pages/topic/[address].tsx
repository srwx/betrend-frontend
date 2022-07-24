import React, { useState } from "react"
import allTopics from "src/pages/Home/utils/getAllTopics.json"
import styled from "styled-components"
import Image from "next/image"
import ChoiceButton from "component/Button/ChoiceButton"
import VoteButton from "component/Button/VoteButton.tsx"

const Container = styled.div`
  background: linear-gradient(
    81.88deg,
    #352489 -14.13%,
    #0b0013 53.72%,
    #7a2d7a 124.1%
  );
  box-shadow: 0px 3.34566px 35.1295px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(48.2156px);
  width: 100%;
  min-height: 100vh;
`
const BgImage = styled.img`
  width: 100vw;
  height: 50rem;
  z-index: 1;
  position: absolute;
  top: 0px;
`
import voteIcon from "../../public/images/icons/vote.svg"
import classNames from "classnames"
import QuestionSection from "component/QuestionSection/QuestionSection"
import Vote from "pages/Topic/VoteSection"
import BetSection from "pages/Topic/BetSection"
import VoteSection from "pages/Topic/VoteSection"

enum ITopicStatus {
  VOTE = "VOTE",
  BET = "BET",
  END = "END",
}

const sampleChoice = [
  "Lower than 100,000$",
  "Between 100,000$ - 500,000$",
  "Between 500,000$ - 1,000,000$",
  "Higher than 1,000,000$",
]

const Topic = () => {
  const [topicStatus, setTopicStatus] = useState<ITopicStatus>(ITopicStatus.BET)
  return (
    <Container>
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <div className="h-[400px]">P. Wong Part</div>
      <div className="min-w-full relative flex flex-col justify-center items-center pb-24">
        <BgImage src="/images/allTopics/bg.png" alt="bg" />
        <div
          className="py-12 px-[60px] w-full flex flex-col justify-center items-start max-w-[1314px]"
          style={{ zIndex: 10 }}
        >
          <div className="py-12 px-10 w-full">
            {topicStatus === ITopicStatus.VOTE && (
              <VoteSection sampleChoice={sampleChoice} />
            )}
            {topicStatus === ITopicStatus.BET && (
              <BetSection sampleChoice={sampleChoice} />
            )}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Topic
