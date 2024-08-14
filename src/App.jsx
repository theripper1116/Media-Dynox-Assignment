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
  const [dataForRenderList, setDataForRenderList] = useState({
    input: "default",
    dataArray: [],
  });
  const [backgroundColor, setBackgroundColor] = useState();

  const handleVisibility = (input) => {
    console.log(dataForRenderList);
    if (input === dataForRenderList.input)
      setVisibilityForRenderList((prev) => !prev);
  };

  const passListDataToRenderList = (input) => {
    switch (input) {
      case "SPACE__LIST": {
        // setDataForRenderList((prev) => {
        //   console.log(prev);
        //   prev.input = input;
        //   prev.dataArray = SPACE__LIST;
        // });
        setDataForRenderList({
          input: input,
          dataArray: SPACE__LIST,
        });
        handleVisibility(input);
        break;
      }
      case "TYPE__LIST": {
        setDataForRenderList({
          input: input,
          dataArray: TYPE__LIST,
        });
        handleVisibility(input);
        break;
      }
      case "STYLE__LIST": {
        setDataForRenderList({
          input: input,
          dataArray: STYLE__LIST,
        });
        handleVisibility(input);
        break;
      }
      case "CITY__LIST": {
        setDataForRenderList({
          input: input,
          dataArray: CITY__LIST,
        });
        handleVisibility(input);
        break;
      }
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
          {dataForRenderList?.dataArray && (
            <RenderList itemList={dataForRenderList.dataArray} />
          )}
        </div>
      )}
      <Navbar passListDataToRenderList={passListDataToRenderList} />
    </div>
  );
}

export default App;
