import classNames from "classnames"
import Image from "next/image"
import FireSvg from "../../../public/images/icons/fire.svg"
import MockTopic from "./utils/getAllTopics.json"
import { HomeContainer } from "styles/index"
import PopularTopicCard from "component/PopularTopicCard"
import { RankingTypes } from "component/PopularTopicCard/PopularTopicCard"

const PopularTopics = () => {
  console.log(MockTopic)
  return (
    <HomeContainer>
      <div className={classNames("px-10 py-16")}>
        <div
          className={classNames(
            "flex justify-start items-center gap-x-4 w-full"
          )}
        >
          <div className="text-white font-bold text-3xl">Popular Topics</div>
          <Image
            src={FireSvg}
            alt=""
            width="24px"
            height="24px"
            className="border-white"
          />
        </div>
        <div
          className={classNames(
            "text-white my-12 w-full grid grid-cols-12 min-h-[550px]"
          )}
        >
          <PopularTopicCard
            title={MockTopic[0].title}
            imageUrl={MockTopic[0].backgroundUrl}
            ranking={RankingTypes.SECOND}
          />
          <PopularTopicCard
            title={MockTopic[1].title}
            imageUrl={MockTopic[1].backgroundUrl}
            ranking={RankingTypes.FIRST}
          />
          <PopularTopicCard
            title={MockTopic[2].title}
            imageUrl={MockTopic[2].backgroundUrl}
            ranking={RankingTypes.THIRD}
          />
        </div>
      </div>
    </HomeContainer>
  )
}

export default PopularTopics
