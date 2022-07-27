import Image from "next/image"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 12rem;
  background: rgba(255, 255, 255, 0.3);
  border: 0.836416px solid #ffffff;
  box-shadow: 0px 3.34566px 35.1295px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2rem;
`

export const PostCard = ({
  title,
  startDate,
}: {
  title: string
  startDate: string
}) => {
  return (
    <Container>
      {/* Left section */}
      <div className="h-[75%] flex flex-col justify-between text-white">
        <span className="text-[#F0F2F2]">{startDate}</span>
        <span className="text-2xl font-semibold">{title}</span>
        <div className="flex items-center gap-x-4">
          <Image
            src="/images/icons/eye.svg"
            alt="icon"
            width="30px"
            height="31px"
          />
          <span>111 views</span>
        </div>
      </div>
      {/* Right section */}
      <div></div>
    </Container>
  )
}
