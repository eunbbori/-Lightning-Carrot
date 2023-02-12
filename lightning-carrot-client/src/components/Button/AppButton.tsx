/** @jsxImportSource @emotion/react */

import React from "react";
import { ButtonProps } from "../../interface/ButtonProps";
import { buttonStyle } from "./AppButtonStyle";

const AppButton: React.FC<ButtonProps> = ({
  width,
  height,
  text,
  className,
  onClick,
  type,
}) => {
  return (
    <button
      css={[buttonStyle, { width }, { height }]}
      className={className}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default AppButton;
