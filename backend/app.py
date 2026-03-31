from flask import Flask
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

@app.route("/api/summary")
def summary():
    return {"tenant": "CLOUDADDA", "score": 32.26}

@app.route("/api/checks")
def checks():
    return [
        {"name": "MFA Enabled", "status": "Pass", "severity": "Low"},
        {"name": "Password Policy", "status": "Fail", "severity": "High"},
        {"name": "Inactive Users", "status": "Fail", "severity": "Medium"},
    ]

@app.route("/api/run-script", methods=["POST"])
def run_script():
    result = subprocess.run(
        ["python", "scripts/scan.py"],
        capture_output=True,
        text=True
    )
    return {"output": result.stdout}

if __name__ == "__main__":
    app.run(debug=True)