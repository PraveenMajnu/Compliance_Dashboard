import { useEffect, useState } from "react";
import { getSummary, getChecks } from "../services/api";
import Header from "../components/Header";
import ActionButtons from "../components/ActionButtons";

export default function Overview() {
  const [data, setData] = useState({ tenant: "", score: 0 });
  const [checks, setChecks] = useState([]);

  useEffect(() => {
    getSummary()
      .then(res => setData(res.data))
      .catch(err => console.log(err));

    getChecks()
      .then(res => setChecks(res.data))
      .catch(err => console.log(err));
  }, []);

  const passed = checks.filter(c => c.status === "Pass").length;
  const failed = checks.filter(c => c.status === "Fail").length;

  return (
    <div>
      <Header />

      {/* KPI CARDS */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Tenant</p>
          <h2 className="font-bold">{data.tenant || "Loading..."}</h2>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Score</p>
          <h2 className="font-bold">{data.score}%</h2>
        </div>

        <div className="bg-green-100 p-4 rounded">
          <p className="text-green-700 font-semibold">Passed</p>
          <h2 className="font-bold">{passed}</h2>
        </div>

        <div className="bg-red-100 p-4 rounded">
          <p className="text-red-700 font-semibold">Failed</p>
          <h2 className="font-bold">{failed}</h2>
        </div>
      </div>

      {/* PROGRESS BAR (REPLACES CHART) */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <p className="mb-2 font-semibold">Compliance Progress</p>

        <div className="w-full bg-gray-200 h-4 rounded">
          <div
            className="bg-blue-500 h-4 rounded"
            style={{ width: `${data.score || 0}%` }}
          ></div>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="mb-2 font-bold">Checks</h2>

  <div className="overflow-x-auto">


        <table className="w-full text-left border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Check</th>
              <th className="p-2">Status</th>
              <th className="p-2">Severity</th>
            </tr>
          </thead>

          <tbody>
            {checks.length > 0 ? (
              checks.map((c, i) => (
                <tr key={i} className="border-t">
                  <td className="p-2">{c.name}</td>

                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded text-white text-sm ${
                        c.status === "Pass"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>

                  <td className="p-2">{c.severity}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="p-2 text-center">
                  Loading data...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <ActionButtons />
      </div>
    </div>
  );
}