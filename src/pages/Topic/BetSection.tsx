import classNames from "classnames"
import ChoiceButton from "component/Button/ChoiceButton"
import VoteButton from "component/Button/VoteButton.tsx"
import Modal from "component/Modal"
import QuestionSection, {
  QuestionTitle,
} from "component/QuestionSection/QuestionSection"
import { ITopicMode } from "component/QuestionSection/QuestionSection.type"
import Image from "next/image"
import { useState, useCallback } from "react"
import { SectionStatus } from "./VoteSection"

interface IBetSectionProps {
  sampleChoice: string[]
  canBet?: boolean
  sectionStatus?: SectionStatus
}

const BetSection = ({
  sampleChoice,
  canBet = true,
  sectionStatus = SectionStatus.INPROGRESS,
}: IBetSectionProps) => {
  const [selectChoice, setSelectChoice] = useState<string>("")
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const handleOnSelect = useCallback((selectChoice: string) => {
    setSelectChoice(selectChoice)
  }, [])

  return (
    <>
      {sectionStatus === SectionStatus.INPROGRESS && (
        <QuestionSection
          sampleChoice={sampleChoice}
          mode={ITopicMode.BET}
          selectChoice={selectChoice}
          handleOnSelect={handleOnSelect}
          disabledChoice={!canBet}
          choiceVote={""}
        />
      )}
      {sectionStatus === SectionStatus.INPROGRESS && canBet && (
        <VoteButton>
          <div
            className={classNames(
              "flex justify-center items-center flex-row gap-x-2"
            )}
            onClick={() => {
              setModalOpen(true)
            }}
          >
            <div className={classNames("text-white text-xl font-bold ")}>
              Bet
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
      {sectionStatus === SectionStatus.FINISH && (
        <>
          <QuestionTitle
            title="What do you think the price of Bitcoin will be in 2030?"
            amount="0.000250"
          />
          <div className="my-8">
            {sampleChoice.map((eachChoice) => (
              <ChoiceButton
                key={eachChoice}
                title={eachChoice}
                disabled
                isSelect={selectChoice === eachChoice}
                isVote={selectChoice === eachChoice}
              />
            ))}
          </div>
        </>
      )}
      {modalOpen && (
        <Modal
          onClose={() => {
            setModalOpen(false)
          }}
        />
      )}
    </>
  )
}

export default BetSection
