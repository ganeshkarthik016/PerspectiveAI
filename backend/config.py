from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent

MODELS_DIR = BASE_DIR / "models"

BIAS_MODEL_PATH = MODELS_DIR / "bias_model"
STANCE_MODEL_PATH = MODELS_DIR / "stance_model"