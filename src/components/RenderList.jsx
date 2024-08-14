const RenderList = ({ itemList }) => {
  return (
    <div className="list__render__UI">
      {itemList.map((ele, index) => (
        <span key={index}>{ele}</span>
      ))}
    </div>
  );
};

export default RenderList;
