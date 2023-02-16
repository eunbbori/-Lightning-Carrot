/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import AppButton from "./../../Button/AppButton";
import { ContentDropdownProps } from "../../../interface/DropdownProps";
import { CategoryContainer, CategoryWrapper } from "./CategoryDropDownStyle";

const CategoryDropdown: React.FC<ContentDropdownProps> = ({
  mouseEnter,
  mouseLeave,
  className,
}) => {
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
  const [isSelected, setSelected] = useState<string[]>([]);
  const categoryHandler = (idx: number) => {
    const newSelected = Array(categoryList.length).fill(false);
    newSelected[idx] = true;
    setSelected(newSelected);
  };
  return (
    <div
      css={CategoryWrapper}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className={className}
    >
      <div css={CategoryContainer}>
        {categoryList.map((category, idx) => (
          <AppButton
            key={idx}
            width={"9rem"}
            height={"1.6rem"}
            className={
              isSelected[idx]
                ? "CategorySubContainer--selected"
                : "CategorySubContainer"
            }
            type={"button"}
            text={category}
            onClick={() => categoryHandler(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryDropdown;
