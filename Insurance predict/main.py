import os
from pathlib import Path
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Literal
import pandas as pd
import joblib


# Load environment configuration
def get_cors_origins() -> list[str]:
    """Load CORS origins from environment variable or use defaults."""
    cors_env = os.getenv("API_CORS_ORIGINS")
    if cors_env:
        return [origin.strip() for origin in cors_env.split(",")]
    return [
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ]


def get_model_path() -> str:
    """Get model path from environment or relative to this script."""
    model_env = os.getenv("MODEL_PATH")
    if model_env:
        return model_env
    # Default: look in same directory as this script
    return str(Path(__file__).parent / "insurance_model.pkl")


def get_features_path() -> str:
    """Get features path from environment or relative to this script."""
    features_env = os.getenv("FEATURES_PATH")
    if features_env:
        return features_env
    # Default: look in same directory as this script
    return str(Path(__file__).parent / "feature_columns.pkl")


app = FastAPI(
    title="Insurance Cost Prediction API",
    description="Machine Learning API for predicting medical insurance charges",
    version="1.0.0"
)


# Configure CORS
cors_origins = get_cors_origins()
app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


# Load model and features with error handling
try:
    model_path = get_model_path()
    if not Path(model_path).exists():
        raise FileNotFoundError(f"Model file not found at: {model_path}")
    model = joblib.load(model_path)
    
    features_path = get_features_path()
    if not Path(features_path).exists():
        raise FileNotFoundError(f"Features file not found at: {features_path}")
    feature_columns = joblib.load(features_path)
    
    print(f"[OK] Model loaded from: {model_path}")
    print(f"[OK] Features loaded from: {features_path}")
    print(f"[OK] CORS origins: {cors_origins}")
except FileNotFoundError as e:
    print(f"[ERROR] Startup Error: {e}")
    raise


class InsuranceInput(BaseModel):
    age: int = Field(..., ge=18, le=120, description="Age in years (18-120)")
    gender: Literal["male", "female"] = Field(..., description="Gender: male or female")
    bmi: float = Field(..., ge=10, le=80, description="Body Mass Index (10-80)")
    children: int = Field(..., ge=0, le=20, description="Number of children (0-20)")
    smoker: Literal["yes", "no"] = Field(..., description="Smoking status: yes or no")
    region: Literal["northeast", "northwest", "southeast", "southwest"] = Field(..., description="Geographic region")


@app.get("/")
def home():
    return {
        "message": "Insurance Prediction API is running!"
    }


@app.get("/health")
def health():
    return {
        "status": "ok",
        "model_loaded": model is not None
    }


@app.post("/predict")
def predict(data: InsuranceInput):



    is_female = (
        1 if data.gender.lower() == "female" else 0
    )


    is_smoker = (
        1 if data.smoker.lower() == "yes" else 0
    )


    # -------------------------------------------------
    # Region Encoding
    # -------------------------------------------------

    region_northwest = (
        1 if data.region.lower() == "northwest" else 0
    )

    region_southeast = (
        1 if data.region.lower() == "southeast" else 0
    )

    region_southwest = (
        1 if data.region.lower() == "southwest" else 0
    )


    # -------------------------------------------------
    # BMI Category
    # -------------------------------------------------

    bmi_category_normal = (
        1 if 18.5 <= data.bmi < 25 else 0
    )

    bmi_category_overweight = (
        1 if 25 <= data.bmi < 30 else 0
    )

    bmi_category_obese = (
        1 if data.bmi >= 30 else 0
    )


    # -------------------------------------------------
    # Create Input DataFrame
    # -------------------------------------------------

    input_data = pd.DataFrame([{
        "age": data.age,
        "bmi": data.bmi,
        "children": data.children,
        "is_female": is_female,
        "is_smoker": is_smoker,

        "region_northwest": region_northwest,
        "region_southeast": region_southeast,
        "region_southwest": region_southwest,

        "bmi_category_Normal": bmi_category_normal,
        "bmi_category_Overweight": bmi_category_overweight,
        "bmi_category_Obese": bmi_category_obese
    }])


    # -------------------------------------------------
    # Keep Same Feature Order Used During Training
    # -------------------------------------------------

    input_data = input_data[feature_columns]


    # -------------------------------------------------
    # Make Prediction
    # -------------------------------------------------

    prediction = model.predict(input_data)[0]


    # -------------------------------------------------
    # Return Result
    # -------------------------------------------------

    return {
        "predicted_charges": round(float(prediction), 2)
    }