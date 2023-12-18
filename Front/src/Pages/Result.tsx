import React from 'react';
import PositiveSummary from '../Components/PositiveSummary';
import NegativeSummary from '../Components/NegativeSummary';


const result = ({ link }: { link: string }) => {
    return (
       <>
        <div>
            <PositiveSummary link="https://www.naver.com" /> 
            <NegativeSummary link="https://www.naver.com" />
        </div>
       </>
    );
};

export default result;
