import { ScrollToVoteButton } from "component/Button/ScrollToVoteButton/ScrollToVoteButton"
import { Active, Bet, Closed, Vote } from "component/Status/Status"
import Image from "next/image"
import React from "react"
import { TopicProps } from "./Topic.type"

const Information = ({
  mainText,
  secondaryText,
}: {
  mainText: string
  secondaryText: string
}) => {
  return (
    <div className="w-full space-y-5">
      <article className="flex justify-between text-white text-xl font-light">
        <span className="font-semibold">{mainText}</span>
        <span>{secondaryText}</span>
      </article>
      <div className="w-full h-[0.05rem] bg-white opacity-40" />
    </div>
  )
}

interface information {
  mainText: string
  secondaryText: string
}

export const DetailSection = ({ topic }: { topic: TopicProps }) => {
  const {
    bgBigUrl,
    title,
    description,
    isVote,
    isBet,
    isActive,
    timeStartBet,
    timeStartVote,
    timeEndBet,
    timeEndVote,
  } = topic
  const informationLists: information[] = [
    {
      mainText: "Voting System",
      secondaryText: "Single Choice Voting",
    },
    {
      mainText: "Start Date",
      secondaryText: isVote ? timeStartVote : timeStartBet,
    },
    {
      mainText: "End Date",
      secondaryText: isVote ? timeEndVote : timeEndBet,
    },
  ]
  return (
    <div className="w-full flex flex-col pt-16 space-y-12 pb-14">
      {/* Header section */}
      <div className="w-full flex justify-between items-center">
        <span className="text-white font-semibold text-4xl">{title}</span>
        <div className="flex gap-4">
          {isVote ? <Vote /> : <Bet />}
          {isActive ? <Active /> : <Closed />}
        </div>
      </div>
      {/* Content section */}
      <div className="w-full flex justify-between">
        {/* Left section */}
        <div className="flex-[0.47] rounded-2xl overflow-hidden relative h-[40rem]">
          <Image
            src={bgBigUrl}
            alt="bg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        {/* Right section */}
        <div className="flex-[0.47] flex flex-col justify-center gap-16">
          {/* Description */}
          <span className="text-white text-xl font-light flex">
            &emsp;&emsp;{description}
          </span>
          {/* Information (Date) */}
          <div className="space-y-6">
            {informationLists.map((information) => (
              <Information
                key={information.mainText}
                mainText={information.mainText}
                secondaryText={information.secondaryText}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
