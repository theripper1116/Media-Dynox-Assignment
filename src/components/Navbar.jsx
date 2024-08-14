import { useState } from "react";
import { DENIOT_LOGO_LINK } from "../utils/links";
import RenderList from "./RenderList";
import { SPACE__LIST, STYLE__LIST, TYPE__LIST } from "../utils/listData";

const Navbar = ({ passListDataToRenderList }) => {
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
            <span onClick={() => passListDataToRenderList("SPACE__LIST")}>
              Space {">"}
              <br />
            </span>
            <span onClick={() => passListDataToRenderList("TYPE__LIST")}>
              Type {">"}
              <br />
            </span>
            <span onClick={() => passListDataToRenderList("STYLE__LIST")}>
              Style {">"}
              <br />
            </span>
            <span onClick={() => passListDataToRenderList("CITY__LIST")}>
              City {">"}
              <br />
            </span>
          </div>
          <div className="navbar__UI__items__2">
            <span>
              Interior <br /> Design
            </span>
            <span>Architecture</span>
            <span>Furniture</span>
            <span>
              Q&A <br /> with <br /> JLD
            </span>
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
