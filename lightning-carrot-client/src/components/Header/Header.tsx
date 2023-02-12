/** @jsxImportSource @emotion/react */
import Logo1 from "../../assets/images/Logo1.png";
import { BsFillPersonFill } from "react-icons/bs";
import {
  headerWrapper,
  headerContainer,
  logoContainer,
  navContainer,
  myPageIconContainer,
} from "./HeaderStyle";
import AppButton from "../Button/AppButton";

const Header = () => {
  return (
    <div css={headerWrapper}>
      <div css={headerContainer}>
        <div css={logoContainer}>
          <img src={Logo1} />
        </div>
        <nav css={navContainer}>
          <div>중고 상품</div>
          <div>과외/클래스</div>
        </nav>
        <div css={myPageIconContainer}>
          <AppButton
            width={"4rem"}
            height={"3rem"}
            className={"myPageBtn"}
            type={"button"}
            text={<BsFillPersonFill className="myPageIcon" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
