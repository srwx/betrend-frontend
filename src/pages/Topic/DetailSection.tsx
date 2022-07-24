import { Active, Bet, Closed, Vote } from "component/Status/Status"
import React from "react"
import { TopicProps } from "./Topic.type"

export const DetailSection = ({ topic }: { topic: TopicProps }) => {
  console.log(topic)
  return (
    <div className="w-full flex justify-between">
      <span className="text-white">{topic.address}</span>
      <div className="flex gap-4">
        {topic.isVote ? <Vote /> : <Bet />}
        {topic.isActive ? <Active /> : <Closed />}
      </div>
    </div>
  )
}
