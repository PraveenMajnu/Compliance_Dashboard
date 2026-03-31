import axios from "axios";

const API = "https://compliance-dashboard-v70e.onrender.com/api";

// health check
export const getStatus = () => axios.get(`${API}/status`);

// actions
export const runCompliance = () => axios.post(`${API}/run/compliance`);
export const runSync = () => axios.post(`${API}/run/sync`);
export const runReport = () => axios.post(`${API}/run/report`);









// import axios from "axios";

// const API = "http://localhost:5000/api";

// export const getSummary = () => axios.get(`${API}/summary`);
// export const getChecks = () => axios.get(`${API}/checks`);
// export const runScript = () => axios.post(`${API}/run-script`);