import { GetServerSideProps, GetServerSidePropsContext } from "next"
import { DetailSection } from "pages/Topic/DetailSection"
import React from "react"
import allTopics from "src/pages/Home/utils/getAllTopics.json"
import { TopicProps } from "pages/Topic/Topic.type"

export default function Topic({ topic }: { topic: TopicProps }) {
  return (
    <div>
      <DetailSection props={topic} />
    </div>
  )
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
