import classNames from "classnames"
import { TopicCard } from "component/TopicCard/TopicCard"
import Image from "next/image"
import React, { forwardRef } from "react"
import styled from "styled-components"
import { HomeContainer } from "styles/index"
import topicList from "./utils/getAllTopics.json"

const SearchContainer = styled.div`
  width: 100%;
  height: 3.5rem;
  background: transparent;
  border: 1px solid #b5bdc1;
  border-radius: 8px;
  backdrop-filter: blur(4px);
  color: #b5bdc1;
  display: flex;
  gap: 0.9rem;
  padding-left: 0.7rem;

  :focus-within {
    color: white;
    border: 1px solid white;
  }
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;

  :focus {
    outline: none;
  }
`

const Container = styled(HomeContainer)`
  z-index: 10;
  position: absolute;
  top: 5rem;
  scroll-margin: 4.8rem;
`

export const AllTopics = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Container ref={ref}>
      <div className="flex flex-col justify-center items-center px-[2.5rem] py-[1rem] space-y-16">
        {/* Search section */}
        <SearchContainer>
          <Image
            src="/images/icons/search.svg"
            alt="icon"
            width="23"
            height="23"
          />
          <Input placeholder="Search Organizations" />
        </SearchContainer>
        {/* Card section */}
        <div className="flex flex-wrap justify-between gap-y-8">
          {topicList.data.map((topic, i) => (
            <TopicCard
              key={i}
              address={topic.address}
              backgroundUrl={topic.backgroundUrl}
              title={topic.title}
              membersCount="1234"
            />
          ))}
        </div>
        {/* Button section */}
        <div className="cursor-pointer">
          <Image
            src="/images/allTopics/seeMoreButton.png"
            alt="button"
            width="240px"
            height="70px"
          />
        </div>
      </div>
    </Container>
  )
})

AllTopics.displayName = "AllTopics"
