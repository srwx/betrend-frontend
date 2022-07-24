import React, { useState } from "react"
import allTopics from "src/pages/Home/utils/getAllTopics.json"
import styled from "styled-components"
import { DetailSection } from "pages/Topic/DetailSection"
import { useRouter } from "next/router"
import { TopicProps } from "pages/Topic/Topic.type"
import BetSection from "pages/Topic/BetSection"
import VoteSection from "pages/Topic/VoteSection"
import { GetServerSidePropsContext } from "next"

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

const SectionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FirstSection = styled.div`
  width: 100%;
  padding: 0 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1314px;
  z-index: 10;
`

const SecondSection = styled(FirstSection)`
  position: absolute;
  top: 5rem;
`

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

export default function Topic({ topic }: { topic: TopicProps }) {
  const [topicStatus, setTopicStatus] = useState<ITopicStatus>(
    ITopicStatus.VOTE
  )
  return (
    <Container>
      <SectionContainer>
        <FirstSection>
          <DetailSection topic={topic} />
        </FirstSection>
      </SectionContainer>
      <SectionContainer>
        <BgImage src="/images/allTopics/bg.png" alt="bg" />
        <SecondSection>
          <div className="w-full">
            {topicStatus === ITopicStatus.VOTE && (
              <VoteSection sampleChoice={sampleChoice} />
            )}
            {topicStatus === ITopicStatus.BET && (
              <BetSection sampleChoice={sampleChoice} />
            )}
          </div>
        </SecondSection>
      </SectionContainer>
    </Container>
  )
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { address } = context.query
  const topic = allTopics.data.find((topic) => topic.address === address)
  console.log(topic)
  return {
    props: {
      topic,
    },
  }
}
