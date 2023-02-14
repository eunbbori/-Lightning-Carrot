/** @jsxImportSource @emotion/react */

import React from "react";
import { DropdownProps } from "../../interface/DropdownProps";
import { dropdownStyle, arrowStyle } from "./AppDropdownStyle";

const AppDropdown: React.FC<DropdownProps> = ({
  width,
  height,
  text,
  arrowIcon,
  className,
  mouseEnter,
  mouseLeave,
}) => {
  return (
    <div
      css={[dropdownStyle, { width }, { height }]}
      className={className}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <div>{text}</div>
      <div css={arrowStyle}>{arrowIcon}</div>
    </div>
  );
};

export default AppDropdown;
