import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchLink, setSearchLink] = useState(''); 

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchLink(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchLink);
    };

    return (
        <div>
            <input type="text" value={searchLink} onChange={handleInputChange} />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
