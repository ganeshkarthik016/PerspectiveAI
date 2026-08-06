import torch

from services.model_manager import model_manager


BIAS_LABELS = {
    0: "Left",
    1: "Center",
    2: "Right"
}

STANCE_LABELS = {
    0: "Agree",
    1: "Discuss",
    2: "Disagree",
    3: "Unrelated"
}


def predict(text: str):

    inputs = model_manager.tokenizer(
        text,
        return_tensors="pt",
        truncation=True,
        padding=True,
        max_length=512
    )

    inputs = {
        key: value.to(model_manager.device)
        for key, value in inputs.items()
    }

    with torch.no_grad():

        bias_output = model_manager.bias_model(**inputs)

        stance_output = model_manager.stance_model(**inputs)

    # Convert logits to probabilities
    bias_probs = torch.softmax(bias_output.logits, dim=1)
    stance_probs = torch.softmax(stance_output.logits, dim=1)

    # Get predicted class
    bias_prediction = torch.argmax(bias_probs, dim=1).item()
    stance_prediction = torch.argmax(stance_probs, dim=1).item()

    # Get confidence
    bias_confidence = bias_probs[0][bias_prediction].item()
    stance_confidence = stance_probs[0][stance_prediction].item()

    return {
        "bias": {
            "label": BIAS_LABELS[bias_prediction],
            "confidence": round(bias_confidence * 100, 2)
        },
        "stance": {
            "label": STANCE_LABELS[stance_prediction],
            "confidence": round(stance_confidence * 100, 2)
        }
    }