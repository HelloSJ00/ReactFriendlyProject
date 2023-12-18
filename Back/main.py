from typing import Union
from fastapi import FastAPI

# FastAPI 객체 생성
app = FastAPI() 

# FastAPI 객체의 get() 데코레이터를 사용하여 경로를 설정
@app.get("/")
def read_root():
    return {"Hello": "World"}

# 경로 매개변수를 사용하여 경로를 설정
@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}