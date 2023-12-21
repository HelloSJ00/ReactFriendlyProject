import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { linkState } from '../Recoil/LinkAtom'; 
import { useNavigate } from 'react-router-dom';


const SearchBar: React.FC = () => {
    const [searchLink, setSearchLink] = useRecoilState(linkState);
    const [errorMessage, setErrorMessage] = useState(''); // 에러 메시지 상태
    const navigate = useNavigate(); // useNavigate 훅 사용

    const isValidLink = (link: string) => {
        // 링크 유효성 검사 로직 (간단한 예시)
        return link.trim() !== '' && link.includes('.');
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
        setSearchLink(event.target.value);
        setErrorMessage(''); // 입력 변경 시 에러 메시지 초기화
    };

    const handleButtonClick = () => { // 버튼 클릭 핸들러
        if (!isValidLink(searchLink)) {
            setErrorMessage('유효한 링크를 입력해주세요.'); // 에러 메시지 설정
            return;
        }
        navigate('/result');
    };


    return (
        <>
            <input type="text" value={searchLink} onChange={handleInputChange} />
            <button onClick={handleButtonClick}>요약해버리기</button>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>} {/* 에러 메시지 표시 */}
        </>
    );
};

export default SearchBar;
