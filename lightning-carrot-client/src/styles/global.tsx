import { Global, css } from "@emotion/react";

const style = css`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    box-sizing: border-box;
    @font-face {
      font-family: "Pretendard-Regular";
      src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
        format("woff");
      font-weight: 400;
      font-style: normal;
    }

    font-family: "Pretendard-Regular";
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
