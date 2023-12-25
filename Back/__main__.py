from Back.dynamicCrawling.dynamicLoad import dynamicCrawlingReview
from fastapi import FastAPI, HTTPException
from Back.summaryReview import summarize_review

app = FastAPI()

@app.post("/reviews")
def get_reviews(link:str):
    #크롤링
    try:
        # json 형태로 수강평 저장
        return dynamicCrawlingReview(link)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
