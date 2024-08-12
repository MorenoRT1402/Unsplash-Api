import { useState } from "react";
import { imagesPath } from "../app/config/paths";

// eslint-disable-next-line react/prop-types
export const SearchBar = ({placeholder, filterByDescription}) => {
    const [query, setQuery] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        filterByDescription(query)
    }

    const handleInputChange = e => {
        setQuery(e.target.value);
    }

    return (
        <form className="searchbar" onSubmit={onSubmit}>
            <button type="submit">
                <img src={`${imagesPath}/icon.png`} alt="" />
            </button>
            <input 
                type="text" 
                name="search" 
                placeholder={placeholder} 
                value={query} 
                onChange={handleInputChange}
            />
        </form>
    );
}