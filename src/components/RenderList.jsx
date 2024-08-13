const RenderList = ({ itemList }) => {
  return (
    <div className="list__render__UI">
      {itemList.map((ele) => (
        <span>{ele}</span>
      ))}
    </div>
  );
};

export default RenderList;
