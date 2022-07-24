import ChoiceButton from "component/Button/ChoiceButton"

interface IQuestionSectionProps {
  sampleChoice: string[]
}

const QuestionSection = ({ sampleChoice }: IQuestionSectionProps) => {
  return (
    <>
      <div className="text-white font-bold text-3xl relative z-10">
        What do you think the price of Bitcoin will be in 2030?
      </div>
      <div className="my-8">
        {sampleChoice.map((eachChoice) => (
          <ChoiceButton key={eachChoice} title={eachChoice} isSelect />
        ))}
      </div>
    </>
  )
}

export default QuestionSection
