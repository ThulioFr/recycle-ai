from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

import shutil
import os

from detector import detect_image

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs("outputs", exist_ok=True)

app.mount("/outputs", StaticFiles(directory="outputs"), name="outputs")


@app.get("/")
def home():
    return {
        "message": "API funcionando"
    }


@app.post("/predict")
async def predict(file: UploadFile = File(...)):

    file_path = f"{UPLOAD_FOLDER}/{file.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = detect_image(file_path)

    return result