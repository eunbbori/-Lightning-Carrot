/** @jsxImportSource @emotion/react */

import React from "react";
import { ButtonProps } from "../../interface/ButtonProps";
import { btnTextStyle, buttonStyle } from "./AppButtonStyle";

const AppButton: React.FC<ButtonProps> = ({
  width,
  height,
  icon,
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
      <div css={btnTextStyle}>
        <div className="iconStyle">{icon}</div>
        {text}
      </div>
    </button>
  );
};

export default AppButton;
