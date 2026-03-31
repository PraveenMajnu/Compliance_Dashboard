import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Overview from "./pages/Overview";
import Introduction from "./pages/Introduction";
import Compliance from "./pages/Compliance";
import NonCompliance from "./pages/NonCompliance";
import Recommendations from "./pages/Recommendations";
import Handbook from "./pages/Handbook";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
        <Sidebar />

        <div className="flex-1 p-4 md:p-6">
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/non" element={<NonCompliance />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/handbook" element={<Handbook />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}