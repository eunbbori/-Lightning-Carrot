/** @jsxImportSource @emotion/react */
import React from "react";
import { ToggleSwitchProps } from "../../interface/ToggleSwitchProps";
import { Container, Label, ToggleContainer } from "./ToggleSwitchStyle";

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  width,
  text,
  onClick,
  className,
  toggleProps,
}) => {
  return (
    <div css={[Container, { width }]}>
      <div css={Label}>{text}</div>
      <ToggleContainer onClick={onClick} isBookmark={toggleProps}>
        <div className="switch"></div>
      </ToggleContainer>
    </div>
  );
};

export default ToggleSwitch;
