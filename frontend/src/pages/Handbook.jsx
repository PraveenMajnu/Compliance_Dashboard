export default function Handbook() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Compliance Handbook</h1>

      <p className="text-gray-700 mb-4">
        This section provides guidelines and best practices for maintaining
        compliance across systems.
      </p>

      <ul className="list-disc ml-6">
        <li>Follow least privilege access</li>
        <li>Implement regular audits</li>
        <li>Ensure data encryption</li>
        <li>Maintain logs for all activities</li>
      </ul>
    </div>
  );
}