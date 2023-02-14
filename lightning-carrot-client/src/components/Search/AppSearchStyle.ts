/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const searchContainer = css`
  display: flex;
  /* margin-left: 15rem; */
`;
export const searchStyle = css`
  border-radius: 20px;
  border: 1px solid white;
  color: black;
  background: ${theme.mainColor};
  font-weight: bold;
  padding: 10px;
  text-align: center;
  align-self: center;
  font-family: inherit;

  &:focus {
    outline: none;
  }
`;
export const searchIconContainer = css`
  position: relative;
  top: 1rem;
  left: 2rem;
  z-index: 1;
`;
