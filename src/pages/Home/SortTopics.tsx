import { TopicHorizontalCard } from "component/TopicHorizontalCard/TopicHorizontalCard"
import React from "react"
import { HomeContainer } from "styles/index"
import allTopics from "./utils/getAllTopics.json"

export const SortTopics = () => {
  return (
    <HomeContainer>
      <div className="px-[2.5rem] pb-48">
        <ul className="flex list-none text-2xl text-[#B5BDC1] mb-12">
          <li className="flex-[0.2]">Place</li>
          <li className="flex-[0.4]">Topics</li>
          <li className="flex-[0.25]">Prize</li>
          <li className="flex-[0.2]">Status</li>
        </ul>
        <div className="space-y-6">
          {allTopics.map((topic, i) => (
            <TopicHorizontalCard
              key={i}
              place={i + 1}
              topic={topic.title}
              prize={topic.prize}
              isActive={topic.isActive}
              isVote={topic.isVote}
            />
          ))}
        </div>
      </div>
    </HomeContainer>
  )
}
