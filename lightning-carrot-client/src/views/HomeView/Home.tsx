/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
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
import CategoryDropdown from "./../../components/Dropdown/categoryDropdown/CategoryDropDown";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";

const Home = () => {
  const [hide, setHide] = useState(true);
  const [categoryHide, setCategoryHide] = useState(true);
  const [isBookmark, setBookmark] = useState(false);
  const toggleHandler = () => {
    setBookmark(!isBookmark);
  };

  return (
    <>
      <Header />
      <div css={HomeMainWrapper}>
        <div css={HomeMainContainer}>
          <div css={subtitle}>중고 상품</div>
          <div css={filterPart}>
            <div className="part1">
              <AppDropdown
                width={"100px"}
                height={"30px"}
                text={"지역"}
                arrowIcon={<IoIosArrowDown />}
                className={"regionDropdown"}
                mouseEnter={() => {
                  setHide(false);
                }}
                mouseLeave={() => {
                  setHide(true);
                }}
              />
              <AppDropdown
                width={"120px"}
                height={"30px"}
                text={"카테고리"}
                arrowIcon={<IoIosArrowDown />}
                className={"categoryDropdown"}
                mouseEnter={() => {
                  setCategoryHide(false);
                }}
                mouseLeave={() => {
                  setCategoryHide(true);
                }}
              />
              <AppSearch
                width={"300px"}
                height={"20px"}
                placeholder={"상품 검색"}
                className={"searchInput"}
                type={"text"}
              />
            </div>
            <div className="part2">
              <ToggleSwitch
                width={"10rem"}
                text={"관심 상품"}
                onClick={toggleHandler}
                className={
                  isBookmark === true ? "bookMarked" : "not-bookMarked"
                }
              />
            </div>
          </div>
          {hide === false ? (
            <RegionDropdown
              mouseEnter={() => setHide(false)}
              mouseLeave={() => setHide(true)}
            />
          ) : (
            <RegionDropdown className="regionHide" />
          )}
          {categoryHide === false ? (
            <CategoryDropdown
              mouseEnter={() => setCategoryHide(false)}
              mouseLeave={() => setCategoryHide(true)}
            />
          ) : (
            <CategoryDropdown className="categoryHide" />
          )}

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
