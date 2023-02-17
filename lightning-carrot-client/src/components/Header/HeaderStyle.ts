/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const headerWrapper = css`
  border-bottom: 2px solid ${theme.mainColor};
`;
export const headerContainer = css`
  display: flex;
  width: 70vw;
  height: 10vh;
  margin: auto;
`;
export const logoContainer = css`
  place-self: center;
  img {
    width: 8rem;
    height: 5rem;
  }
`;
export const navContainer = css`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  place-content: center;
  font-size: 1.1rem;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const myPageIconContainer = css`
  align-self: center;

  .myPageIcon {
    width: 3rem;
    height: 2rem;
  }
`;
export const SignInUpContainer = css`
  display: flex;
  align-items: center;
  .loginBtn {
    font-family: inherit;
    font-size: 1rem;
  }
  .RegisterBtn {
    font-family: inherit;
    font-size: 1rem;
  }
`;
