interface Choice {
  index: 0
  choice: string
  voteCount: number
  betCount: number
  betValue: number
}

export interface TopicProps {
  backgroundUrl: string
  bgBigUrl: string
  address: string
  title: string
  description: string
  category: string
  timeStartBet: string
  timeStart: string
  timeEndBet: string
  timeEnd: string
  totalVoteCount: number
  totalBetCount: number
  prize: number
  choices: Choice[]
  isVote: boolean
  isBet: boolean
  isActive: boolean
}
