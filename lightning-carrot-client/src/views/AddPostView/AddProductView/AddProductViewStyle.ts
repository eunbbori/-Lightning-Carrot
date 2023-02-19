/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../../../styles/theme";

export const ContentWrapper = css`
  display: flex;
  margin-bottom: 3rem;

  .titleContainer {
    width: 60vw;
    margin: auto;
    border-radius: 3px;
    border: 1px solid ${theme.sideColor};
    margin-top: 0.5rem;
  }
`;
export const TitleContainerStyle = css`
  width: 10rem;
  margin-top: 1rem;
  .imgCountStyle {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
export const TitleStyle = css`
  font-size: 1.5rem;
  font-weight: bold;
  align-self: center;
`;
export const imgContainer = css`
  width: 60vw;
  /* justify-content: space-between; */
  margin: auto;
`;
export const regionContainer = css`
  width: 30vw;
  height: 40vh;
  border: 1px solid ${theme.sideColor};
  border-radius: 3px;
  margin-top: 1rem;
  margin-left: 1rem;
`;
