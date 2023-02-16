/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../../styles/theme";
import styled from "@emotion/styled";

interface ToggleProps {
  isBookmark: boolean | undefined;
}
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

export const ToggleContainer = styled.div<ToggleProps>`
  width: 3rem;
  height: 1.5rem;
  padding: 2px;
  border-radius: 16px;
  transition-duration: 0.5s;
  cursor: pointer;
  align-self: center;
  background-color: ${(props) =>
    props.isBookmark ? `${theme.sideColor}` : `${theme.pointColor}`};

  .switch {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition-duration: 0.5s;
    background-color: rgb(255, 255, 255);
    transform: ${(props) =>
      props.isBookmark ? "translateX(0px)" : "translateX(25px)"};
  }
`;
