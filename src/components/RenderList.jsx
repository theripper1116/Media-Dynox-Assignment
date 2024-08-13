const RenderList = ({ itemList }) => {
  return (
    <div className="list__render__UI">
      {itemList.map((ele) => {
        return ele;
      })}
    </div>
  );
};

export default RenderList;
