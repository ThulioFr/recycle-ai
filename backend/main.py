import os

# Limites antes de importar bibliotecas pesadas
os.environ.setdefault("YOLO_CONFIG_DIR", "/tmp/Ultralytics")
os.environ.setdefault("OMP_NUM_THREADS", "1")
os.environ.setdefault("MKL_NUM_THREADS", "1")
os.environ.setdefault("OPENBLAS_NUM_THREADS", "1")
os.environ.setdefault("NUMEXPR_NUM_THREADS", "1")
os.environ.setdefault("VECLIB_MAXIMUM_THREADS", "1")

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
    return {
        "message": "API funcionando"
    }


@app.get("/health")
def health():
    return {
        "status": "ok"
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