/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const dropdownStyle = css`
  display: flex;
  border-radius: 3px;
  border: 1px solid ${theme.sideColor};
  color: black;
  background: white;
  padding: 10px;
  justify-content: space-around;

  &:hover {
    cursor: pointer;
  }
`;
export const arrowStyle = css`
  margin-top: 3px;
`;
