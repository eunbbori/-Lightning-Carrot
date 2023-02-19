import React from "react";
/** @jsxImportSource @emotion/react */
import Header from "../../../components/Header/Header";
import ImageUpload from "../../../components/Image/ImageUpload";
import { HomeMainContainer, HomeMainWrapper } from "../../../styles/common";
import {
  imgContainer,
  imgTitleContainer,
  imgWrapper,
  TitleStyle,
} from "./AddProductViewStyle";

const AddProduct = () => {
  return (
    <>
      <Header />
      <div css={HomeMainWrapper}>
        <div css={HomeMainContainer}>
          <div css={imgWrapper}>
            <div css={imgTitleContainer}>
              <div css={TitleStyle}>상품이미지</div>
              <div className="imgCountStyle">(0/11)</div>
            </div>
            <div css={imgContainer}>
              <ImageUpload />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
