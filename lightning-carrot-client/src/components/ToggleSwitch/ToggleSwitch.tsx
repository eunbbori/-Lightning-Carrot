/** @jsxImportSource @emotion/react */

import React from "react";
import { ToggleSwitchProps } from "../../interface/ToggleSwitchProps";
import { Container, Label, Switch, ToggleContainer } from "./ToggleSwitchStyle";

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  width,
  text,
  onClick,
}) => {
  return (
    <div css={[Container, { width }]}>
      <div css={Label}>{text}</div>
      <div css={ToggleContainer} onClick={onClick}>
        <div css={Switch}></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
