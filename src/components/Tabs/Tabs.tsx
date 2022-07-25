import classNames from "classnames"
import { ITopicMode } from "component/QuestionSection/QuestionSection.type"

interface ITabsProps {
  handleTopicChange: (mode: ITopicMode) => void
  mode: ITopicMode
}

const Tabs = ({ handleTopicChange, mode }: ITabsProps) => {
  return (
    <div className="flex flex-row justify-start items-center w-full my-12">
      <button
        onClick={() => handleTopicChange(ITopicMode.VOTE)}
        className={classNames(
          "flex-1 py-3 font-bold text-center w-full border rounded-l-[10px] transition-[background-color] duration-500",
          {
            "text-[rgba(126,137,145,1)] bg-inherit border-[#7E8991] ":
              mode === ITopicMode.BET,
            "text-white bg-[rgba(138,59,240,0.4)] border-[#8A3BF0]":
              mode === ITopicMode.VOTE,
          }
        )}
      >
        Vote
      </button>
      <button
        onClick={() => handleTopicChange(ITopicMode.BET)}
        className={classNames(
          "flex-1 py-3 font-bold text-center w-full rounded-r-[10px] border transition-[background-color] duration-500",
          {
            "text-[rgba(126,137,145,1)] bg-inherit border-[#7E8991]":
              mode === ITopicMode.VOTE,
            "text-white bg-[rgba(138,59,240,0.4)] border-[#8A3BF0]":
              mode === ITopicMode.BET,
          }
        )}
      >
        Squeeze
      </button>
    </div>
  )
}

export default Tabs
