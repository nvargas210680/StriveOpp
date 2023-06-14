import React from "react";

export const SearchBar = ({ setResults }) => {
    const [input, setInput ] = useState("");

    return<div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input id="search-icon" />
        <input 
            placeholder="Type to search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
        />
    </div>
}