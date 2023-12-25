from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException, TimeoutException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service as ChromeService
import json

# WebDriver 옵션 설정
options = Options()
# options.headless = True  # 필요한 경우 헤드리스 모드 사용


service = ChromeService(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=options)
link = 'https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-mvc-1#reviews'

def dynamicCrawlingReview(link:str):

    # 웹사이트 열기
    driver.get(link)
    driver.implicitly_wait(3)

    #수강평 더보기 클릭하기
    try:
        click_cnt = 0
        while click_cnt < 10:
        # while True:
            # '수강평 더보기' 버튼 기다리기
            more_button = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, '#reviews > div.cd-review__more > button'))
            )

            # 스크롤하여 버튼이 보이게 하기
            driver.execute_script('arguments[0].scrollIntoView();', more_button)
            time.sleep(1)  # 스크롤 후 잠시 대기
            
            # 버튼 클릭
            driver.execute_script("arguments[0].click();", more_button)
            click_cnt += 1

            # 로딩 대기
            time.sleep(2)

    except Exception as e:
        print("모든 댓글 로드 완료 또는 오류 발생:", e)

    # 수강평 더보기를 끝까지 누르고 난 후 모든 수강평 추출
    i = 1
    all_reviews_texts = []

    while True:
        try:
            element = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, f"#reviews > div.cd-review__list.review-list > div.review-list__content > div:nth-child({i}) > div.review-el__body"))
            )
            print(element.text)
            all_reviews_texts.append(element.text)
            i += 1
        except (NoSuchElementException, TimeoutException):
            print("더 이상의 요소를 찾을 수 없습니다.")
            break  # 더 이상 요소가 없으므로 반복 종료


    # # 결과 출력
    # for text in all_reviews_texts:
    #     print(text)

    # print(len(all_reviews_texts))
    
    # 수강평 데이터를 JSON 형태로 변환
    reviews_json = json.dumps(all_reviews_texts, ensure_ascii=False)

    # JSON 파일로 저장
    with open('reviews.json', 'w', encoding='utf-8') as f:
        f.write(reviews_json)


    # 웹드라이버 종료
    driver.quit()

# 수강평 크롤링 실행 함수
# dynamicCrawlingReview()