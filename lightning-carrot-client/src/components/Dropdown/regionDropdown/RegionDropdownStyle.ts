/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../../../styles/theme";

export const RegionWrapper = css`
  position: absolute;
  z-index: 99;
  width: 35rem;
  height: 13rem;
  box-shadow: rgb(33 56 71 / 20%) 0px 2px 24px 0px,
    rgb(33 56 71 / 20%) 0px 6px 4px 0px;
  background-color: rgb(255, 255, 255);
`;
export const RegionContainer = css`
  display: flex;
  flex-flow: row wrap;
  padding: 12px 12px 16px;
  gap: 5px;
  place-content: center;

  .RegionSubContainer {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    padding: 5px 16px;
    border-radius: 24px;
    border: 2px solid rgb(230, 233, 235);
    margin-top: 0.5rem;
    align-items: center;
    font-family: inherit;
    font-weight: none;
    font-size: 1rem;
    letter-spacing: 2px;

    &:hover {
      cursor: pointer;
      background-color: ${theme.sideColor};
    }
  }
`;
