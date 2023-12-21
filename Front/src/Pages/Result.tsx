import React from 'react';
import PositiveSummary from '../Components/PositiveSummary';
import NegativeSummary from '../Components/NegativeSummary';


const result = () => {
    return (
       <>
        <div>
            <PositiveSummary/> 
            <NegativeSummary/>
        </div>
       </>
    );
};

export default result;
