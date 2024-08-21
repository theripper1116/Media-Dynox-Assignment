import { TILE__DATA } from "../utils/displayTileData";

const DisplayTile = ({ setBackgroundColor }) => {
  return (
    <div className="display__tile__UI">
      <h1 style={{ fontSize: "150px" }}>Interior Design</h1>
      {TILE__DATA &&
        TILE__DATA.map((ele) => {
          return (
            <div key={ele.id}>
              <img className="display__tile__UI__image" src={ele.imageLink} loading="lazy"/>
              <span className="display__title__title">{ele.title}</span>
              {setBackgroundColor(ele.backgroundColor)}
              <br />
              <br />
              <br />
            </div>
          );
        })}
    </div>
  );
};

export default DisplayTile;
