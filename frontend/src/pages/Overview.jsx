import Header from "../components/Header";
import ActionButtons from "../components/ActionButtons";

export default function Overview() {
  return (
    <div>
      <Header />

      {/* KPI CARDS */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Tenant</p>
          <h2 className="font-bold">Demo Tenant</h2>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Score</p>
          <h2 className="font-bold">80%</h2>
        </div>

        <div className="bg-green-100 p-4 rounded">
          <p className="text-green-700 font-semibold">Passed</p>
          <h2 className="font-bold">8</h2>
        </div>

        <div className="bg-red-100 p-4 rounded">
          <p className="text-red-700 font-semibold">Failed</p>
          <h2 className="font-bold">2</h2>
        </div>
      </div>

      {/* PROGRESS BAR */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <p className="mb-2 font-semibold">Compliance Progress</p>

        <div className="w-full bg-gray-200 h-4 rounded">
          <div
            className="bg-blue-500 h-4 rounded"
            style={{ width: "80%" }}
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
              <tr className="border-t">
                <td className="p-2">Password Policy</td>
                <td className="p-2">
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">
                    Pass
                  </span>
                </td>
                <td className="p-2">High</td>
              </tr>

              <tr className="border-t">
                <td className="p-2">MFA Enabled</td>
                <td className="p-2">
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                    Fail
                  </span>
                </td>
                <td className="p-2">Critical</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <ActionButtons />
    </div>
  );
}