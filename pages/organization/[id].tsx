import { OrganizationHorizontalCard } from "component/OrganizationHorizontalCard/OrganizationHorizontalCard"
import { PostCard } from "component/PostCard/PostCard"
import { TopicCard } from "component/TopicCard/TopicCard"
import Image from "next/image"
import { GetServerSidePropsContext } from "next/types"
import { Container } from "pages"
import React, { useEffect, useState } from "react"
import { TopicProps } from "src/types/topic.type"
import allTopics from "src/utils/getAllTopics.json"
import styled from "styled-components"

const OrganizationContainer = styled(Container)`
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 3.5rem;
  row-gap: 6rem;
  position: relative;
`

interface OrganizationProps {
  address: string
  name: string
  admin: string[]
  member: string[]
  number_of_people: number
}

export default function Organization({
  id,
  imgUrl,
  questionList,
}: {
  id: string
  imgUrl: string
  questionList: TopicProps[]
}) {
  const [organizationData, setOrganizationData] = useState<OrganizationProps>()
  const [pollList, setPollList] = useState<TopicProps[]>([])
  useEffect(() => {
    const fetchAllTopics = async () => {
      const res = await fetch(`${process.env.apiUrl}/api/topics`, {
        headers: { "ngrok-skip-browser-warning": "11" },
      })
      const resJson = await res.json()
      setPollList(resJson.data)
    }
    const fetchOrganization = async () => {
      const res = await fetch(`${process.env.apiUrl}/api/organization/${id}`, {
        headers: { "ngrok-skip-browser-warning": "11" },
      })
      const resJson = await res.json()
      const data: OrganizationProps = resJson.data
      console.log(data)
      setOrganizationData(data)
    }
    fetchAllTopics()
    fetchOrganization()
  }, [id])
  return (
    <OrganizationContainer>
      <OrganizationHorizontalCard
        img={imgUrl}
        name={organizationData?.name}
        peopleNumber={organizationData?.number_of_people}
      />
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
      <div className="w-full max-w-[1314px] space-y-10">
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
        <div className="fixed bottom-5 right-8 cursor-pointer">
          <Image
            src="/images/icons/create.png"
            width="80px"
            height="80px"
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
  const { id } = context.query
  console.log(id)
  //   const imgUrl = `/images/allOrganization/card${address}s`
  const imgUrl = "/images/allOrganization/card1s.png"
  const pollList = allTopics.data.filter((topic) => topic.category === "poll")
  const questionList = allTopics.data.filter(
    (topic) => topic.category === "question"
  )
  return {
    props: {
      id,
      imgUrl,
      pollList,
      questionList,
    },
  }
}
