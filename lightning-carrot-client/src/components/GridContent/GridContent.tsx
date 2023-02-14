/** @jsxImportSource @emotion/react */
import React from "react";
import productEx from "../../assets/images/product1.jpg";
import { BsFillSuitHeartFill } from "react-icons/bs";
import {
  gridContainer,
  imgContainer,
  descContainer,
  title,
  region,
  subContentContainer,
  price,
  likeContainer,
  likeCount,
} from "./GridContentStyle";

const GridContent = () => {
  return (
    <div css={gridContainer}>
      <div css={imgContainer}>
        <img src={productEx} className="produceImg" />
      </div>
      <div css={descContainer}>
        <div css={title}>몇번 안 입은 옷 팝니다</div>
        <div css={region}>서울시 종로구</div>
        <div css={subContentContainer}>
          <div css={price}>5000원</div>
          <div css={likeContainer}>
            <BsFillSuitHeartFill className="heartIcon" />
            <div css={likeCount}>10</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridContent;
