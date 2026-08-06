from fastapi import APIRouter
from pydantic import BaseModel

from services.news_service import search_news
from services.article_service import extract_article
from services.inference_service import predict
from services.summary_service import summarize

router = APIRouter()


class SearchRequest(BaseModel):
    query: str


@router.post("/search")
def search(request: SearchRequest):

    articles = search_news(request.query)

    results = []

    for article in articles:

        # Download full article
        full_text = extract_article(article["url"])

        if not full_text:
            continue

        # Generate summary
        summary = summarize(full_text)

        # Predict bias & stance using the full article
        prediction = predict(full_text)

        # Store result
        results.append({
            "title": article["title"],
            "summary": summary,
            "source": article["source"]["name"],
            "url": article["url"],
            "image": article["urlToImage"],
            "published": article["publishedAt"],

            "bias": prediction["bias"],
            "stance": prediction["stance"]
        })

    return results