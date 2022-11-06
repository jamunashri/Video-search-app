import React from "react";

const SearchBox = ({ searchText, eventHandler }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search.."
        value={searchText}
        onChange={eventHandler}
      />
    </>
  );
};

export default SearchBox;
