import classNames from "classnames"
import ChoiceButton from "component/Button/ChoiceButton"
import VoteButton from "component/Button/VoteButton.tsx"
import QuestionSection, {
  QuestionTitle,
} from "component/QuestionSection/QuestionSection"
import { ITopicMode } from "component/QuestionSection/QuestionSection.type"
import Image from "next/image"
import { useCallback, useState } from "react"
import styled from "styled-components"
import { SectionStatus } from "./BetSection"

interface IVoteProps {
  sampleChoice: string[]
  canVote?: boolean
  sectionStatus?: SectionStatus
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
  (data: string) => {
    return { title: data, numberOfVote: Math.random() * 100 }
  }
)
const sumMockData = mockData.reduce(
  (prevValue, data) => prevValue + data.numberOfVote,
  0
)

const maxScore = Math.max(
  ...mockData.map((data) => {
    return data.numberOfVote
  })
)

const winner = mockData.find((data) => {
  return data.numberOfVote === maxScore
})

const VoteSection = ({
  sampleChoice,
  canVote = true,
  sectionStatus = SectionStatus.FINISH,
}: IVoteProps) => {
  const [selectChoice, setSelectChoice] = useState<string>("")
  const handleOnSelect = useCallback((selectChoice: string) => {
    setSelectChoice(selectChoice)
  }, [])
  return (
    <>
      {sectionStatus === SectionStatus.INPROGRESS && (
        <QuestionSection
          sampleChoice={sampleChoice}
          mode={ITopicMode.VOTE}
          selectChoice={selectChoice}
          handleOnSelect={handleOnSelect}
        />
      )}
      {sectionStatus === SectionStatus.INPROGRESS && canVote && (
        <VoteButton>
          <div
            className={classNames(
              "flex justify-center items-center flex-row gap-x-2"
            )}
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
            What do you think the price of Bitcoin will be in 2030?
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
            What do you think the price of Bitcoin will be in 2030?
          </div>
          {mockData.map((data) => {
            return (
              <div
                key={data.title}
                className="flex flex-col justify-center items-start"
              >
                <div className="text-white font-bold text-xl">{data.title}</div>
                <div className="flex justify-start items-center w-full">
                  <div
                    className={classNames(
                      "w-full border h-[60px] px-4 mx-4 my-4 rounded-[10px] relative flex justify-end items-center"
                    )}
                  >
                    {winner?.title !== selectChoice && (
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
                      width={(data.numberOfVote * 100) / sumMockData}
                      winner={data.numberOfVote === maxScore}
                    />
                  </div>
                  <div
                    className={classNames(
                      "text-start text-white font-bold w-[100px]",
                      {}
                    )}
                  >
                    {((data.numberOfVote * 100) / sumMockData).toFixed(3)} %
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
