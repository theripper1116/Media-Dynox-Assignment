import { useState } from "react";
import DisplayTile from "./components/DisplayTile";
import Navbar from "./components/Navbar";
import RenderList from "./components/RenderList";
import {
  CITY__LIST,
  SPACE__LIST,
  STYLE__LIST,
  TYPE__LIST,
} from "./utils/listData";

function App() {
  const [visibilityForRenderList, setVisibilityForRenderList] = useState(false);
  const [dataForRenderList, setDataForRenderList] = useState();
  const [backgroundColor, setBackgroundColor] = useState();

  const passListDataToRenderList = (input) => {
    console.log(input);
    if (input === "SPACE__LIST") {
      setDataForRenderList(SPACE__LIST);
      visibilityForRenderList
        ? setVisibilityForRenderList(false)
        : setVisibilityForRenderList(true);
    } else if (input === "TYPE__LIST") {
      setDataForRenderList(TYPE__LIST);
      visibilityForRenderList
        ? setVisibilityForRenderList(false)
        : setVisibilityForRenderList(true);
    } else if (input === "STYLE__LIST") {
      setDataForRenderList(STYLE__LIST);
      visibilityForRenderList
        ? setVisibilityForRenderList(false)
        : setVisibilityForRenderList(true);
    } else if (input === "CITY__LIST") {
      setDataForRenderList(CITY__LIST);
      visibilityForRenderList
        ? setVisibilityForRenderList(false)
        : setVisibilityForRenderList(true);
    }
  };

  return (
    <div
      style={
        backgroundColor
          ? { backgroundColor: { backgroundColor } }
          : { backgroundColor: "rgb(142, 141, 141);" }
      }
    >
      <div
        className="display__tile"
        style={visibilityForRenderList ? { opacity: "0.1" } : {}}
      >
        <DisplayTile setBackgroundColor={setBackgroundColor} />
      </div>
      {visibilityForRenderList && (
        <div className="render__list__UI">
          <RenderList itemList={dataForRenderList} />
        </div>
      )}
      <Navbar passListDataToRenderList={passListDataToRenderList} />
    </div>
  );
}

export default App;
