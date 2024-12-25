from flask import Flask, request, jsonify
import joblib
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/predict', methods=['POST'])
def predict():
    # Get the JSON request
    feature_data = request.json
    print("Received data:", feature_data)

    # Convert JSON to pandas DataFrame with only the top 10 features
    df = pd.DataFrame(feature_data)
    df = df.reindex(columns=top_10_features)
    
    # Scale the input data
    scaled_data = scaler.transform(df.to_numpy())

    prediction = [float(pred) for pred in model.predict(scaled_data)]

    # Return the formatted prediction
    return jsonify({'prediction' : str(prediction)})

if __name__ == '__main__':

    # Load the model, scaler, and top 10 feature names
    model = joblib.load("decision_tree_model.pkl")
    scaler = joblib.load("scaler_top10.pkl")
    top_10_features = joblib.load("column_names.pkl")

    app.run(debug=True)
