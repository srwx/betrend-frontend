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
  return <div>DetailSection</div>
}
