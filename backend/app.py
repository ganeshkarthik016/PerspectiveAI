from fastapi import FastAPI

from services.model_manager import model_manager
from routes.search import router

app = FastAPI(
    title="AI News Perspective Analyzer API"
)

app.include_router(router)