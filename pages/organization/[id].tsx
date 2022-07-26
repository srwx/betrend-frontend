import { OrganizationHorizontalCard } from "component/OrganizationHorizontalCard/OrganizationHorizontalCard"
import { PostCard } from "component/PostCard/PostCard"
import { TopicCard } from "component/TopicCard/TopicCard"
import Image from "next/image"
import { GetServerSidePropsContext } from "next/types"
import { Container } from "pages"
import React from "react"
import { TopicProps } from "src/types/topic.type"
import allTopics from "src/utils/getAllTopics.json"
import styled from "styled-components"

const OrganizationContainer = styled(Container)`
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 3.5rem;
  row-gap: 6rem;
`
export default function Organization({
  imgUrl,
  pollList,
  questionList,
}: {
  imgUrl: string
  pollList: TopicProps[]
  questionList: TopicProps[]
}) {
  console.log(questionList)
  return (
    <OrganizationContainer>
      <OrganizationHorizontalCard img={imgUrl} />
      {/* All Polls section*/}
      <div className="w-full max-w-[1314px] space-y-10">
        {/* All Polls text*/}
        <div className="text-white flex justify-between items-center">
          <span className="text-3xl font-semibold">All Polls</span>
          <span className="font-light underline">See all</span>
        </div>
        {/* Poll list (Card) */}
        <div className="flex justify-between flex-wrap gap-y-8">
          {pollList.map((poll, i) => (
            <TopicCard
              key={i}
              no={poll.no}
              address={poll.address}
              choiceCount={poll.responses.length}
              isActive={poll.isActive}
              responseCount={poll.responseCount}
              title={poll.title}
            />
          ))}
        </div>
      </div>
      {/* All Posts section */}
      <div className="relative w-full max-w-[1314px] space-y-10">
        {/* All Post text*/}
        <div className="text-white flex justify-between items-center">
          <span className="text-3xl font-semibold">All Posts</span>
          <span className="font-light underline">See all</span>
        </div>
        {/* Post list (Card) */}
        <div className="flex justify-between flex-wrap gap-y-8 pb-44">
          {questionList.map((question, i) => (
            <PostCard
              key={i}
              title={question.title}
              startDate={question.timeStart}
            />
          ))}
        </div>
        <div className="absolute bottom-28 -right-[3rem] cursor-pointer">
          <Image
            src="/images/icons/create.png"
            width="100px"
            height="100px"
            alt="button"
          />
        </div>
      </div>
    </OrganizationContainer>
  )
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { address } = context.query
  //   const imgUrl = `/images/allOrganization/card${address}s`
  const imgUrl = "/images/allOrganization/card1s.png"
  const pollList = allTopics.data.filter((topic) => topic.category === "poll")
  const questionList = allTopics.data.filter(
    (topic) => topic.category === "question"
  )
  return {
    props: {
      imgUrl,
      pollList,
      questionList,
    },
  }
}
