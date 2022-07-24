import { GetServerSideProps, GetServerSidePropsContext } from "next"
import React from "react"
import allTopics from "src/pages/Home/utils/getAllTopics.json"

interface TopicProps {
  address: string
  backgroundUrl: string
  title: string
  deadline: string
  isVote: boolean
  isActive: boolean
  prize: number
}

export default function Topic({ topic }: { topic: TopicProps }) {
  return <div>{topic.title}</div>
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { address } = context.query
  const topic = allTopics.find((topic) => topic.address === address)
  return {
    props: {
      topic,
    },
  }
}
