# 📊 Interactive Compliance Dashboard

## 🚀 Overview

This project is a **lightweight, browser-based interactive dashboard** designed to:

* Communicate with backend APIs
* Execute backend scripts with a **single click**
* Display structured data in a clean UI
* Provide a **low-install / no-install solution** via web deployment

---

## 🎯 Key Features

* 📈 **Dashboard Overview**

  * KPI cards
  * Summary metrics
  * Activity logs

* ⚡ **One-Click Actions**

  * Run Compliance Checks
  * Sync Data
  * Generate Reports

* 📊 **Data Viewer**

  * Dynamic tables
  * Search & filtering
  * Pagination

* ⚙️ **Settings Panel**

  * API configuration
  * User preferences

* 🔌 **API Integration**

  * REST API communication
  * Real-time UI updates

---

## 🏗️ Architecture

```
Frontend (React + Vite)
        ↓
Flask API Layer
        ↓
Backend Services (Python Scripts)
        ↓
External APIs / File Processing
```

---

## 🧩 Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS

### Backend

* Flask (Python)
* REST APIs

---

## 📁 Project Structure

```
root/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Overview.jsx
│   │   │   ├── Actions.jsx
│   │   │   ├── Data.jsx
│   │   │   └── Settings.jsx
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Table.jsx
│   │   │   └── Button.jsx
│   │   │
│   │   └── services/
│   │       └── api.js
│   │
│   └── package.json
│
├── backend/
│   ├── app.py
│   ├── routes/
│   │   ├── actions.py
│   │   └── data.py
│   │
│   ├── services/
│   │   ├── compliance.py
│   │   ├── sync.py
│   │   └── report.py
│   │
│   └── requirements.txt
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd project-name
```

---

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

### 3️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt
python app.py
```

Backend runs on:

```
http://localhost:5000
```

---

## 🔌 API Endpoints

| Method | Endpoint            | Description           |
| ------ | ------------------- | --------------------- |
| POST   | /api/run/compliance | Run compliance script |
| POST   | /api/run/sync       | Sync data             |
| POST   | /api/run/report     | Generate report       |
| GET    | /api/data           | Fetch dashboard data  |
| GET    | /api/status         | Check system status   |

---

## ⚡ Example API Call (Frontend)

```javascript
export const runScript = async (type) => {
  const res = await fetch(`/api/run/${type}`, {
    method: "POST"
  });
  return res.json();
};
```

---

## 🔄 Execution Flow

```
User Clicks Button
      ↓
Frontend (React)
      ↓
API Request (Flask)
      ↓
Backend Script Execution
      ↓
Processing / External APIs
      ↓
Response to UI
```

---

## 🔐 Security Considerations

* Token-based authentication (JWT)
* Input validation
* Role-based access control

---

## 🌐 Deployment (No Install Required)

### Recommended Setup

* Frontend: Vercel / Netlify
* Backend: Render / Railway

👉 Users can access the dashboard directly via browser without installation

---

## 🚀 Future Enhancements

* Data visualization (charts)
* Database integration for persistent storage
* Real-time updates (WebSockets)
* Task scheduling (cron jobs)
* Logs monitoring dashboard
* Multi-user support

---

## 🧠 Notes

* Frontend **does not execute scripts directly**
* All backend operations are handled via secure API calls
* Currently operates on real-time responses (no persistent database)

---

## 📌 Author

Praveen Kumar Padala

---

## 📄 License

This project is for educational and development purposes.