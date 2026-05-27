from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from detector import detect_image

app = FastAPI(title="Recycle AI API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "API funcionando"}


@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        file_bytes = await file.read()
        return detect_image(file_bytes)

    except Exception as error:
        raise HTTPException(
            status_code=400,
            detail=f"Erro ao processar imagem: {str(error)}"
        )