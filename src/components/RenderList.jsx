const RenderList = ({ itemList }) => {
  return (
    <div className="render__list__UI__div">
      {itemList.map((ele, index) => (
        <span key={index}>{ele}</span>
      ))}
    </div>
  );
};

export default RenderList;
