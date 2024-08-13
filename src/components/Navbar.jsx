import { useState } from "react";
import { DENIOT_LOGO_LINK } from "../utils/links";
import RenderList from "./RenderList";
import { SPACE__LIST, STYLE__LIST, TYPE__LIST } from "../utils/listData";

const Navbar = () => {
  const [visibilityForSpaceList, setVisibilityForSpaceList] = useState(false);
  const [visibilityForTypeList, setVisibilityForTypeList] = useState(false);
  const [visibilityForStyleList, setVisibilityForStyleList] = useState(false);
  const [visibilityForCityList, setVisibilityForCityList] = useState(false);
  return (
    <>
      <div className="navbar__UI">
        <div className="navbar__UI__div">
          <div className="navbar__UI__items__1">
            <img
              className="navbar__logo"
              src={DENIOT_LOGO_LINK}
              alt="deniot_logo"
            ></img>
            <span>All Projects</span>
            <span onClick={() => setVisibilityForSpaceList((prev) => !prev)}>
              Space {">"}
              <br />
              {visibilityForSpaceList && <RenderList itemList={SPACE__LIST} />}
            </span>
            <span onClick={() => setVisibilityForTypeList((prev) => !prev)}>
              Type {">"}
              <br />
              {visibilityForTypeList && <RenderList itemList={TYPE__LIST} />}
            </span>
            <span onClick={() => setVisibilityForStyleList((prev) => !prev)}>
              Style {">"}
              <br />
              {visibilityForStyleList && <RenderList itemList={STYLE__LIST} />}
            </span>
            <span onClick={() => setVisibilityForCityList((prev) => !prev)}>
              City {">"}
              <br />
              {visibilityForCityList && <RenderList itemList={CITY__LIST} />}
            </span>
          </div>
          <div className="navbar__UI__items__2">
            <span>Interior  <br /> Design</span>
            <span>Architecture</span>
            <span>Furniture</span>
            <span>Q&A <br /> with  <br /> JLD</span>
            <span>Books</span>
            <span>Instagram</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
