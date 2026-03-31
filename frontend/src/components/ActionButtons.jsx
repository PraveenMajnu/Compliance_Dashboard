import { runScript } from "../services/api";

export default function ActionButtons() {
  const handleRun = async () => {
    const res = await runScript();
    alert(res.data.output);
  };

  return (
    <button
      onClick={handleRun}
      className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
    >
      Run Scan
    </button>
  );
}

// import { useState } from "react";
// import { runScript } from "../services/api";

// export default function ActionButtons() {
//   const [output, setOutput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleRun = async () => {
//     setLoading(true);
//     const res = await runScript();
//     setOutput(res.data.output);
//     setLoading(false);
//   };

//   return (
//     <div>
//       <button
//         onClick={handleRun}
//         className="bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         {loading ? "Running..." : "Run Scan"}
//       </button>

//       {output && (
//         <pre className="mt-4 bg-black text-green-400 p-3 rounded">
//           {output}
//         </pre>
//       )}
//     </div>
//   );
// }