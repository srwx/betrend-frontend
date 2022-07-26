import classNames from "classnames"
import { Active, Bet, Closed, Vote } from "component/Status/Status"
import Image from "next/image"
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
  membersCount: string
}

export const TopicCard = ({
  address,
  backgroundUrl,
  title,
  membersCount,
}: TopicCardProps) => {
  return (
    <Link href={`/topic/${address}`}>
      <Container url={backgroundUrl}>
        <article
          className={classNames(
            "text-white px-7 pt-48 pb-10 space-y-7 absolute bottom-0 left-0",
            "bg-gradient-to-t from-black to-transparent"
          )}
        >
          <h1 className="text-3xl font-semibold">{title}</h1>
          <div className="flex gap-x-4">
            <Image
              src="/images/icons/user.png"
              alt="icon"
              width="25px"
              height="25px"
            />
            <span>{membersCount} Members in Community</span>
          </div>
        </article>
      </Container>
    </Link>
  )
}
