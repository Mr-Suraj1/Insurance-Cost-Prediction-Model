# ML Model Reproducibility and Evaluation

## Model overview
- **Model:** `RandomForestRegressor` (loaded from `Insurance predict/insurance_model.pkl`)
- **Feature schema artifact:** `Insurance predict/feature_columns.pkl`
- **Expected feature count:** 11

## Dataset status
- **Dataset file:** `Insurance predict/insurance.csv`
- **Rows:** 1338
- **Columns:** `age, sex, bmi, children, smoker, region, charges`
- **Target:** `charges`
- The original training dataset/split was previously unavailable in the repository; the dataset file is now available.

## Feature engineering used for evaluation (matched to `main.py`)
- `is_female = 1 if sex == "female" else 0`
- `is_smoker = 1 if smoker == "yes" else 0`
- `region_northwest = 1 if region == "northwest" else 0`
- `region_southeast = 1 if region == "southeast" else 0`
- `region_southwest = 1 if region == "southwest" else 0`
- `bmi_category_Normal = 1 if 18.5 <= bmi < 25 else 0`
- `bmi_category_Overweight = 1 if 25 <= bmi < 30 else 0`
- `bmi_category_Obese = 1 if bmi >= 30 else 0`
- Final evaluation input is reordered exactly with `feature_columns.pkl`.

## Exact feature order (11)
1. `age`
2. `bmi`
3. `children`
4. `is_female`
5. `is_smoker`
6. `region_northwest`
7. `region_southeast`
8. `region_southwest`
9. `bmi_category_Normal`
10. `bmi_category_Overweight`
11. `bmi_category_Obese`

## Evaluation methodology (existing model artifact only)
- Predictions were generated with the existing `insurance_model.pkl` on all rows of `insurance.csv` after applying the exact `main.py` feature engineering and feature reordering.
- **Evaluation type:** full-dataset / in-sample.
- **Important:** These are **NOT unseen-test accuracy metrics** and should not be interpreted as holdout/generalization performance.

## Verified regression metrics (existing artifact)
- **MAE:** `1523.5659`
- **RMSE:** `2880.1492`
- **R²:** `0.9433935939`
- **MAPE:** `18.6678%` (computed; target values are non-zero in this dataset)

## Verified feature importance ranking (`feature_importances_`)
1. `is_smoker` — 0.619497
2. `bmi` — 0.195290
3. `age` — 0.132582
4. `children` — 0.017732
5. `bmi_category_Obese` — 0.011545
6. `is_female` — 0.005203
7. `region_northwest` — 0.005021
8. `region_southeast` — 0.004857
9. `region_southwest` — 0.003673
10. `bmi_category_Overweight` — 0.002696
11. `bmi_category_Normal` — 0.001901

## Limitations
- The original train/test split protocol for the currently deployed artifact is still not verified in-repo.
- Therefore, these full-dataset metrics are artifact-evaluation metrics, not confirmed original holdout metrics.
