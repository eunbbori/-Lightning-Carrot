import React, { useState } from "react";
import AppButton from "../../../components/Button/AppButton";
/** @jsxImportSource @emotion/react */
import Header from "../../../components/Header/Header";
import ImageUpload from "../../../components/Image/ImageUpload";
import AppInputRadio from "../../../components/InputRadio/AppInputRadio";
import AppInputText from "../../../components/InputText/AppInputText";
import { HomeMainContainer, HomeMainWrapper } from "../../../styles/common";
import {
  CategoryContainer,
  ContentWrapper,
  imgContainer,
  RegionContainer,
  TextAreaStyle,
  TitleContainerStyle,
  TitleStyle,
} from "./AddProductViewStyle";

const AddProduct = () => {
  const categoryList = [
    "전체",
    "디지털기기",
    "생활가전",
    "가구/인테리어",
    "생활/주방",
    "유아동",
    "여성의류",
    "여성잡화",
    "남성패션/잡화",
    "뷰티/미용",
    "스포트/레저",
    "취미/게임/음반",
    "도서",
    "티켓/교환권",
    "반려동물용품",
    "기타 중고물품",
  ];
  const productStatusList = [
    { value: "중고상품", htmlValue: "중고상품" },
    { value: "새상품", htmlValue: "새상품" },
  ];
  const [textCount, setTextCount] = useState<number>(0);
  const textCountHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextCount(event.target.value.length);
  };
  const [isSelected, setSelected] = useState<string[]>([]);
  const categoryHandler = (idx: number) => {
    const newSelected = Array(categoryList.length).fill(false);
    newSelected[idx] = true;
    setSelected(newSelected);
  };
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
              <div css={TitleStyle}>카테고리</div>
            </div>
            <div css={CategoryContainer}>
              {categoryList.slice(1).map((category, idx) => (
                <AppButton
                  key={idx}
                  width={"8rem"}
                  height={"4rem"}
                  className={
                    isSelected[idx] ? "categoryBtn--selected" : "categoryBtn"
                  }
                  type={"button"}
                  text={category}
                  onClick={() => categoryHandler(idx)}
                />
              ))}
            </div>
          </div>
          <div css={ContentWrapper}>
            <div css={TitleContainerStyle}>
              <div css={TitleStyle}>거래지역</div>
            </div>
            <div css={RegionContainer}></div>
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
          <div css={ContentWrapper}>
            <div css={TitleContainerStyle}>
              <div css={TitleStyle}>설명</div>
            </div>
            <div className="textareaContainer">
              <textarea
                rows={10}
                css={TextAreaStyle}
                className="inputDescription"
                placeholder={
                  "여러 장의 상품 사진과 구입 연도, 브랜드, 사용감, 하자 유무 등 구매자에게 필요한 정보를 꼭 포함해 주세요. (10자 이상)"
                }
                maxLength={2000}
                onChange={textCountHandler}
              ></textarea>
              <div className="TextCountContainer">
                <span>{textCount}</span>
                <span>/2000자</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
