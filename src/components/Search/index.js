import React from "react";

const Search = ({ setValue, placeholder }) => {
  const handleChange = (e) => setValue(e.target.value.toLowerCase());
  return (
    <div className="input-group" style={{ width: 250 }}>
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
