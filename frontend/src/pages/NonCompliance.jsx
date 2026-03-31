export default function NonCompliance() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Non-Compliance Issues</h1>

      <div className="bg-red-100 border border-red-300 p-4 rounded">
        <p className="text-red-800 font-semibold">
          Immediate attention required for the following issues:
        </p>
      </div>

      <ul className="mt-4 list-disc ml-6">
        <li>Weak password policies detected</li>
        <li>Inactive users not removed</li>
        <li>Missing security patches</li>
      </ul>
    </div>
  );
}