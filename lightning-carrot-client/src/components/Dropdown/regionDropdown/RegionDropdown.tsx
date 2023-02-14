/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { RegionContainer, RegionWrapper } from "./RegionDropdownStyle";
import AppButton from "./../../Button/AppButton";
import { RegionDropdownProps } from "../../../interface/DropdownProps";

const RegionDropdown: React.FC<RegionDropdownProps> = ({
  mouseEnter,
  mouseLeave,
}) => {
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
  const [isSelected, setSelected] = useState<string[]>([]);
  const regionHandler = (idx: number) => {
    const newSelected = Array(regionList.length).fill(false);
    newSelected[idx] = true;
    setSelected(newSelected);
  };
  return (
    <div
      css={RegionWrapper}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div css={RegionContainer}>
        {regionList.map((region, idx) => (
          <AppButton
            key={idx}
            width={"5rem"}
            height={"3rem"}
            className={
              isSelected[idx]
                ? "RegionSubContainer--selected"
                : "RegionSubContainer"
            }
            type={"button"}
            text={region}
            onClick={() => regionHandler(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default RegionDropdown;
