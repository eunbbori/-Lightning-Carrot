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
  .statusContainer {
    display: flex;
    width: 60vw;
    height: 3vh;
    margin: auto;
    border-radius: 3px;
    border: 1px solid ${theme.sideColor};
    margin-top: 0.5rem;
    font-size: 1.5rem;
    padding: 1rem;
  }
  .priceContainer {
    width: 13vw;
    border-radius: 3px;
    border: 1px solid ${theme.sideColor};
    margin-top: 0.5rem;
  }
  .wonContainer {
    font-size: 1.5rem;
    align-self: center;
    margin-left: 0.5rem;
  }
  .TextCountContainer {
    font-size: 1.3rem;
    display: flex;
    justify-content: flex-end;
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
export const RegionContainer = css`
  display: flex;
  width: 30vw;
  height: 40vh;
  border: 1px solid ${theme.sideColor};
  border-radius: 3px;
  margin-top: 1rem;
  font-size: 1.5rem;
  .RegionDepth1 {
    width: 9vw;
    text-align: center;
    overflow-y: scroll;
  }
  .RegionDepth2 {
    width: 11vw;
    text-align: center;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .RegionDepth3 {
    width: 11vw;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const RegionDepthBtnStyle = css`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  &:hover {
    color: ${theme.pointColor};
  }
  &.regionDepthBtn--clicked {
    color: ${theme.pointColor};
  }
  &.regionDepthBtn {
    &:hover {
      color: ${theme.sideColor};
    }
  }
`;
export const TextAreaStyle = css`
  width: 60vw;
  height: 30vh;
  border: 1px solid ${theme.sideColor};
  padding: 1rem;
  font-family: inherit;
  font-weight: bold;
  font-size: 1.5rem;
  resize: none;
  &:focus {
    outline: none;
    border: 1px solid ${theme.pointColor2};
  }
  ::placeholder {
    color: ${theme.sideColor};
  }
`;
export const CategoryContainer = css`
  width: 40vw;
  margin-top: 0.5rem;
  margin-left: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  .categoryBtn {
    font-size: 1.1rem;
    font-family: inherit;
    font-weight: bold;
    border: 1px solid ${theme.mainColor};
    &:hover {
      background-color: #eceef0;
      cursor: pointer;
    }
  }
  .categoryBtn--selected {
    font-size: 1.1rem;
    font-family: inherit;
    font-weight: bold;
    border: 1px solid ${theme.mainColor};
    background-color: ${theme.pointColor};
    color: white;
    &:hover {
      cursor: pointer;
    }
  }
`;
