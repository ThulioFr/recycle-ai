import os

# Limites antes de importar bibliotecas pesadas
os.environ.setdefault("YOLO_CONFIG_DIR", "/tmp/Ultralytics")
os.environ.setdefault("OMP_NUM_THREADS", "1")
os.environ.setdefault("MKL_NUM_THREADS", "1")
os.environ.setdefault("OPENBLAS_NUM_THREADS", "1")
os.environ.setdefault("NUMEXPR_NUM_THREADS", "1")
os.environ.setdefault("VECLIB_MAXIMUM_THREADS", "1")

import gc
import base64
from pathlib import Path
from collections import Counter

import cv2
import numpy as np
from ultralytics import YOLO

try:
    import torch

    torch.set_num_threads(1)
    torch.set_num_interop_threads(1)
except Exception:
    torch = None


BASE_DIR = Path(__file__).resolve().parent
MODEL_PATH = BASE_DIR / "model" / "best.pt"

_model = None


material_colors = {
    "organic": (15, 56, 114),      # marrom
    "paper": (172, 70, 24),        # azul
    "electronic": (0, 132, 255),   # laranja
    "plastic": (24, 24, 173),      # vermelho
    "glass": (35, 145, 29),        # verde
    "metal": (21, 204, 250),       # amarelo
}

default_color = (140, 166, 141)


def get_model():
    global _model

    if _model is None:
        if not MODEL_PATH.exists():
            raise FileNotFoundError(f"Modelo não encontrado em: {MODEL_PATH}")

        _model = YOLO(str(MODEL_PATH))

        print("Modelo carregado:", MODEL_PATH)
        print("Classes do modelo:", _model.names)

    return _model


def resize_image_if_needed(image, max_size=960):
    height, width = image.shape[:2]

    largest_side = max(width, height)

    if largest_side <= max_size:
        return image

    scale = max_size / largest_side
    new_width = int(width * scale)
    new_height = int(height * scale)

    return cv2.resize(
        image,
        (new_width, new_height),
        interpolation=cv2.INTER_AREA
    )


def detect_image(file_bytes: bytes):
    model = get_model()

    np_arr = np.frombuffer(file_bytes, np.uint8)
    image = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

    if image is None:
        raise ValueError("Imagem inválida ou formato não suportado.")

    image = resize_image_if_needed(image, max_size=960)

    results = model(
        image,
        conf=0.35,
        iou=0.5,
        imgsz=640,
        verbose=False
    )

    detections = []
    classes = []
    annotated_image = image.copy()

    for result in results:
        for box in result.boxes:
            cls = int(box.cls[0])
            conf = float(box.conf[0])
            class_name = model.names[cls]

            x1, y1, x2, y2 = map(int, box.xyxy[0])
            color = material_colors.get(class_name, default_color)

            classes.append(class_name)

            detections.append({
                "class": class_name,
                "confidence": round(conf * 100, 2),
                "box": [x1, y1, x2, y2]
            })

            label = f"{class_name} {conf * 100:.1f}%"

            cv2.rectangle(
                annotated_image,
                (x1, y1),
                (x2, y2),
                color,
                3
            )

            text_size, _ = cv2.getTextSize(
                label,
                cv2.FONT_HERSHEY_SIMPLEX,
                0.6,
                2
            )

            text_width, text_height = text_size

            label_y1 = max(y1 - text_height - 12, 0)
            label_y2 = max(y1, text_height + 12)

            cv2.rectangle(
                annotated_image,
                (x1, label_y1),
                (x1 + text_width + 12, label_y2),
                color,
                -1
            )

            text_y = max(y1 - 7, text_height + 5)

            cv2.putText(
                annotated_image,
                label,
                (x1 + 6, text_y),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.6,
                (255, 255, 255),
                1,
                cv2.LINE_AA
            )

    success, buffer = cv2.imencode(
        ".jpg",
        annotated_image,
        [int(cv2.IMWRITE_JPEG_QUALITY), 85]
    )

    output_image_base64 = None

    if success:
        output_image_base64 = base64.b64encode(buffer).decode("utf-8")

    counts = Counter(classes)

    response = {
        "detections": detections,
        "counts": dict(counts),
        "total": len(classes),
        "image": f"data:image/jpeg;base64,{output_image_base64}" if output_image_base64 else None
    }

    del np_arr
    del image
    del annotated_image
    del results

    gc.collect()

    return response