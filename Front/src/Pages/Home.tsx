import React from 'react';
import { Link } from 'react-router-dom';

function home() {

    return (
        <>
            <h1>아이엠리딩맨 리마스터 : 나 혼자 서버부터 클라이언트까지</h1>
            
            <Link to="/results">Go to Results</Link>
        </>
    );
}

export default home;
