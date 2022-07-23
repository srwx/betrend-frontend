import Image from "next/image"
import React from "react"
import styled from "styled-components"
import { HomeContainer } from "styles/index"

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

const Category = styled.li`
  white-space: nowrap;
  cursor: pointer;
`

const SearchContainer = styled.div`
  width: 18rem;
  height: 2.5rem;
  background: transparent;
  border: 2px solid #b5bdc1;
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
  z-index: 999;
  width: 100%;
  position: absolute;
  top: 5rem;
`

export const AllTopics = () => {
  return (
    <Container>
      <div className="px-[2.5rem] py-[2rem]">
        <div className="flex justify-between items-center gap-12">
          <CategoryWrapper>
            {categoryList.map((c) => (
              <Category key={c}>{c}</Category>
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
      </div>
    </Container>
  )
}
