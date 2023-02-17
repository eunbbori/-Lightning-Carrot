/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const buttonStyle = css`
  border-radius: 20px;
  border: 1px solid white;
  color: black;
  background: white;
  font-weight: bold;
  padding: 5px;

  &:hover {
    cursor: pointer;
  }
`;
export const btnTextStyle = css`
  display: flex;
  justify-content: center;
  .iconStyle {
    margin-top: 0.1rem;
  }
`;
