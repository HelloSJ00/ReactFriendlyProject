from Back.dynamicCrawling.dynamicLoad import dynamicCrawlingReview
from fastapi import FastAPI, HTTPException
from Back.summaryReview import summarize_reviews
import json

app = FastAPI()

@app.post("/reviews")
def get_summary(link: str):
    try:
        # 크롤링으로 수강평 가져오기
        reviews_json = dynamicCrawlingReview(link)

        # 수강평을 Python 객체로 변환
        reviews = json.loads(reviews_json)

        # 수강평 요약
        summary = summarize_reviews(reviews)

        # 요약된 데이터를 JSON 형태로 클라이언트에게 반환
        return {"summary": summary}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
