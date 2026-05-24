from ultralytics import YOLO
from collections import Counter
import os
import uuid
import cv2

model = YOLO("model/best.pt")

OUTPUT_FOLDER = "outputs"

os.makedirs(OUTPUT_FOLDER, exist_ok=True)


def detect_image(path):

    results = model(path)

    detections = []
    classes = []

    output_image = None

    for r in results:

        plotted = r.plot()

        output_name = f"{uuid.uuid4()}.jpg"

        output_path = f"{OUTPUT_FOLDER}/{output_name}"

        cv2.imwrite(output_path, plotted)

        output_image = output_name

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
        "image": output_image
    }