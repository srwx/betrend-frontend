import React from "react"
import { HomeContainer } from "styles/index"
import styled from "styled-components"

const Container = styled(HomeContainer)`
  z-index: 10;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
`

export const Faq = () => {
  return (
    <Container>
      <article className="text-white text-center space-y-4">
        <span className="font-semibold text-4xl">FAQ&apos;s</span>
        <p>
          Nisi proin porta ad eu a gravida adipiscing commodo inceptos a
          suspendisse vestibulum vestibulum.
        </p>
      </article>
    </Container>
  )
}
