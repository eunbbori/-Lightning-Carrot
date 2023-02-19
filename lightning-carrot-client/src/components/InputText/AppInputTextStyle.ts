/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const inputTextContainer = css``;
export const inputTextStyle = css`
  font-family: inherit;
  font-size: 1.3rem;
  font-weight: bold;
  ::placeholder {
    color: ${theme.sideColor};
  }
  border: none;
  padding: 5px;
  &:focus {
    outline: none;
  }
`;
