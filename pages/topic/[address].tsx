import { BigNumber } from "ethers"
import { GetServerSidePropsContext } from "next"
import { DetailSection } from "pages/Topic/DetailSection"
import { TopicProps } from "src/types/topic.type"
import VoteSection, { SectionStatus } from "pages/Topic/VoteSection"
import { useState, useMemo, useCallback, useEffect } from "react"
import { HardCodeContractAddress } from "src/constants/const"
import useConnectWeb3React from "src/hooks/useConnectWeb3React"
import { IVoteDataInterface, voteService } from "src/services/VoteService"
import styled from "styled-components"

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

const SecondSection = styled(FirstSection)`
  top: 5rem;
  flex-direction: column;
  padding-bottom: 10rem;
`

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

export default function Topic({ address }: { address: string }) {
  const [isLoading, setIsLoading] = useState(true)
  const [topic, setTopic] = useState<TopicProps>()

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
    const fetchTopic = async () => {
      setIsLoading(true)
      const res = await fetch(`${process.env.apiUrl}/api/topic/${address}`, {
        headers: { "ngrok-skip-browser-warning": "11" },
      })
      const resJson = await res.json()
      const data = resJson.data
      console.log(data)
      setTopic(data)
      setIsLoading(false)
    }
    fetchTopic()
  }, [address])

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
          {isLoading ? null : <DetailSection topic={topic as TopicProps} />}
        </FirstSection>
      </SectionContainer>
      <SectionContainer>
        <BgImage src="/images/allOrganization/bg.png" alt="bg" />
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
  return {
    props: {
      address,
    },
  }
}
