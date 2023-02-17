/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppDropdown from "../../components/Dropdown/AppDropdown";
import Header from "../../components/Header/Header";
import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import {
  HomeMainWrapper,
  HomeMainContainer,
  subtitle,
} from "../../styles/common";
import { addPostBtnStyle, filterPart, GridWrapper } from "./HomeStyle";
import AppSearch from "../../components/Search/AppSearch";
import GridContent from "../../components/GridContent/GridContent";
import RegionDropdown from "../../components/Dropdown/regionDropdown/RegionDropdown";
import CategoryDropdown from "./../../components/Dropdown/categoryDropdown/CategoryDropDown";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import { productList } from "./../../mockData/productMockData";
import AppButton from "../../components/Button/AppButton";

const Home = () => {
  const [hide, setHide] = useState(true);
  const [categoryHide, setCategoryHide] = useState(true);
  const [isBookmark, setBookmark] = useState(false);
  const [addClicked, setAddClicked] = useState(false);
  const navigate = useNavigate();

  const toggleHandler = () => {
    setBookmark(!isBookmark);
  };
  const addPostHandler = () => {
    setAddClicked(!addClicked);
  };
  const addProductHandler = () => {
    //로그인 됐을 때만
    navigate("/addPost/product");
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
                toggleProps={isBookmark}
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
          {addClicked === false && (
            <AppButton
              css={addPostBtnStyle}
              width={"11rem"}
              height={"4rem"}
              className={"addPostBtn"}
              type={"button"}
              icon={<FaPlus />}
              text={"글쓰기"}
              onClick={addPostHandler}
            />
          )}
          {addClicked === true && (
            <AppButton
              css={addPostBtnStyle}
              width={"5rem"}
              height={"4rem"}
              className={"addPostCancelBtn"}
              type={"button"}
              icon={<IoIosClose />}
              onClick={addPostHandler}
            />
          )}
          {addClicked === true && (
            <AppButton
              css={addPostBtnStyle}
              width={"12rem"}
              height={"3rem"}
              className={"addProductBtn"}
              type={"button"}
              text={"내 물건 팔기"}
              onClick={addProductHandler}
            />
          )}
          {addClicked === true && (
            <AppButton
              css={addPostBtnStyle}
              width={"12rem"}
              height={"3rem"}
              className={"addClassBtn"}
              type={"button"}
              text={"과외/클래스"}
            />
          )}
          <div css={GridWrapper}>
            {productList.map((product, idx) => (
              <GridContent
                key={idx}
                img={product.img}
                title={product.title}
                regionFull={product.regionFull}
                category={product.category}
                price={product.price}
                heartCount={product.heartCount}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
