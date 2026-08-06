from newsapi import NewsApiClient

from config import NEWS_API_KEY

newsapi = NewsApiClient(api_key=NEWS_API_KEY)


def search_news(query: str, page_size: int = 10):

    response = newsapi.get_everything(
        q=query,
        language="en",
        sort_by="relevancy",
        page_size=page_size
    )

    return response["articles"]