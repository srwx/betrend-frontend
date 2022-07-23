import Image from "next/image"
import React from "react"
import styled from "styled-components"

const BgImage = styled.img`
  width: 100vw;
  z-index: -999;
`
export const AllTopics = () => {
  return (
    <div className="relative -translate-y-6">
      <BgImage src="/images/allTopics/bg.png" alt="bg" />
      <div className="absolute top-16 left-0">
        <span className="text-white">All Topics</span>
      </div>
    </div>
  )
}
