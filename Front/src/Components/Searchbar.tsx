import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { linkState } from '../recoil'; // Assuming you have a Recoil atom called "linkState"

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchLink, setSearchLink] = useRecoilState(linkState);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchLink(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchLink);
    };

    return (
        <>
            <input type="text" value={searchLink} onChange={handleInputChange} />
            <button onClick={handleSearch}>요약해버리기</button>
        </>
    );
};

export default SearchBar;
