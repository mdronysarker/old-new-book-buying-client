import React, { useRef } from "react";
import { useSearchContext } from "../../context/SearchContext";

const Search = ({ className, placeholder }) => {
  const { searchQuery, handleSearch } = useSearchContext();
  const searchQueryRef = useRef(searchQuery);

  const handleChange = (e) => {
    const query = e.target.value;
    searchQueryRef.current = query;
    handleSearch(query);
  };

  return (
    <input
      onChange={handleChange}
      onBlur={handleChange}
      value={searchQuery}
      className={className}
      placeholder={placeholder}
    />
  );
};

export default Search;
