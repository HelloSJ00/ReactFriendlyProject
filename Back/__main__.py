import dynamicCrawlingReview 
from fastapi import FastAPI, HTTPException

app = FastAPI()

@app.get("/")
def input_link(link:str):

if __name__ == "__main__":
    