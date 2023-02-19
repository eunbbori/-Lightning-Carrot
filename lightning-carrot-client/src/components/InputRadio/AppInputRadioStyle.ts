/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const RadioInputContainer = css`
  display: flex;
`;
export const RadioInputStyle = css`
  border: 1px solid ${theme.sideColor};
  border-radius: 5px;
  outline: none;
  margin-right: 1rem;

  &:focus {
    outline: none;
  }
`;
export const RadioLabelStyle = css`
  margin-right: 1.5rem;
  place-self: center;
`;
