import classNames from "classnames"
import { Active, Bet, Closed, Vote } from "component/Status/Status"
import React from "react"
import styled from "styled-components"

interface ContainerProps {
  url: string
}

const Container = styled.div<ContainerProps>`
  width: 31%;
  height: 32rem;
  border-radius: 1rem;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  padding-top: 0.8rem;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
`

interface TopicCardProps {
  backgroundUrl: string
  title: string
  deadline: string
  isVote?: boolean
  isActive?: boolean
}

export const TopicCard = ({
  backgroundUrl,
  title,
  deadline,
  isVote,
  isActive,
}: TopicCardProps) => {
  return (
    <Container url={backgroundUrl}>
      <div className="w-[55%] self-end flex gap-2 justify-end pr-[0.8rem]">
        {isVote ? <Vote /> : <Bet />}
        {isActive ? <Active /> : <Closed />}
      </div>
      <article
        className={classNames(
          "text-white px-5 pt-48 pb-10 space-y-7",
          "bg-gradient-to-t from-black to-transparent"
        )}
      >
        <h1 className="text-3xl font-semibold">{title}</h1>
        <div className="flex justify-between">
          <span>End Date:</span>
          <span>{deadline}</span>
        </div>
      </article>
    </Container>
  )
}
