import trafilatura


def extract_article(url: str):

    downloaded = trafilatura.fetch_url(url)

    if downloaded is None:
        return None

    text = trafilatura.extract(downloaded)

    return text