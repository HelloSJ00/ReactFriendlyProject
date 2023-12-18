import React, { useEffect, useState } from 'react';

interface PositiveSummaryProps {
    link: string; // 링크 prop으로 받아옴
}

interface PositiveSummaryData {
    id: number;
    content: string;
}

const PositiveSummary: React.FC<PositiveSummaryProps> = ({ link }) => {
    const [PositiveSummaryData, setPositiveSummaryData] = useState<PositiveSummaryData[]>([]);

    useEffect(() => {
        const fetchPositiveSummaryData = async () => {
            try {
                const response = await fetch(`서버주소는 아직 없음 ${link}`);
                const data = await response.json();
                setPositiveSummaryData(data); // 서버에서 받은 데이터로 PositiveSummaryData 업데이트
            } catch (error) {
                console.error('긍정적 요약 데이터를 가져오는 중 오류 발생:', error);
            }
        };

        fetchPositiveSummaryData();
    }, [link]);

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
