import React, { useEffect, useState } from "react";
import "./Sort.styles.css";

const Sort = ({ sortCards }) => {
  const [sortBy, setSortBy] = useState("id");
  const [order, setOrder] = useState("ascendant");

  const handleSortByChange = (e) => setSortBy(e.target.value);

  const handleOrderChange = (e) => setOrder(e.target.value);

  useEffect(() => {
    sortCards(sortBy, order);
  }, [sortBy, order]); //eslint-disable-line

  return (
    <div className="sort-container">
      <div className="form-floating">
        <select
          className="form-select"
          id="sortBySelect"
          onChange={handleSortByChange}
        >
          <option value="id">Number</option>
          <option value="name">Name</option>
        </select>
        <label>Sort By</label>
      </div>

      <div className="form-floating">
        <select
          className="form-select"
          id="orderSelect"
          onChange={handleOrderChange}
        >
          <option value="ascendant">Ascendant</option>
          <option value="descendant">Descendant</option>
        </select>
        <label>Order</label>
      </div>
    </div>
  );
};

export default Sort;
