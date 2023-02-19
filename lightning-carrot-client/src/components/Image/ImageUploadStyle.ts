/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../../styles/theme";
export const addImgWrapper = css`
  display: flex;
  flex-wrap: wrap;
  overflow-x: hidden;
  gap: 1.5rem;
  padding: 1rem;
`;
export const addImgContainer = css`
  width: 15rem;
  height: 15rem;
  background-color: ${theme.mainColor};
`;
export const imgLabelStyle = css`
  width: 5rem;
  color: ${theme.sideColor};
  text-align: center;
  cursor: pointer;
  .imgLabelIconStyle {
    font-size: 5rem;
    position: absolute;
    margin-top: 5rem;
    margin-left: 5rem;
  }
  .imgLabelTextStyle {
    font-size: 1.5rem;
    position: absolute;
    margin-top: 10rem;
    margin-left: 4rem;
  }
  .imgInputStyle {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
`;
export const addedImgContainer = css`
  display: flex;
  .imgStyle {
    width: 15rem;
    height: 15rem;
  }
  .deleteBtn {
    font-size: 2rem;
    background-color: rgba(30, 29, 41, 0.32);
    border: none;
    position: absolute;
    margin-left: 12rem;
    margin-top: 0.5rem;
  }
`;
