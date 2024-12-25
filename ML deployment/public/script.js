
const url = 'http://127.0.0.1:5000/predict';

async function fetchData(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error("The API you are trying to connect to did not respond");
        }

        return await response.json();
    } catch (error) {
        console.error(`Error: ${error}`);
        return null;
    }
}

// i just kept this for reference
const sampleFeatureData = [
    {
        "Bridge Improvement Cost": 0.000244,
        "Number of Spans in Main Unit": 0.009615,
        "Roadway Improvement Cost": 0.000277,
        "Latitude (decimal)": 0.993535,
        "Average Relative Humidity": 0.571429,
        "Inventory Route Total Horizontal Clearance (ft.)": 0.602897,
        "Structure Length (ft.)": 0.000521,
        "Out to Out (ft.)": 0.000000,
        "Deck Area (sq. ft.)": 0.000178	,
    }
];

// collecting info from user here and parsing it
function getUserInput() {
    return [
        {
            "Bridge Improvement Cost": parseFloat(document.getElementById("bridgeImprovementCost").value),
            "Number of Spans in Main Unit": parseFloat(document.getElementById("numberOfSpans").value),
            "Roadway Improvement Cost": parseFloat(document.getElementById("roadwayImprovementCost").value),
            "Latitude (decimal)": parseFloat(document.getElementById("latitude").value),
            "Average Relative Humidity": parseFloat(document.getElementById("humidity").value),
            "Inventory Route Total Horizontal Clearance (ft.)": parseFloat(document.getElementById("horizontalClearance").value),
            "Structure Length (ft.)": parseFloat(document.getElementById("structureLength").value),
            "Out to Out (ft.)": parseFloat(document.getElementById("outToOut").value),
            "Deck Area (sq. ft.)": parseFloat(document.getElementById("deckArea").value),
        }
    ];
}

// modified just to get the user input instead of sample data
async function fetchPrediction() {
    
    const dataToSend = getUserInput();

    try {
        const data = await fetchData(url, dataToSend);
        if (data) {
            console.log('MSE Error:', data.prediction);
            document.getElementById("result").innerText = `MSE Error: ${data.prediction}`;
            return data.prediction;
        }
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}