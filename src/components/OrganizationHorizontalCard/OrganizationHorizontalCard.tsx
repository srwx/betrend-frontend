import Image from "next/image"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 7rem;
  background: rgba(137, 137, 137, 0.2);
  border: 0.836416px solid #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding-left: 0.9rem;
  padding-right: 0.9rem;
  justify-content: space-between;
  max-width: 1314px;
`

export const OrganizationHorizontalCard = ({
  img,
  name,
  peopleNumber,
}: {
  img: string
  name?: string
  peopleNumber?: number
}) => {
  return (
    <Container>
      <div className="flex items-center">
        {/* Image section */}
        <div className="rounded-lg overflow-hidden w-[5rem] h-[5rem]">
          <Image src={img} alt="icon" width="100%" height="100%" />
        </div>
        {/* Text section */}
        <article className="text-white flex flex-col justify-between h-[4rem] ml-5">
          {/* TODO: Organization ane props */}
          <h1 className="text-xl font-semibold">{name}</h1>
          {/* TODO: Total Members props */}
          <div className="flex items-center gap-x-2">
            <Image
              src="/images/icons/user.png"
              width="20px"
              height="20px"
              alt="user icon"
            />
            <span className="text-sm">{peopleNumber} Members in Community</span>
          </div>
        </article>
      </div>
      {/* Active Polls section */}
      <div className="self-start mt-3 flex items-center gap-x-3">
        <Image
          src="/images/icons/checked.svg"
          alt="icon"
          width="20px"
          height="20px"
        />
        {/* TODO: Active polls count*/}
        <span className="text-[#20FDA5]">5 Active Polls</span>
      </div>
    </Container>
  )
}
