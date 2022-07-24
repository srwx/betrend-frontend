import classNames from "classnames"
import { Active, Bet, Closed, Vote } from "component/Status/Status"
import Link from "next/link"
import React from "react"
import styled from "styled-components"

interface ContainerProps {
  url: string
}

const Container = styled.div<ContainerProps>`
  width: 31%;
  min-width: 22rem;
  height: 32rem;
  border-radius: 1rem;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  padding-top: 0.8rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`

interface TopicCardProps {
  address: string
  backgroundUrl: string
  title: string
  deadline: string
  isVote?: boolean
  isActive?: boolean
}

export const TopicCard = ({
  address,
  backgroundUrl,
  title,
  deadline,
  isVote,
  isActive,
}: TopicCardProps) => {
  console.log(address)
  return (
    <Link href={`/topic/${address}`}>
      <Container url={backgroundUrl}>
        <div className="w-[55%] self-end flex gap-2 justify-end pr-[0.8rem]">
          {isVote ? <Vote /> : <Bet />}
          {isActive ? <Active /> : <Closed />}
        </div>
        <article
          className={classNames(
            "text-white px-5 pt-48 pb-10 space-y-7 absolute bottom-0 left-0",
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
    </Link>
  )
}
