import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchLink, setSearchLink] = useState<string>('');  // 검색창에 입력한 링크

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchLink(event.target.value);
    };

    const handleSearch = () => {// 검색 버튼 클릭 시
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
