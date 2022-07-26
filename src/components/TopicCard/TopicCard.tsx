import React from "react"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import classNames from "classnames"
import { Active, Closed } from "component/Status/Status"

interface ContainerProps {
  url: string
}

const Container = styled.div<ContainerProps>`
  width: 30%;
  min-width: 22rem;
  height: 35rem;
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
  padding-left: 1.75rem;
  padding-right: 1.75rem;
`

export const TopicCard = ({
  no,
  address,
  title,
  isActive,
  responseCount,
  choiceCount,
}: {
  no: string
  address: string
  title: string
  isActive: boolean
  responseCount: number
  choiceCount: number
}) => {
  return (
    <Link href={`/topic/${address}`}>
      <Container url={`/images/allTopics/card${no}.png`}>
        <div className="self-end">{isActive ? <Active /> : <Closed />}</div>
        <article
          className={classNames(
            "text-white w-full px-7 pt-48 pb-10 space-y-7 absolute bottom-0 left-0",
            "bg-gradient-to-t from-black to-transparent"
          )}
        >
          <h1 className="text-3xl font-semibold">{title}</h1>
          <div className="flex gap-x-14">
            <div className="flex gap-x-3">
              <Image
                src="/images/icons/user.png"
                alt="icon"
                width="25px"
                height="25px"
              />
              <span>{responseCount} Voters</span>
            </div>
            <div className="flex gap-x-3">
              <Image
                src="/images/icons/option.svg"
                alt="icon"
                width="25px"
                height="25px"
              />
              <span>{responseCount} Voters</span>
            </div>
          </div>
        </article>
      </Container>
    </Link>
  )
}
