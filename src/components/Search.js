import React, {useState} from "react";

function Search({ searchText, onSearchChange }) {
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        //We want to set the value of whatever is in the search input field
        value={searchText}
        //passed setSearchText to reset the value of searchText to what we put in the search field:
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
