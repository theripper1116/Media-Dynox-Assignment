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
    <>
      <div className="display__tile">
        <DisplayTile />
        {visibilityForRenderList && <RenderList itemList={dataForRenderList} />}
      </div>
      <Navbar passListDataToRenderList={passListDataToRenderList} />
    </>
  );
}

export default App;
