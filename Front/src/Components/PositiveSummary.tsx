import React, { useState,useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import {linkState} from '../Recoil/LinkAtom';

// 긍정적 요약 데이터 타입을 정의합니다.
interface PositiveSummaryData {
    id: number;
    content: string;
}

const PositiveSummary: React.FC = () => {
    const [link, setLink] = useRecoilState(linkState);
    const [PositiveSummaryData, setPositiveSummaryData] =  useState<PositiveSummaryData[]>([]);

    useEffect(() => {
        const fetchPositiveSummaryData = async () => {
            try {
                const response = await fetch(`서버주소는 아직 없음`);
                const data = await response.json();
                setPositiveSummaryData(data); // 상태 업데이트
            } catch (error) {
                console.error('긍정적 요약 데이터를 가져오는 중 오류 발생:', error);
            }
        };

        fetchPositiveSummaryData();
    }, []); // 의존성 배열 비워서 마운트 시 한 번만 실행

    return (
        <div>
            <h2>긍정적인 요약</h2>
            <ul>
                {PositiveSummaryData.map((summary) => (
                    <li key={summary.id}>{summary.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default PositiveSummary;
