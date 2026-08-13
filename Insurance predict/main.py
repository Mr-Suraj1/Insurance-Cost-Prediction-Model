from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import joblib


app = FastAPI(
    title="Insurance Cost Prediction API",
    description="Machine Learning API for predicting medical insurance charges",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



model = joblib.load("insurance_model.pkl")
feature_columns = joblib.load("feature_columns.pkl")


class InsuranceInput(BaseModel):
    age: int
    gender: str
    bmi: float
    children: int
    smoker: str
    region: str


@app.get("/")
def home():
    return {
        "message": "Insurance Prediction API is running!"
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