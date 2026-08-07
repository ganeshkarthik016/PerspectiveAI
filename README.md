# NewsLens 🔎

### AI-Powered News Perspective Analyzer

NewsLens is a web application that helps users explore how different news sources present the same topic.

The application retrieves relevant news articles, extracts their content, generates concise summaries, and uses a fine-tuned **RoBERTa** model to classify the political perspective of each article as **Left, Center, or Right**.

The goal is not to determine whether an article is true or false, but to help users **compare different perspectives on the same topic**.

---

## ✨ Features

- 🔎 Search for news topics
- 📰 Retrieve articles from multiple news sources
- ✂️ Generate concise article summaries using **BART**
- 🧠 Predict political perspective using a fine-tuned **RoBERTa** model
- ⚖️ Classify articles as:
  - Left
  - Center
  - Right

- 📊 Group articles by political perspective
- 🌐 React-based user interface
- ⚡ FastAPI backend for AI inference and news processing

---

## 🏗️ System Architecture

```text
                    User
                     │
                     ▼
              React Frontend
                     │
                     │ HTTP Request
                     ▼
              FastAPI Backend
                     │
                     ▼
                 NewsAPI
                     │
                     ▼
             Article Extraction
                     │
              ┌──────┴──────┐
              ▼             ▼
        BART Summarizer   RoBERTa
              │             │
              ▼             ▼
           Summary      Bias Prediction
                            │
                    ┌───────┼───────┐
                    ▼       ▼       ▼
                  Left    Center   Right
                    │       │       │
                    └───────┼───────┘
                            ▼
                     React Frontend
```

---

## 🤖 AI Pipeline

### 1. Article Retrieval

The user enters a search query through the React frontend.

The backend sends the query to **NewsAPI** and retrieves relevant article metadata and URLs.

### 2. Article Extraction

The backend extracts the full text from the returned article URLs.

### 3. Summarization

The extracted article text is passed to **BART (facebook/bart-large-cnn)**.

BART generates a shorter summary containing the main information from the article.

### 4. Tokenization

Before text is processed by the transformer models, it is converted into tokens using Hugging Face tokenizers.

```text
Raw Text
   ↓
Tokenizer
   ↓
Token IDs
   ↓
Transformer Model
   ↓
Prediction / Summary
```

### 5. Political Perspective Classification

The article text is passed to our fine-tuned **RoBERTa** classification model.

The model predicts one of three categories:

```text
Left
Center
Right
```

The predicted category is then returned to the frontend.

---

## 🧠 Models Used

| Model       | Purpose                              |
| ----------- | ------------------------------------ |
| **BART**    | Abstractive news summarization       |
| **RoBERTa** | Political perspective classification |

### BART

`facebook/bart-large-cnn` is used to generate concise summaries of retrieved news articles.

### RoBERTa

A RoBERTa-based sequence classification model was fine-tuned using a labeled news-bias dataset to classify articles into Left, Center, and Right political perspectives.

---

## 📊 Dataset

The political perspective classifier was trained using the following dataset:

**News Bias Detection Dataset**

[Hugging Face Dataset](https://huggingface.co/datasets/cmpatino/news-bias-detection-dataset?utm_source=chatgpt.com)

The dataset contains political perspective categories including:

- Political Left
- Political Center
- Political Right

The dataset provides training, validation, and test splits.

---

## 📈 Model Performance

The trained RoBERTa model achieved the following validation results:

| Metric    |      Score |
| --------- | ---------: |
| Accuracy  | **86.60%** |
| Precision | **86.68%** |
| Recall    | **86.60%** |
| F1 Score  | **86.60%** |

---

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Tailwind CSS
- Axios
- Vite

### Backend

- Python
- FastAPI
- Uvicorn
- Requests
- NewsAPI

### Machine Learning

- PyTorch
- Hugging Face Transformers
- RoBERTa
- BART
- Hugging Face Tokenizers

### Development

- Google Colab
- Git
- GitHub
- VS Code

---

## 📁 Project Structure

```text
AI-News-Perspective-Analyzer/
│
├── backend/
│   ├── routes/
│   │   └── search.py
│   │
│   ├── services/
│   │   ├── article_service.py
│   │   ├── inference_service.py
│   │   ├── news_service.py
│   │   └── summary_service.py
│   │
│   ├── models/
│   │   └── ...
│   │
│   ├── app.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── types/
│   │
│   └── package.json
│
├── .gitignore
└── README.md
```

> Trained model weights are excluded from the Git repository because of their large file size.

---

## 🚀 Running the Project

### 1. Clone the repository

```bash
git clone <repository-url>
cd AI-News-Perspective-Analyzer
```

### 2. Backend Setup

Create a Python virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r backend/requirements.txt
```

Create a `.env` file inside the backend:

```env
NEWS_API_KEY=your_newsapi_key
```

Start the FastAPI server:

```bash
uvicorn app:app --reload
```

The backend will run at:

```text
http://127.0.0.1:8000
```

FastAPI documentation will be available at:

```text
http://127.0.0.1:8000/docs
```

### 3. Frontend Setup

Navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

---

## 🔐 Environment Variables

The project requires API credentials that should **not** be committed to Git.

Example:

```env
NEWS_API_KEY=your_api_key
```

Add `.env` to `.gitignore`.

---

## ⚠️ Limitations

- Political perspective classification is a model prediction and should not be treated as an objective fact.
- Classification performance depends on the quality and distribution of the training data.
- Article extraction may fail for websites that restrict automated access.
- Summarization quality can vary depending on article structure and length.
- The current system primarily supports English-language news content.

---

## 🔮 Future Improvements

- Improve classification accuracy with larger and more diverse datasets
- Add multilingual news analysis
- Add more news sources and APIs
- Provide confidence visualization for predictions
- Improve long-article summarization using chunking
- Deploy the complete application online
- Add article-to-article comparison
- Provide additional transparency about model predictions

---

## 👨‍💻 Authors

**Ganesh Karthik**
B.Tech Computer Science Engineering
IIITDM Jabalpur

GitHub: [ganeshkarthik016](https://github.com/ganeshkarthik016?utm_source=chatgpt.com)

---

## 📄 License

This project is licensed under the **MIT License**.

See [`LICENSE`](LICENSE) for details.

---

## ⚖️ Disclaimer

NewsLens is an educational and research-oriented project.

The political perspective labels are **AI-generated predictions** based on patterns learned from the training data. They do not represent an absolute judgment of an article's political ideology, factual accuracy, or credibility.

Users should consult the original articles and multiple reliable sources when evaluating news.

---

### Built for learning, experimentation, and better news comparison.
