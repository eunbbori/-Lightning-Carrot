/** @jsxImportSource @emotion/react */
import Logo1 from "../../assets/images/Logo1.png";
import { BsFillPersonFill } from "react-icons/bs";
import {
  headerWrapper,
  headerContainer,
  logoContainer,
  navContainer,
  myPageIconContainer,
  SignInUpContainer,
} from "./HeaderStyle";
import AppButton from "../Button/AppButton";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isLogin, setLogin] = useState(false);

  return (
    <div css={headerWrapper}>
      <div css={headerContainer}>
        <div css={logoContainer}>
          <img src={Logo1} />
        </div>
        <nav css={navContainer}>
          <div>
            <Link to="/">중고 상품</Link>
          </div>
          <div>
            <Link to="/secondMenu">과외/클래스</Link>
          </div>
        </nav>
        {isLogin && (
          <div css={myPageIconContainer}>
            <AppButton
              width={"4rem"}
              height={"3rem"}
              className={"myPageBtn"}
              type={"button"}
              text={<BsFillPersonFill className="myPageIcon" />}
            />
          </div>
        )}
        {isLogin === false && (
          <div css={SignInUpContainer}>
            <AppButton
              width={"5rem"}
              height={"3rem"}
              className={"loginBtn"}
              type={"button"}
              text={"로그인"}
            />
            <AppButton
              width={"5rem"}
              height={"3rem"}
              className={"RegisterBtn"}
              type={"button"}
              text={"회원가입"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
