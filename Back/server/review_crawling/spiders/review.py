import scrapy
from review_crawling.items import CommentItem

class rewviewSpider(scrapy.Spider):
    name = 'reviews'
    start_urls = ['https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-mvc-1#reviews']  # 실제 댓글 페이지 URL로 변경

    def parse(self, response):
        for comment_section in response.css('/html/body/div[1]/main/section/div[3]/div/div/div[1]/div/div/section'):  # 댓글 섹션의 CSS 선택자로 변경
            item = CommentItem()
            item['reivew'] = comment_section.css('//*[@id="reviews"]/div[5]/div[2]/div[1]/div[3]').get()
            yield item