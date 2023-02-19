/** @jsxImportSource @emotion/react */
import React from "react";
import { InputProps } from "../../interface/InputProps";
import {
  RadioInputContainer,
  RadioInputStyle,
  RadioLabelStyle,
} from "./AppInputRadioStyle";

const AppInputRadio: React.FC<InputProps> = ({
  className,
  type,
  value,
  onClick,
  htmlValue,
  checked,
}) => {
  return (
    <div css={RadioInputContainer}>
      <input
        css={RadioInputStyle}
        type={type}
        value={value}
        id={value}
        name={className}
        checked={checked}
        onChange={onClick}
      />
      <label htmlFor={value} css={RadioLabelStyle}>
        {htmlValue}
      </label>
    </div>
  );
};

export default AppInputRadio;
