from pathlib import Path
from dotenv import load_dotenv
import os

BASE_DIR = Path(__file__).resolve().parent

load_dotenv(BASE_DIR / ".env")

MODELS_DIR = BASE_DIR / "models"

BIAS_MODEL_PATH = MODELS_DIR / "bias_model"
STANCE_MODEL_PATH = MODELS_DIR / "stance_model"

NEWS_API_KEY = os.getenv("NEWS_API_KEY")