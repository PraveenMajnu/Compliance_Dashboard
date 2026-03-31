from flask import Flask, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

# -----------------------
# Health Check Route
# -----------------------
@app.route("/")
def home():
    return jsonify({"message": "Backend is running"})


@app.route("/api/status")
def status():
    return jsonify({"status": "running"})


# -----------------------
# Action Routes
# -----------------------
@app.route("/api/run/compliance", methods=["POST"])
def run_compliance():
    # Dummy logic (replace with actual script)
    return jsonify({
        "status": "success",
        "message": "Compliance check completed"
    })


@app.route("/api/run/sync", methods=["POST"])
def run_sync():
    return jsonify({
        "status": "success",
        "message": "Data synced successfully"
    })


@app.route("/api/run/report", methods=["POST"])
def run_report():
    return jsonify({
        "status": "success",
        "message": "Report generated"
    })


# -----------------------
# Run App (IMPORTANT)
# -----------------------
if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 5000))
    )









# from flask import Flask
# from flask_cors import CORS
# import subprocess
# import os

# app = Flask(__name__)
# CORS(app)

# @app.route("/api/summary")
# def summary():
#     return {"tenant": "CLOUDADDA", "score": 32.26}

# @app.route("/api/checks")
# def checks():
#     return [
#         {"name": "MFA Enabled", "status": "Pass", "severity": "Low"},
#         {"name": "Password Policy", "status": "Fail", "severity": "High"},
#         {"name": "Inactive Users", "status": "Fail", "severity": "Medium"},
#     ]

# @app.route("/api/run-script", methods=["POST"])
# def run_script():
#     result = subprocess.run(
#         ["python", "scripts/scan.py"],
#         capture_output=True,
#         text=True
#     )
#     return {"output": result.stdout}

# if __name__ == "__main__":
#     app.run(debug=True)

# if __name__ == "__main__":
#     app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)))