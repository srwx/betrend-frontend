import { Active, Bet, Closed, Vote } from "component/Status/Status"
import React from "react"
import { TopicProps } from "./Topic.type"

export const DetailSection = ({ props }: { props: TopicProps }) => {
  const {
    address,
    bgBigUrl,
    title,
    description,
    isVote,
    isActive,
    deadline,
    prize,
  } = props
  return (
    <div className="w-full flex justify-between">
      <span className="text-white">{title}</span>
      <div className="flex gap-4">
        {isVote ? <Vote /> : <Bet />}
        {isActive ? <Active /> : <Closed />}
      </div>
    </div>
  )
}
