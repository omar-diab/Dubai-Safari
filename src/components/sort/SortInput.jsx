import "./Sort.css";

const Sort = ({ toursLength, sortItem, setSortItem }) => {
  return (
    <div className="sort-section">
      <div className="sort-container">
        <div className="available-tours">
          <strong>{toursLength}</strong> tours found
        </div>
        <div className="sorting-div">
          <h2 className="sorting-title">Sort by</h2>
          <select value={sortItem} onChange={(e) => setSortItem(e.target.value)}>
            <option value="recomended">Recomended</option>
            <option value="low">Lower Price</option>
            <option value="high">Higher Price</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Sort;
