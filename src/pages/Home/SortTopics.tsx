import { TopicHorizontalCard } from "component/TopicHorizontalCard/TopicHorizontalCard"
import React from "react"
import { HomeContainer } from "styles/index"

export const SortTopics = () => {
  return (
    <HomeContainer>
      <div className="px-[2.5rem]">
        <TopicHorizontalCard />
      </div>
    </HomeContainer>
  )
}
