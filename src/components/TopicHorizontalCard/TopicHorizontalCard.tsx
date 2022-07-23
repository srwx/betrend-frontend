import { Active, Bet, Closed, Vote } from "component/Status/Status"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 5rem;
  background: rgba(137, 137, 137, 0.2);
  box-shadow: 0px 3.34566px 35.1295px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: white;
`

interface TopicHorizontalCardProps {
  place: number
  topic: string
  prize: number
  isActive: boolean
  isVote: boolean
}

export const TopicHorizontalCard = ({
  place,
  topic,
  prize,
  isActive,
  isVote,
}: TopicHorizontalCardProps) => {
  return (
    <Container>
      <div className="flex-[0.2]">
        <div className="w-[2.4rem] h-[2.4rem] ml-8 rounded-full border-white border-solid border-[1px] flex justify-center items-center">
          {place}
        </div>
      </div>
      <span className="flex-[0.4]">{topic}</span>
      <span className="flex-[0.25]">{prize}</span>
      <div className="flex-[0.2] flex gap-2">
        {isActive ? <Active /> : <Closed />}
        {isVote ? <Vote /> : <Bet />}
      </div>
    </Container>
  )
}
