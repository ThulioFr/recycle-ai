from ultralytics import YOLO
from collections import Counter
import cv2
import numpy as np
import base64
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
MODEL_PATH = BASE_DIR / "model" / "best.pt"

model = YOLO(str(MODEL_PATH))

print("Modelo carregado:", MODEL_PATH)
print("Classes do modelo:", model.names)

material_colors = {
    "organic": (15, 56, 114),      # marrom
    "paper": (172, 70, 24),        # azul
    "electronic": (0, 132, 255),   # laranja
    "plastic": (24, 24, 173),      # vermelho
    "glass": (35, 145, 29),        # verde
    "metal": (21, 204, 250),       # amarelo
}

default_color = (140, 166, 141)


def detect_image(file_bytes: bytes):
    np_arr = np.frombuffer(file_bytes, np.uint8)
    image = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

    if image is None:
        raise ValueError("Imagem inválida ou formato não suportado.")

    # results = model(image)
    results = model(
        image,
        conf=0.35,
        iou=0.5,
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

    success, buffer = cv2.imencode(".jpg", annotated_image)

    output_image_base64 = None

    if success:
        output_image_base64 = base64.b64encode(buffer).decode("utf-8")

    counts = Counter(classes)

    return {
        "detections": detections,
        "counts": dict(counts),
        "total": len(classes),
        "image": f"data:image/jpeg;base64,{output_image_base64}" if output_image_base64 else None
    }