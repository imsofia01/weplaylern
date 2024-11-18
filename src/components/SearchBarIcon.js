import React from "react";
import { useState } from "react";

const SearchBarIcon = ({onSearch}) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
      e.preventDefault();
      if (onSearch) {
        onSearch(searchQuery); // Pass the query to a parent component or handle it here
      }
    };
    
    return(

        <div className="flex flex-col">
        <form onSubmit={handleSearch} className="flex w-full max-w-md m-10 ml-32">
          <input
            type="text"
            className="flex-grow w-[600px] p-2 border text-center border-gray-300 rounded-[20px] focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Search..."
            
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
    )
}

export default SearchBarIcon;