import { runCompliance, runSync, runReport } from "../services/api";

export default function ActionButtons() {
  const handleCompliance = async () => {
    try {
      const res = await runCompliance();
      alert(res.data.message);
    } catch (error) {
      alert("Error running compliance check");
      console.error(error);
    }
  };

  const handleSync = async () => {
    try {
      const res = await runSync();
      alert(res.data.message);
    } catch (error) {
      alert("Error syncing data");
      console.error(error);
    }
  };

  const handleReport = async () => {
    try {
      const res = await runReport();
      alert(res.data.message);
    } catch (error) {
      alert("Error generating report");
      console.error(error);
    }
  };

  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={handleCompliance}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Run Compliance
      </button>

      <button
        onClick={handleSync}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Sync Data
      </button>

      <button
        onClick={handleReport}
        className="bg-purple-500 text-white px-4 py-2 rounded"
      >
        Generate Report
      </button>
    </div>
  );
}









// import { runCompliance } from "../services/api";

// export default function ActionButtons() {
//   const handleRun = async () => {
//     try {
//       const res = await runCompliance();
//       alert(res.data.message);
//     } catch (error) {
//       alert("Error running compliance check");
//       console.error(error);
//     }
//   };

//   return (
//     <button
//       onClick={handleRun}
//       className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
//     >
//       Run Compliance
//     </button>
//   );
// }




// // import { runScript } from "../services/api";

// // export default function ActionButtons() {
// //   const handleRun = async () => {
// //     const res = await runScript();
// //     alert(res.data.output);
// //   };

// //   return (
// //     <button
// //       onClick={handleRun}
// //       className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
// //     >
// //       Run Scan
// //     </button>
// //   );
// // }

// // import { useState } from "react";
// // import { runScript } from "../services/api";

// // export default function ActionButtons() {
// //   const [output, setOutput] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const handleRun = async () => {
// //     setLoading(true);
// //     const res = await runScript();
// //     setOutput(res.data.output);
// //     setLoading(false);
// //   };

// //   return (
// //     <div>
// //       <button
// //         onClick={handleRun}
// //         className="bg-blue-600 text-white px-4 py-2 rounded"
// //       >
// //         {loading ? "Running..." : "Run Scan"}
// //       </button>

// //       {output && (
// //         <pre className="mt-4 bg-black text-green-400 p-3 rounded">
// //           {output}
// //         </pre>
// //       )}
// //     </div>
// //   );
// // }