interface ResponseChoice {
  choice: string
  index: number
  vote: number
}

export interface TopicProps {
  no: string
  address: string
  title: string
  description: string
  category: string
  timeStart: string
  timeEnd: string
  responseCount: number
  responses: ResponseChoice[] | string[]
  isActive: boolean
}
