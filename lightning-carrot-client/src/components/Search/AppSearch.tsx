/** @jsxImportSource @emotion/react */

import React from "react";
import { SearchInputProps } from "../../interface/SearchInputProps";
import {
  searchContainer,
  searchStyle,
  searchIconContainer,
} from "./AppSearchStyle";
import { BiSearchAlt2 } from "react-icons/bi";

const AppSearch: React.FC<SearchInputProps> = ({
  width,
  height,
  placeholder,
  className,
  onChange,
  type,
}) => {
  return (
    <div css={searchContainer}>
      <div css={searchIconContainer}>
        <BiSearchAlt2 />
      </div>
      <input
        css={[searchStyle, { width }, { height }]}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

export default AppSearch;
