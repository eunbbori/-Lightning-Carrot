/** @jsxImportSource @emotion/react */
import AppDropdown from "../../components/Dropdown/AppDropdown";
import Header from "../../components/Header/Header";
import { IoIosArrowDown } from "react-icons/io";
import {
  HomeMainWrapper,
  HomeMainContainer,
  subtitle,
} from "../../styles/common";
import { filterPart, GridWrapper } from "./HomeStyle";
import AppSearch from "../../components/Search/AppSearch";
import GridContent from "../../components/GridContent/GridContent";
import RegionDropdown from "../../components/Dropdown/regionDropdown/RegionDropdown";

const Home = () => {
  return (
    <>
      <Header />
      <div css={HomeMainWrapper}>
        <div css={HomeMainContainer}>
          <div css={subtitle}>중고 상품</div>
          <div css={filterPart}>
            <AppDropdown
              width={"100px"}
              height={"30px"}
              text={"지역"}
              arrowIcon={<IoIosArrowDown />}
              className={"regionDropdown"}
            />
            <AppDropdown
              width={"120px"}
              height={"30px"}
              text={"카테고리"}
              arrowIcon={<IoIosArrowDown />}
              className={"categoryDropdown"}
            />
            <AppSearch
              width={"300px"}
              height={"20px"}
              placeholder={"상품 검색"}
              className={"searchInput"}
              type={"text"}
            />
          </div>
          <RegionDropdown />
          <div css={GridWrapper}>
            <GridContent />
            <GridContent />
            <GridContent />
            <GridContent />
            <GridContent />
            <GridContent />
            <GridContent />
            <GridContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
