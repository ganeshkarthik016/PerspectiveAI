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

    bias_prediction = torch.argmax(
        bias_output.logits,
        dim=1
    ).item()

    stance_prediction = torch.argmax(
        stance_output.logits,
        dim=1
    ).item()

    return {
        "bias": BIAS_LABELS[bias_prediction],
        "stance": STANCE_LABELS[stance_prediction]
    }