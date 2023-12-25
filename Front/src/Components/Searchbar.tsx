import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { linkState } from '../Recoil/LinkAtom'; 
import { useNavigate} from 'react-router-dom';

const SearchBar: React.FC = () => {
    const [searchLink, setSearchLink] = useRecoilState(linkState);
    const [errorMessage, setErrorMessage] = useState(''); // 에러 메시지 상태
    const navigate = useNavigate(); // useNavigate 훅 사용

    const isValidLink = (link: string) => {
        // 링크 유효성 검사 로직 (간단한 예시)
        return link.trim() !== '' && link.includes('.');
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newLink = event.target.value;
        if (isValidLink(newLink)) { // 먼저 링크의 유효성을 검사합니다.
          setSearchLink(newLink);  // 유효하면 상태를 업데이트합니다.
          setErrorMessage('');     // 에러 메시지를 초기화합니다.
        } else {
          setErrorMessage('유효한 링크를 입력해주세요.'); // 유효하지 않으면 에러 메시지를 설정합니다.
        }
      };
      
      const handleButtonClick = () => { // 버튼 클릭 핸들러
        if (isValidLink(searchLink)) {
          navigate('/result'); // 링크가 유효하면 결과 페이지로 이동합니다.
        } else {
          setErrorMessage('유효한 링크를 입력해주세요.'); // 유효하지 않으면 에러 메시지를 설정합니다.
        }
      };
      
    return (
        <>
            <input 
                type="text" 
                placeholder="검색어를 입력하세요" 
                value={searchLink} 
                onChange={handleInputChange}
            />
            <button onClick={handleButtonClick}>요약해버리기</button>
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>} {/* 에러 메시지 표시 */}
        </>
    );
};

export default SearchBar;
