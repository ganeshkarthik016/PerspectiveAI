from fastapi import APIRouter
from pydantic import BaseModel

from services.news_service import search_news
from services.article_service import extract_article
from services.inference_service import predict

router = APIRouter()


class SearchRequest(BaseModel):
    query: str


@router.post("/search")
def search(request: SearchRequest):

    articles = search_news(request.query)

    results = []

    for article in articles:

        full_text = extract_article(article["url"])

        if not full_text:
            continue

        prediction = predict(full_text)

        results.append({

            "title": article["title"],
            "source": article["source"]["name"],
            "url": article["url"],
            "image": article["urlToImage"],
            "published": article["publishedAt"],

            "bias": prediction["bias"],
            "stance": prediction["stance"]

        })

    return results