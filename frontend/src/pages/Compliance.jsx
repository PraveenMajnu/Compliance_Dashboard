export default function Compliance() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Compliance Status</h1>

      <div className="bg-green-100 border border-green-300 p-4 rounded">
        <p className="text-green-800 font-semibold">
          Systems meeting compliance standards are listed here.
        </p>
      </div>

      <ul className="mt-4 list-disc ml-6">
        <li>Password policies enforced</li>
        <li>Multi-factor authentication enabled</li>
        <li>Secure configurations applied</li>
      </ul>
    </div>
  );
}