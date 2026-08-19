from pathlib import Path
import sys

from fastapi.testclient import TestClient

BACKEND_DIR = Path(__file__).resolve().parents[1]
if str(BACKEND_DIR) not in sys.path:
    sys.path.insert(0, str(BACKEND_DIR))

import main  # noqa: E402


client = TestClient(main.app)

VALID_PAYLOAD = {
    "age": 30,
    "gender": "male",
    "bmi": 25.0,
    "children": 1,
    "smoker": "no",
    "region": "northwest",
}


def test_health_ok():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"


def test_predict_valid_payload():
    response = client.post("/predict", json=VALID_PAYLOAD)
    assert response.status_code == 200
    assert isinstance(response.json()["predicted_charges"], (int, float))


def test_predict_invalid_age_bmi_children():
    invalid_payloads = [
        {**VALID_PAYLOAD, "age": 17},
        {**VALID_PAYLOAD, "bmi": 9.0},
        {**VALID_PAYLOAD, "children": -1},
    ]
    for payload in invalid_payloads:
        response = client.post("/predict", json=payload)
        assert response.status_code == 422


def test_predict_invalid_gender_smoker_region():
    invalid_payloads = [
        {**VALID_PAYLOAD, "gender": "other"},
        {**VALID_PAYLOAD, "smoker": "maybe"},
        {**VALID_PAYLOAD, "region": "central"},
    ]
    for payload in invalid_payloads:
        response = client.post("/predict", json=payload)
        assert response.status_code == 422
