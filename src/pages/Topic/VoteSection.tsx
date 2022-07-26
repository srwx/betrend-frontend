import classNames from "classnames"
import ChoiceButton from "component/Button/ChoiceButton"
import VoteButton from "component/Button/VoteButton.tsx"
import QuestionSection, {
  QuestionTitle,
} from "component/QuestionSection/QuestionSection"
import { ITopicMode } from "component/QuestionSection/QuestionSection.type"
import Image from "next/image"
import { HardCodeContractAddress } from "src/constants/const"
import { useCallback, useEffect, useMemo, useState } from "react"
import useConnectWeb3React from "src/hooks/useConnectWeb3React"
import { voteService } from "src/services/VoteService"
import styled from "styled-components"
interface IVoteProps {
  sampleChoice: string[]
  canVote?: boolean
  sectionStatus?: SectionStatus
  choiceSelect: string
  questionName: string
  toggleChange: () => void
}

export enum SectionStatus {
  UNAVAILABLE = "UNAVAILABLE",
  INPROGRESS = "INPROGRESS",
  SUCCESS = "SUCCESS",
  FINISH = "FINISH",
}

const BarChart = styled.div<{ width: number; winner: boolean }>`
  position: absolute;
  width: ${(props) => `${props.width}%`};
  border-radius: 8px 0px 0px 8px;
  padding-top: 31px;
  padding-bottom: 28px;
  left: 0px;
  bottom: 0px;
  background: ${(props) =>
    `${
      props.winner
        ? " linear-gradient(81.88deg, #00A6C7 -50.55%, #20FDA5 124.1%);"
        : "rgba(137,137,137,0.4)"
    }`};
`

const sampleChoice = [
  "Lower than 100,000$",
  "Between 100,000$ - 500,000$",
  "Between 500,000$ - 1,000,000$",
  "Higher than 1,000,000$",
]

const mockData: { title: string; numberOfVote: number }[] = sampleChoice.map(
  (data: string, index: number) => {
    return { title: data, numberOfVote: (index + 1) * 10 }
  }
)
const sumVoteData = mockData.reduce(
  (prevValue, data) => prevValue + data.numberOfVote,
  0
)

const VoteSection = ({
  sampleChoice,
  canVote = true,
  sectionStatus = SectionStatus.FINISH,
  choiceSelect,
  questionName,
  toggleChange,
}: IVoteProps) => {
  const { account, library } = useConnectWeb3React()
  const [selectChoice, setSelectChoice] = useState<string>("")
  const [finalResultData, setFinalResultData] = useState<
    { title: string; numberOfVote: number }[]
  >([])
  const handleOnSelect = useCallback((selectChoice: string) => {
    setSelectChoice(selectChoice)
  }, [])

  const handleOnVote = useCallback(async () => {
    if (account && library) {
      const choiceId = sampleChoice.findIndex(
        (choiceName) => choiceName === selectChoice
      )
      if (choiceId !== 0 && !choiceId) {
        return
      }
      console.log("pass-this!")
      await voteService.vote(
        account,
        HardCodeContractAddress,
        library,
        choiceId
      )
      toggleChange()
    }
  }, [account, library, selectChoice, sampleChoice, toggleChange])

  useEffect(() => {
    setSelectChoice(choiceSelect)
  }, [choiceSelect])

  useEffect(() => {
    const fetchVoteResult = async () => {
      if (!library) {
        return
      }
      if (sectionStatus === SectionStatus.FINISH) {
        const response = await voteService.fetchVoteData(
          library,
          HardCodeContractAddress,
          sampleChoice.length
        )
        if (response && response.length > 0) {
          setFinalResultData(response)
        }
      }
    }
    fetchVoteResult()
  }, [library, sampleChoice.length, sectionStatus])

  const [sumVoteData, maxScore, winner] = useMemo(() => {
    const _sumVoteData = finalResultData.reduce(
      (prevValue, data) => prevValue + data.numberOfVote,
      0
    )
    const _maxScore = Math.max(
      ...finalResultData.map((data) => {
        return data.numberOfVote
      })
    )

    const _winner = finalResultData.find((data) => {
      return data.numberOfVote === _maxScore
    })
    return [_sumVoteData, _maxScore, _winner] as const
  }, [finalResultData])

  return (
    <>
      {sectionStatus === SectionStatus.INPROGRESS && (
        <QuestionSection
          sampleChoice={sampleChoice}
          mode={ITopicMode.VOTE}
          selectChoice={selectChoice}
          handleOnSelect={handleOnSelect}
          disabledChoice={!canVote}
          choiceVote={choiceSelect}
          questionName={questionName}
        />
      )}
      {sectionStatus === SectionStatus.INPROGRESS && canVote && (
        <VoteButton>
          <div
            className={classNames(
              "flex justify-center items-center flex-row gap-x-2"
            )}
            onClick={handleOnVote}
          >
            <div className={classNames("text-white text-xl font-bold")}>
              Vote
            </div>
            <Image
              src="/images/icons/vote.svg"
              alt="vote Icon"
              width="24px"
              height="24px"
            />
          </div>
        </VoteButton>
      )}
      {sectionStatus === SectionStatus.SUCCESS && (
        <>
          <div className="text-white font-bold text-3xl relative z-10">
            {questionName}
          </div>
          <div className="my-8">
            {sampleChoice.map((eachChoice) => (
              <ChoiceButton
                key={eachChoice}
                title={eachChoice}
                isSelect={eachChoice === selectChoice}
                isVote
                disabled
              />
            ))}
          </div>
        </>
      )}

      {sectionStatus === SectionStatus.FINISH && (
        <div className="w-full">
          <div className="text-white font-bold text-3xl relative z-10">
            Results
          </div>

          <div className="w-full border border-[rgba(255,255,255,0.4)] my-8"></div>
          <div className="text-white font-bold text-2xl relative z-10 mb-8">
            {questionName}
          </div>
          {finalResultData.map((data) => {
            return (
              <div
                key={data.title}
                className="flex flex-col justify-center items-start"
              >
                <div className="flex justify-start items-center w-full">
                  <div
                    className={classNames(
                      "w-full border h-[60px] px-4 mx-4 my-4 rounded-[10px] relative flex justify-between items-center"
                    )}
                  >
                    <div className="flex flex-row gap-x-4 relative z-50">
                      <div className="text-white font-bold text-xl flex flex-row gap-x-4">
                        {data.title}
                      </div>
                      <div className="text-white font-bold text-xl flex flex-row gap-x-4">
                        {((data.numberOfVote * 100) / sumVoteData).toFixed(3)} %
                      </div>
                    </div>
                    {winner?.title === data.title && (
                      <div className="flex h-full justify-center items-center">
                        <Image
                          src="/images/icons/checked.svg"
                          width="20px"
                          height="20px"
                          alt="checked"
                        />
                      </div>
                    )}

                    {/*<div className="absolute w-[50%] bg-gray-500 left-0 bottom-0 py-[27px] rounded-[10px]"></div>*/}
                    <BarChart
                      width={(data.numberOfVote * 95) / sumVoteData}
                      winner={data.numberOfVote === maxScore}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default VoteSection
