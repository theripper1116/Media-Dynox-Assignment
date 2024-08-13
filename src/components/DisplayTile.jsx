import { TILE__DATA } from "../utils/displayTileData";

const DisplayTile = () => {
  return (
    <div className="display__tile__UI">
    <h1 style={{fontSize: "100px"}}>Interior Design</h1>
      {TILE__DATA &&
        TILE__DATA.map((ele) => {
          return (
            <div>
              <img className="display__tile__UI__image" src={ele.imageLink} />
              <span className="display__title__title">{ele.title}</span>
            </div>
          );
        })}
    </div>
  );
};

export default DisplayTile;
