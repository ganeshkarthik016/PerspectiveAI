import torch

from transformers import (
    AutoTokenizer,
    AutoModelForSequenceClassification
)

from config import (
    BIAS_MODEL_PATH,
    STANCE_MODEL_PATH
)


class ModelManager:

    def __init__(self):

        self.device = torch.device(
            "cuda" if torch.cuda.is_available() else "cpu"
        )

        print(f"Using device: {self.device}")

        # Load tokenizer
        self.tokenizer = AutoTokenizer.from_pretrained(
            BIAS_MODEL_PATH
        )

        # Load bias model
        self.bias_model = AutoModelForSequenceClassification.from_pretrained(
            BIAS_MODEL_PATH
        )

        self.bias_model.to(self.device)
        self.bias_model.eval()

        # Load stance model
        self.stance_model = AutoModelForSequenceClassification.from_pretrained(
            STANCE_MODEL_PATH
        )

        self.stance_model.to(self.device)
        self.stance_model.eval()

        print("Models loaded successfully!")
        
model_manager = ModelManager()