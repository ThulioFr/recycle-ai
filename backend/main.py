import os

from dotenv import load_dotenv
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from detector import detect_image

load_dotenv()

app = FastAPI(title="Recycle AI API")

allowed_origins = os.getenv(
    "ALLOWED_ORIGINS",
    "http://localhost:5173"
).split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin.strip() for origin in allowed_origins],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {
        "status": "ok"
    }


@app.get("/")
def home():
    return {
        "message": "API funcionando"
    }


@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        file_bytes = await file.read()

        if not file_bytes:
            raise ValueError("Nenhuma imagem foi enviada.")

        return detect_image(file_bytes)

    except Exception as error:
        raise HTTPException(
            status_code=400,
            detail=f"Erro ao processar imagem: {str(error)}"
        )