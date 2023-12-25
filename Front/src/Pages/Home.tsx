import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../Components/Searchbar';


function home() {
    return (
        <>
            <h1>아이엠리딩맨 리마스터 </h1>
            <SearchBar/>
        </>
    );
}

export default home;
