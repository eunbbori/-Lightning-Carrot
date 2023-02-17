/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const filterPart = css`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  .regionDropdown {
    align-items: center;
    margin-right: 1rem;
  }
  .categoryDropdown {
    align-items: center;
  }
  .part1 {
    display: flex;
  }
`;
export const GridWrapper = css`
  display: flex;
  flex-wrap: wrap;
`;
export const addPostBtnStyle = css`
  position: fixed;
  z-index: 99;
  top: 53rem;
  right: 8rem;
  font-family: inherit;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: ${theme.sideColor};
  &:hover {
    background-color: ${theme.pointColor};
  }
  &.addPostCancelBtn {
    font-size: 3rem;
    font-weight: bold;
  }
  &.addProductBtn {
    position: fixed;
    top: 49.5rem;
  }
  &.addClassBtn {
    position: fixed;
    top: 46rem;
  }
`;
