import React, { useCallback, useEffect, useMemo, useState } from "react"
import allTopics from "src/pages/Home/utils/getAllTopics.json"
import styled from "styled-components"
import { DetailSection } from "pages/Topic/DetailSection"
import { TopicProps } from "pages/Topic/Topic.type"
import { SectionStatus } from "pages/Topic/VoteSection"
import VoteSection from "pages/Topic/VoteSection"
import { GetServerSidePropsContext } from "next"
import { BigNumber } from "ethers"
import useConnectWeb3React from "src/hooks/useConnectWeb3React"
import { IVoteDataInterface, voteService } from "src/services/VoteService"
import { HardCodeContractAddress } from "src/constants/const"

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
  height: 40rem;
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

const SecondSection = styled(FirstSection)` d
  top: 5rem;
  flex-direction: column;
  padding-bottom: 10rem;
`

const sampleChoice = [
  "Lower than 100,000$",
  "Between 100,000$ - 500,000$",
  "Between 500,000$ - 1,000,000$",
  "Higher than 1,000,000$",
]

const sectionStatusMapping = (
  utcTime: BigNumber,
  startTime: BigNumber,
  endTime: BigNumber
) => {
  if (utcTime < startTime) {
    return SectionStatus.UNAVAILABLE
  }
  if (startTime <= utcTime && utcTime <= endTime) {
    return SectionStatus.INPROGRESS
  }
  if (utcTime > endTime) {
    return SectionStatus.FINISH
  }
  return SectionStatus.UNAVAILABLE
}

export default function Topic({ topic }: { topic: TopicProps }) {
  const { account, library } = useConnectWeb3React()
  const [voteData, setVoteData] = useState<IVoteDataInterface>({
    choices: [],
    voteStartAt: BigNumber.from(1),
    voteEndAt: BigNumber.from(1),
    questionName: "",
  })
  const [voteStatus, setVoteStatus] = useState<boolean>(false)
  const [choiceVote, setChoiceVote] = useState<string>("")
  const [change, setChange] = useState<boolean>(false)
  const sectionStatus: SectionStatus = useMemo(() => {
    const utcNowtime = BigNumber.from(new Date().getTime())
    return sectionStatusMapping(
      utcNowtime,
      voteData.voteStartAt,
      voteData.voteEndAt
    )
  }, [voteData.voteStartAt, voteData.voteEndAt])

  const toggleChange = useCallback(() => {
    setChange((prevState) => !prevState)
  }, [])

  useEffect(() => {
    const fetchVoteStatus = async () => {
      if (!account || !library) {
        setVoteStatus(false)
        return
      }
      const voteChoice = await voteService.getUserVoteStatus(
        HardCodeContractAddress,
        account,
        library
      )
      setVoteStatus(voteChoice !== "")
      setChoiceVote(voteChoice)
    }
    fetchVoteStatus()
  }, [account, change, library])

  useEffect(() => {
    const fetchInitialData = async () => {
      if (!library) {
        return
      }
      const result = await voteService.fetchInitialData(
        library,
        HardCodeContractAddress
      )
      if (result) {
        setVoteData(result)
      }
    }
    fetchInitialData()
  }, [library])

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
          <div className="w-full pt-[6rem]">
            <VoteSection
              questionName={voteData.questionName}
              sampleChoice={voteData.choices}
              sectionStatus={sectionStatus}
              canVote={!voteStatus}
              toggleChange={toggleChange}
              choiceSelect={choiceVote}
            />
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
  return {
    props: {
      topic,
    },
  }
}
