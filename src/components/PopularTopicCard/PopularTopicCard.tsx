import classNames from "classnames"
import Image from "next/image"
import styled, { keyframes } from "styled-components"
import LightImage from "../../../public/images/popularTopics/Light.png"

export enum RankingTypes {
  FIRST = "FIRST",
  SECOND = "SECOND",
  THIRD = "THIRD",
}

interface IPopularTopicCardProps {
  title: string
  imageUrl: string
  ranking: RankingTypes
}

const mappingImagesizeByRank = (
  ranking: RankingTypes,
  option: "width" | "height"
) => {
  switch (ranking) {
    case RankingTypes.FIRST:
      return option === "width" ? "275px" : "275px"
    case RankingTypes.SECOND:
      return option === "width" ? "200px" : "200px"
    default:
      return option === "width" ? "150px" : "150px"
  }
}

const mappingHonourImageByRank = (ranking: RankingTypes) => {
  switch (ranking) {
    case RankingTypes.FIRST:
      return "/images/popularTopics/FirstHonour.png"
    case RankingTypes.SECOND:
      return "/images/popularTopics/SecondHonour.png"
    default:
      return "/images/popularTopics/ThirdHonour.png"
  }
}

const rotateAnimation = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`

const ImageAnimation = styled(Image)`
  animation: ${rotateAnimation} 4s linear infinite;
  background-image: url(../../../public/images/popularTopics/Light.png);
  position: absolute;
`
const ImageWrapper = styled.div<{ width: string; height: string }>`
  filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.85));
  border-radius: 20px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`

const ImageGroup = ({
  ranking,
  title,
  imageUrl,
}: Pick<IPopularTopicCardProps, "imageUrl" | "title" | "ranking">) => {
  return (
    <div
      className={classNames(
        "flex flex-col gap-y-4 justify-center items-center my-4"
      )}
    >
      <Image
        src={mappingHonourImageByRank(ranking)}
        alt="ranking"
        width="75px"
        height="75px"
      />

      <ImageWrapper
        width={mappingImagesizeByRank(ranking, "width")}
        height={mappingImagesizeByRank(ranking, "height")}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={mappingImagesizeByRank(ranking, "width")}
          height={mappingImagesizeByRank(ranking, "height")}
          layout="fixed"
        />
      </ImageWrapper>
    </div>
  )
}

const PopularTopicCard = ({
  title,
  imageUrl,
  ranking,
}: IPopularTopicCardProps) => {
  return (
    <div
      className={classNames("flex flex-col items-center", {
        "justify-start col-span-5": ranking === RankingTypes.FIRST,
        "justify-center col-span-4": ranking === RankingTypes.SECOND,
        "justify-end col-span-3": ranking === RankingTypes.THIRD,
      })}
    >
      {ranking === RankingTypes.FIRST ? (
        <>
          <div className="absolute">
            <ImageAnimation
              style={{
                position: "absolute",
              }}
              src={"/images/popularTopics/Light.png"}
              alt=""
              width="650px"
              height="550px"
            />
          </div>
          <ImageGroup ranking={ranking} title={title} imageUrl={imageUrl} />
        </>
      ) : (
        <ImageGroup ranking={ranking} title={title} imageUrl={imageUrl} />
      )}

      <div
        className={classNames("text-center font-bold", {
          "text-2xl": ranking === RankingTypes.FIRST,
          "text-lg": ranking !== RankingTypes.FIRST,
        })}
      >
        {title}
      </div>
    </div>
  )
}
export default PopularTopicCard
