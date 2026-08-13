# InsureAI

A modern insurance cost prediction application that estimates medical insurance charges using a trained machine learning model. The project combines a FastAPI backend for inference and a polished Next.js frontend for user interaction.

## Overview

InsureAI helps users estimate likely insurance premiums based on key profile inputs such as:

- Age
- Gender
- BMI
- Number of children/dependents
- Smoking status
- Geographic region

The model processes these inputs and returns a predicted insurance charge in USD.

## Features

- Responsive, user-friendly prediction interface
- Real-time estimate generation from a trained model
- Fast API backend for scalable inference
- CORS-enabled frontend-to-backend communication
- Clean UI with a premium dashboard look
- Validation for required user input fields

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend
- Python
- FastAPI
- Pandas
- Scikit-learn
- Joblib

## Project Structure

```text
ML project/
├── Insurance predict/
│   ├── main.py
│   ├── insurance_model.pkl
│   ├── feature_columns.pkl
│   └── __pycache__/
│
└── insurance-frontend/
    ├── app/
    ├── public/
    ├── AGENTS.md
    ├── CLAUDE.md
    ├── README.md
    ├── package.json
    ├── tsconfig.json
    ├── next.config.ts
    ├── postcss.config.mjs
    ├── eslint.config.mjs
    └── next-env.d.ts
```

## Model and API Behavior

The backend exposes a prediction endpoint that accepts a JSON payload and returns a predicted charge.

### Endpoint

- POST: http://127.0.0.1:8000/predict

### Request Body

```json
{
  "age": 35,
  "gender": "female",
  "bmi": 27.5,
  "children": 2,
  "smoker": "yes",
  "region": "southeast"
}
```

### Example Response

```json
{
  "predicted_charges": 12345.67
}
```

## Getting Started

### 1. Set up the backend

Open a terminal in the backend folder:

```bash
cd "Insurance predict"
```

Create and activate a virtual environment:

```bash
python -m venv venv
venv\Scripts\activate
```

Install dependencies:

```bash
pip install fastapi uvicorn pandas scikit-learn joblib
```

Start the API server:

```bash
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

The API should now be running on:

```text
http://127.0.0.1:8000
```

### 2. Set up the frontend

Open a new terminal and go to the frontend folder:

```bash
cd insurance-frontend
```

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npm run dev
```

Open the app in your browser:

```text
http://localhost:3000
```

## Usage

1. Enter the required profile information in the form.
2. Click the prediction button.
3. The app sends the request to the FastAPI backend.
4. The predicted insurance charge is displayed on the page.

## Notes

- The frontend is configured to call the backend at `http://127.0.0.1:8000/predict`.
- Make sure the backend is running before making predictions.
- If the model server is not reachable, the UI shows a clear error message.

## Development Notes

This project is a practical demonstration of combining a machine learning prediction model with a modern web interface. It is well-suited for learning, demos, and portfolio work, especially when showcasing end-to-end ML application architecture.

## License

This project is intended for educational and demonstration purposes.

---

Made with care for a clean machine-learning user experience.
