import React, { useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import { linkState } from '../Recoil/LinkAtom';

// 부정적 요약 데이터 타입을 정의합니다.
interface NegativeSummaryData {
    id: number;
    content: string;
}

const NegativeSummary: React.FC= () => {
    const [link, setLink] = useRecoilState(linkState);
    const [negativeSummaryData, setNegativeSummaryData] = useState<NegativeSummaryData[]>([]);

    useEffect(() => {
        const fetchNegativeSummaryData = async () => {
            try {
                const response = await fetch(`서버주소는 아직 없음 ${link}`);
                const data = await response.json();
                setNegativeSummaryData(data); // 서버에서 받은 데이터로 negativeSummaryData 업데이트
            } catch (error) {
                console.error('부정적 요약 데이터를 가져오는 중 오류 발생:', error);
            }
        };

        fetchNegativeSummaryData();
    }, [link]);

    return (
        <div>
            <h2>부정적 요약</h2>
            <ul>
                {negativeSummaryData.map((summary) => (
                    <li key={summary.id}>{summary.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default NegativeSummary;
