/** @jsxImportSource @emotion/react */
import React from "react";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { GridContentProps } from "./../../interface/GridContentProps";
import {
  gridContainer,
  imgContainer,
  descContainer,
  subContentContainer,
  likeContainer,
  likeCount,
  titleStyle,
  regionStyle,
  priceStyle,
} from "./GridContentStyle";

const GridContent: React.FC<GridContentProps> = ({
  img,
  title,
  regionFull,
  price,
  heartCount,
}) => {
  return (
    <div css={gridContainer}>
      <div css={imgContainer}>
        <img src={img} className="produceImg" />
      </div>
      <div css={descContainer}>
        <div css={titleStyle}>{title}</div>
        <div css={regionStyle}>{regionFull}</div>
        <div css={subContentContainer}>
          <div css={priceStyle}>{price}</div>
          <div css={likeContainer}>
            <BsFillSuitHeartFill className="heartIcon" />
            <div css={likeCount}>{heartCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridContent;
