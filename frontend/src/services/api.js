import axios from "axios";

const API = "http://localhost:5000/api";

export const getSummary = () => axios.get(`${API}/summary`);
export const getChecks = () => axios.get(`${API}/checks`);
export const runScript = () => axios.post(`${API}/run-script`);