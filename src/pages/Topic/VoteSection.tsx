import classNames from "classnames"
import VoteButton from "component/Button/VoteButton.tsx"
import QuestionSection from "component/QuestionSection/QuestionSection"
import Image from "next/image"

interface IVoteProps {
  sampleChoice: string[]
}

const Vote = ({ sampleChoice }: IVoteProps) => {
  return (
    <>
      <QuestionSection sampleChoice={sampleChoice} />
      <VoteButton>
        <div
          className={classNames(
            "flex justify-center items-center flex-row gap-x-2"
          )}
        >
          <div className={classNames("text-white text-xl font-bold")}>Vote</div>
          <Image
            src="/images/icons/vote.svg"
            alt="vote Icon"
            width="24px"
            height="24px"
          />
        </div>
      </VoteButton>
    </>
  )
}

export default Vote
