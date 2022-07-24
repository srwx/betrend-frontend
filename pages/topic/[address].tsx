import React from "react"
import allTopics from "src/pages/Home/utils/getAllTopics.json"

export default function Topic({ topic }) {
  return <div>{topic.title}</div>
}

export async function getServerSideProps(context) {
  const { address } = context.query
  const topic = allTopics.find((topic) => topic.address === address)
  return {
    props: {
      topic,
    },
  }
}
