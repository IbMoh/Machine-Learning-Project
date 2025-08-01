# Predicting Bridge Construction Cost – Machine Learning Project
### Course: Machine Learning – DA380A
### Institution: Kristianstad University
### Team: Group 27 (Ibrahim Mohamed & Anne-Claire Koch)

# Overview
This project focuses on developing and deploying machine learning models to predict the Total Bridge Cost using data from the 2022 U.S.
National Bridge Inventory. By leveraging regression models and careful feature engineering, we aim to assist planners and engineers in
more accurate budgeting and forecasting for bridge construction

# Structure
.
├── Jupytr Notebook/
|       ├── Last_Year_All_Field_Bridges.csv         # Full bridge dataset (raw)
|       ├── ML Group Project.ipynb                  # Main notebook: EDA, preprocessing, training
|       ├── column_names.pkl                        # Serialized top-10 feature names
|       ├── decision_tree_model.pkl                 # Final Decision Tree model (best performer)
|       └── scaler_top10.pkl                        # MinMaxScaler used during preprocessing
│
├── ML deployment/
|       ├── Api.py                                  # Flask API to serve the model
|       ├── app.js                                  # Node.js/Express logic
|       ├── package.json                            # Node.js config
|       ├── package-lock.json                       # Node.js dependency lock
|       └── public/                                 # Holds frontend assets
|         ├── index.html
|         ├── script.js
|         └── style.css
|
├── Feature details.odt                     # Full feature descriptions (manual analysis)
└── ML Report - Group 27.pdf                # Full academic report

# Problem Statement
Predict the Total Bridge Cost using a regression model based on 143 features in the bridge dataset. These include:

- Structural & material specifications
- Dimensions (height, length, width)
- Traffic data
- Maintenance/inspection records
- Environmental factors

# Models
| Model                         | Summary                                                 |
| ----------------------------- | ------------------------------------------------------- |
| **K-Nearest Neighbors (KNN)** | Baseline model; lowest accuracy                         |
| **Decision Tree**             | Best overall performance (lowest MAE/MSE, highest R²)   |
| **Random Forest**             | Close second to Decision Tree                           |
└─────────────────────────────────────────────────────────────────────────────────────────┚
Final Choice for deployment: Decision Tree Regressor

# Preprocessing Summary
- Missing values: Handled using SimpleImputer (median)
- Categorical features: One-Hot Encoding (non-ordinal), Label Encoding (ordinal)
- Scaling: MinMaxScaler applied to numerical data
- Feature Selection: Top 10 most relevant features identified using importance scores
- Clustering: K-Means used for exploratory analysis

# Deployment
We deployed the model via a lightweight Flask API (Api.py) for use in real-world applications.

## Running the API locally:

### 1. Clone the repo
git clone https://github.com/IbMoh/Machine-Learning-Project.git
cd Machine-Learning-Project
cd ML deployment

#### 2. Set up Python environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt

### 3. Start the Flask API
python Api.py

## Node.js Frontend:
npm install
npm start
