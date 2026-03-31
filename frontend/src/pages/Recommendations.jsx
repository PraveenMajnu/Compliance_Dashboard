export default function Recommendations() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recommendations</h1>

      <div className="bg-blue-100 border border-blue-300 p-4 rounded">
        <p className="text-blue-800 font-semibold">
          Suggested actions to improve compliance score:
        </p>
      </div>

      <ul className="mt-4 list-disc ml-6">
        <li>Enable MFA for all users</li>
        <li>Automate compliance scans</li>
        <li>Regularly audit user access</li>
        <li>Apply security patches periodically</li>
      </ul>
    </div>
  );
}