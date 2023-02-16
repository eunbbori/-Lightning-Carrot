/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const Container = css`
  display: flex;
  gap: 12px;
`;

export const Label = css`
  font-weight: bold;
  font-size: 1.2rem;
  color: rgb(58, 62, 65);
  place-self: center;
`;
export const ToggleContainer = css`
  width: 3rem;
  height: 1.5rem;
  padding: 2px;
  border-radius: 16px;
  background-color: ${theme.sideColor};
  transition-duration: 0.5s;
  cursor: pointer;
  align-self: center;
`;
export const Switch = css`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition-duration: 0.5s;
  background-color: rgb(255, 255, 255);
  transform: translateX(0px);
`;
