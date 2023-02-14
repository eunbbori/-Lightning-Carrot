/** @jsxImportSource @emotion/react */
import React from "react";
import { RegionContainer, RegionWrapper } from "./RegionDropdownStyle";
import AppButton from "./../../Button/AppButton";

const RegionDropdown = () => {
  const regionList = [
    "전체",
    "서울",
    "경기",
    "인천",
    "충북",
    "충남",
    "강원",
    "세종",
    "대전",
    "전북",
    "광주",
    "전남",
    "경북",
    "경남",
    "대구",
    "울산",
    "부산",
    "제주",
  ];

  return (
    <div css={RegionWrapper}>
      <div css={RegionContainer}>
        {regionList.map((region) => (
          <AppButton
            key={region}
            width={"5rem"}
            height={"3rem"}
            className={"RegionSubContainer"}
            type={"button"}
            text={region}
          />
        ))}
      </div>
    </div>
  );
};

export default RegionDropdown;
