from ultralytics import YOLO
from collections import Counter
import cv2
import numpy as np
import base64

model = YOLO("model/best.pt")


def detect_image(file_bytes: bytes):
    np_arr = np.frombuffer(file_bytes, np.uint8)
    image = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

    if image is None:
        raise ValueError("Imagem inválida ou formato não suportado.")

    results = model(image)

    detections = []
    classes = []
    output_image_base64 = None

    for r in results:
        plotted = r.plot()

        success, buffer = cv2.imencode(".jpg", plotted)

        if success:
            output_image_base64 = base64.b64encode(buffer).decode("utf-8")

        for box in r.boxes:
            cls = int(box.cls[0])
            conf = float(box.conf[0])
            class_name = model.names[cls]

            classes.append(class_name)

            detections.append({
                "class": class_name,
                "confidence": round(conf * 100, 2)
            })

    counts = Counter(classes)

    return {
        "detections": detections,
        "counts": dict(counts),
        "total": len(classes),
        "image": f"data:image/jpeg;base64,{output_image_base64}" if output_image_base64 else None
    }