/** @jsxImportSource @emotion/react */

import React from "react";
import { InputProps } from "../../interface/InputProps";
import { inputTextContainer, inputTextStyle } from "./AppInputTextStyle";

const AppInputText: React.FC<InputProps> = ({
  defaultValue,
  required,
  width,
  height,
  type,
  placeholder,
  className,
  onChange,
  refer,
}) => {
  return (
    <div css={inputTextContainer}>
      <input
        css={[inputTextStyle, { width }, { height }]}
        ref={refer}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default AppInputText;
