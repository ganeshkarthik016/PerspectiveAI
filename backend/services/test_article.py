from article_service import extract_article

url = "https://www.theverge.com/ai-artificial-intelligence/974018/pippa-seedance-artist-royalties"

article = extract_article(url)

print(article)