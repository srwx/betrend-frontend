import classNames from "classnames"
import ChoiceButton from "component/Button/ChoiceButton"
import { ITopicMode } from "./QuestionSection.type"
import Image from "next/image"

interface IQuestionSectionProps {
  sampleChoice: string[]
  mode: ITopicMode
  selectChoice: string
  handleOnSelect: (selectChoice: string) => void
  disabledChoice: boolean
  choiceVote: string
}

interface IQuestionTitleProps {
  title: string
  amount: string
}

export const QuestionTitle = ({ title, amount }: IQuestionTitleProps) => {
  return (
    <div className="flex flex-row justify-between items-start">
      <div className="text-white font-bold text-3xl relative z-10">{title}</div>
      <div className={classNames("flex flex-col justify-start items-start")}>
        <div className="bg-clip-text text-lg text-transparent font-bold bg-gradient-to-r from-[#00A6C7] to-[#20FDA5] text-gradient-to-r">
          My Squeeze Amount:
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <Image
            src="/images/icons/token.svg"
            alt="BTR Token"
            width="24px"
            height="24px"
          />
          <div className="text-lg text-white">{amount} BTR</div>
        </div>
      </div>
    </div>
  )
}

const QuestionSection = ({
  sampleChoice,
  mode,
  selectChoice,
  disabledChoice,
  choiceVote,
  handleOnSelect,
}: IQuestionSectionProps) => {
  return (
    <>
      {mode === ITopicMode.VOTE ? (
        <div className="text-white font-bold text-3xl relative z-10">
          What do you think the price of Bitcoin will be in 2030?
        </div>
      ) : (
        <QuestionTitle
          title="What do you think the price of Bitcoin will be in 2030?"
          amount="0"
        />
      )}
      <div className="my-8">
        {sampleChoice.map((eachChoice) => (
          <ChoiceButton
            key={eachChoice}
            title={eachChoice}
            isSelect={selectChoice === eachChoice}
            onClick={() => {
              handleOnSelect(eachChoice)
            }}
            isVote={choiceVote === eachChoice}
            disabled={disabledChoice}
          />
        ))}
      </div>
    </>
  )
}

export default QuestionSection
