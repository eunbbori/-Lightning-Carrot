import React from "react";
/** @jsxImportSource @emotion/react */
import Header from "../../../components/Header/Header";
import ImageUpload from "../../../components/Image/ImageUpload";
import AppInputRadio from "../../../components/InputRadio/AppInputRadio";
import AppInputText from "../../../components/InputText/AppInputText";
import { HomeMainContainer, HomeMainWrapper } from "../../../styles/common";
import {
  ContentWrapper,
  imgContainer,
  regionContainer,
  TitleContainerStyle,
  TitleStyle,
} from "./AddProductViewStyle";

const AddProduct = () => {
  const productStatusList = [
    { value: "중고상품", htmlValue: "중고상품" },
    { value: "새상품", htmlValue: "새상품" },
  ];
  return (
    <>
      <Header />
      <div css={HomeMainWrapper}>
        <div css={HomeMainContainer}>
          <div css={ContentWrapper}>
            <div css={TitleContainerStyle}>
              <div css={TitleStyle}>상품이미지</div>
              <div className="imgCountStyle">(0/11)</div>
            </div>
            <div css={imgContainer}>
              <ImageUpload />
            </div>
          </div>
          <div css={ContentWrapper}>
            <div css={TitleContainerStyle}>
              <div css={TitleStyle}>제목</div>
            </div>
            <div className="titleContainer">
              <AppInputText
                width={"70rem"}
                height={"3rem"}
                type={"text"}
                className={"inputTitle"}
                required={true}
                placeholder={"상품명을 2자 이상 입력해주세요"}
              />
            </div>
          </div>
          <div css={ContentWrapper}>
            <div css={TitleContainerStyle}>
              <div css={TitleStyle}>거래지역</div>
            </div>
            <div css={regionContainer}></div>
          </div>
          <div css={ContentWrapper}>
            <div css={TitleContainerStyle}>
              <div css={TitleStyle}>상태</div>
            </div>
            <div className="statusContainer">
              {productStatusList.map((productStatus) => {
                return (
                  <AppInputRadio
                    key={productStatus.value}
                    type={"radio"}
                    className={"productStatusRadio"}
                    value={productStatus.value}
                    htmlValue={productStatus.htmlValue}
                  />
                );
              })}
            </div>
          </div>
          <div css={ContentWrapper}>
            <div css={TitleContainerStyle}>
              <div css={TitleStyle}>가격</div>
            </div>
            <div className="priceContainer">
              <AppInputText
                width={"14rem"}
                height={"2.5rem"}
                type={"number"}
                className={"inputPrice"}
                required={true}
                placeholder={"숫자만 입력해주세요"}
              />
            </div>
            <div className="wonContainer">원</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
