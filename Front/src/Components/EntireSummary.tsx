import React, { useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import { linkState } from '../Recoil/LinkAtom';

//  요약 데이터 타입을 정의합니다.
interface EntireSummaryData {
    id: number;
    content: string;
}

const EntireSummary: React.FC= () => {
    const [link, setLink] = useRecoilState(linkState);
    const [EntireSummaryData, setEntireSummaryData] = useState<EntireSummaryData[]>([]);

    useEffect(() => {
        const fetchEntireSummaryData = async () => {
            try {
                const response = await fetch(`서버주소는 아직 없음 ${link}`);
                const data = await response.json();
                setEntireSummaryData(data); // 서버에서 받은 데이터로 EntireSummaryData 업데이트
            } catch (error) {
                console.error('수강평 요약 데이터를 가져오는 중 오류 발생:', error);
            }
        };

        fetchEntireSummaryData();
    }, [link]);

    return (
        <div>
            <h2>수강평 요약</h2>
            <ul>
                {EntireSummaryData.map((summary) => (
                    <li key={summary.id}>{summary.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default EntireSummary;