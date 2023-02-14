/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const gridContainer = css`
  width: 15.5rem;
  height: 20rem;
  border: 1px solid ${theme.mainColor};
  padding: 2rem;
  margin-right: 1rem;
  margin-top: 1rem;
`;
export const imgContainer = css`
  text-align: center;

  .produceImg {
    width: 13rem;
    height: 13rem;
  }
`;
export const descContainer = css`
  margin-top: 1rem;
`;
export const title = css`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;
export const region = css`
  font-size: 1rem;
`;
export const subContentContainer = css`
  display: flex;
  margin-top: 1rem;
  font-weight: bold;
`;
export const price = css`
  font-size: 1rem;
`;
export const likeContainer = css`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  .heartIcon {
    font-size: 1.2rem;
    margin-right: 1rem;
  }
`;
export const likeCount = css`
  font-size: 1rem;
`;
