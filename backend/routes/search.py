from fastapi import APIRouter
from pydantic import BaseModel

from services.inference_service import predict

router = APIRouter()


class PredictionRequest(BaseModel):
    text: str


@router.post("/predict")
def predict_text(request: PredictionRequest):

    result = predict(request.text)

    return result