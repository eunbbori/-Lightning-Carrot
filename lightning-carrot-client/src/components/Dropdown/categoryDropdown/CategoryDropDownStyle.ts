/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../../../styles/theme";

export const CategoryWrapper = css`
  position: absolute;
  left: 25rem;
  z-index: 99;
  width: 9rem;
  height: 35rem;
  box-shadow: rgb(33 56 71 / 20%) 0px 2px 24px 0px,
    rgb(33 56 71 / 20%) 0px 6px 4px 0px;
  background-color: rgb(255, 255, 255);

  &.categoryHide {
    display: none;
  }
`;
export const CategoryContainer = css`
  display: flex;
  flex-flow: row wrap;
  place-content: center;

  .CategorySubContainer {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    padding: 5px 16px;
    margin-top: 0.5rem;
    align-items: center;
    font-family: inherit;
    font-weight: none;
    font-size: 1rem;
    letter-spacing: 2px;
    border-radius: 0px;

    &:hover {
      cursor: pointer;
      background-color: ${theme.sideColor};
    }
  }
  .CategorySubContainer--selected {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    padding: 5px 16px;
    margin-top: 0.5rem;
    align-items: center;
    font-family: inherit;
    font-weight: none;
    font-size: 1rem;
    letter-spacing: 2px;
    background-color: ${theme.pointColor};
    border-radius: 0px;

    &:hover {
      cursor: pointer;
    }
  }
`;
