/** @jsxImportSource @emotion/react */

import React from "react";
import { ToggleSwitchProps } from "../../interface/ToggleSwitchProps";
import { Container, Label, ToggleContainer } from "./ToggleSwitchStyle";

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  width,
  text,
  onClick,
  className,
}) => {
  return (
    <div css={[Container, { width }]}>
      <div css={Label}>{text}</div>
      <div css={ToggleContainer} onClick={onClick}>
        <div className={className}></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
