import classNames from "classnames"
import { TopicCard } from "component/TopicCard/TopicCard"
import Image from "next/image"
import React, { forwardRef } from "react"
import styled from "styled-components"
import { HomeContainer } from "styles/index"
import topicList from "./utils/getAllTopics.json"

const categoryList = [
  "All Topics",
  "Technology",
  "Cryptocurrency",
  "Music",
  "Sports",
  "Game",
  "Animals",
]

const CategoryWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  color: white;
  display: flex;
  gap: 4rem;
  font-size: 1.4rem;
  overflow: scroll;
`

interface CategoryProps {
  index: number
}

const Category = styled.li<CategoryProps>`
  white-space: nowrap;
  cursor: pointer;
  font-weight: ${(props) => (props.index === 0 ? "600" : "400")};
  color: ${(props) => (props.index === 0 ? "#ffffff" : "#B5BDC1")};
`

const SearchContainer = styled.div`
  width: 18rem;
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
    width: 100%;
    transition-property: width;
    transition-duration: 1s;
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
      <div className="px-[2.5rem] py-[1rem] space-y-16">
        <div className="flex justify-between items-center gap-12">
          <CategoryWrapper>
            {categoryList.map((c, i) => (
              <>
                <Category key={i} index={i}>
                  {c}
                  {i === 0 ? (
                    <div className="w-full h-[0.2rem] bg-white z-20" />
                  ) : null}
                </Category>
              </>
            ))}
          </CategoryWrapper>
          <SearchContainer>
            <Image
              src="/images/icons/search.svg"
              alt="icon"
              width="23"
              height="23"
            />
            <Input placeholder="Find your interests" />
          </SearchContainer>
        </div>
        <div className="flex justify-between gap-14 overflow-scroll pb-8">
          {topicList.map((topic, i) => (
            <TopicCard
              key={i}
              address={topic.address}
              backgroundUrl={topic.backgroundUrl}
              title={topic.title}
              deadline={topic.deadline}
              isActive={topic.isActive}
              isVote={topic.isVote}
            />
          ))}
        </div>
      </div>
    </Container>
  )
})

AllTopics.displayName = "AllTopics"
