from transformers import pipeline, AutoTokenizer

# Load tokenizer and summarizer once
tokenizer = AutoTokenizer.from_pretrained("facebook/bart-large-cnn")

summarizer = pipeline(
    "summarization",
    model="facebook/bart-large-cnn"
)


def summarize(text: str):

    # Skip summarization for very short articles
    if len(text.split()) < 120:
        return text

    try:

        # Truncate safely to BART's maximum input size (1024 tokens)
        inputs = tokenizer(
            text,
            max_length=1024,
            truncation=True,
            return_tensors="pt"
        )

        truncated_text = tokenizer.decode(
            inputs["input_ids"][0],
            skip_special_tokens=True
        )

        summary = summarizer(
            truncated_text,
            max_length=120,
            min_length=40,
            do_sample=False
        )

        return summary[0]["summary_text"]

    except Exception as e:

        print("Summarization Error:", e)

        # Fallback so the app never crashes
        return text[:400] + "..."