import openai

def summarize_reviews(reviews):
    openai.api_key = 'OPENAI_API_KEY'  

    # 수강평들을 하나의 문자열로 결합
    combined_reviews = "\n".join(reviews)

    # GPT-3 요청 전송
    response = openai.Completion.create(
      engine="text-davinci-003",  # 모델
      prompt="전체적인 요약: " + combined_reviews,  # 요약 요청
      max_tokens=150  # 출력 토큰의 최대 개수
    )

    # 요약된 결과 반환
    return response.choices[0].text.strip()
