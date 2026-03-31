export default function Introduction() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Introduction</h1>

      <p className="mb-4 text-gray-700">
        This dashboard provides a centralized view of compliance status,
        enabling quick decision-making and proactive risk management.
      </p>

      <div className="bg-white shadow rounded p-4">
        <h2 className="text-xl font-semibold mb-2">Objectives</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Monitor compliance posture across systems</li>
          <li>Identify security gaps and risks</li>
          <li>Enable one-click remediation actions</li>
          <li>Provide real-time insights via API integrations</li>
        </ul>
      </div>
    </div>
  );
}