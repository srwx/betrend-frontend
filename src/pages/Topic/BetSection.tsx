import classNames from "classnames"
import VoteButton from "component/Button/VoteButton.tsx"
import QuestionSection from "component/QuestionSection/QuestionSection"
import Image from "next/image"

interface IBetSectionProps {
  sampleChoice: string[]
}

const BetSection = ({ sampleChoice }: IBetSectionProps) => {
  return (
    <>
      <QuestionSection sampleChoice={sampleChoice} />
      <div className="flex justify-start items-center w-full gap-x-6">
        <div
          className={classNames(
            "flex-1 border-[#20FDA5] border-2 rounded-[10px] py-4 px-6 flex justify-between items-center"
          )}
        >
          <div className="bg-clip-text text-lg text-transparent font-bold bg-gradient-to-r from-[#00A6C7] to-[#20FDA5] text-gradient-to-r">
            Amount:
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <Image
              src="/images/icons/token.svg"
              alt="BTR Token"
              width="24px"
              height="24px"
            />
            <div className="text-lg text-white">0 BTR</div>
          </div>
        </div>
        <VoteButton className="flex-1">
          <div
            className={classNames(
              "flex justify-center items-center flex-row gap-x-2"
            )}
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
      </div>
    </>
  )
}

export default BetSection
