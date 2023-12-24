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

# WebDriver 옵션 설정
options = Options()
# options.headless = True  # 필요한 경우 헤드리스 모드 사용


service = ChromeService(ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=options)

# 웹사이트 열기
driver.get('https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-mvc-1#reviews')

# try:
#     while True:
#         # '수강평 더보기' 버튼 기다리기
#         more_button = WebDriverWait(driver, 10).until(
#             EC.presence_of_element_located((By.CSS_SELECTOR, '#reviews > div.cd-review__more > button'))
#         )

#         # 스크롤하여 버튼이 보이게 하기
#         driver.execute_script('arguments[0].scrollIntoView();', more_button)
#         time.sleep(1)  # 스크롤 후 잠시 대기
        
#         # 버튼 클릭
#         driver.execute_script("arguments[0].click();", more_button)


#         # 로딩 대기
#         time.sleep(2)

# except Exception as e:
#     print("모든 댓글 로드 완료 또는 오류 발생:", e)

# 후기 데이터 추출 로직
all_reviews = []

# 후기 섹션의 모든 후기 박스
reviews = driver.find_elements(By.CSS_SELECTOR, '#main > section > div.cd-content > div > div > div.ac-cd-8.ac-ct-12.ac-left-wrapper > div > div')

# 반복문으로 모든 수강평 브루트포스 크롤링
for review in reviews:
    all_reviews.append(review.find_element(By.CSS_SELECTOR, 'div.review-el__body'))
    print(review.find_element(By.CSS_SELECTOR, 'div.review-el__body'))

# 웹드라이버 종료
driver.quit()
