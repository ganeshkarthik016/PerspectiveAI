from transformers import pipeline

summarizer = pipeline(
    "summarization",
    model="facebook/bart-large-cnn"
)


def summarize(text: str):

    # Prevent very short articles from being summarized
    if len(text.split()) < 120:
        return text

    summary = summarizer(
        text[:3000],
        max_length=120,
        min_length=40,
        do_sample=False
    )

    return summary[0]["summary_text"]