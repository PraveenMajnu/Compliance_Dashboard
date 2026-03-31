import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-full md:w-64 bg-gray-900 text-white p-4 md:h-screen">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>

      <nav className="flex md:flex-col gap-4 overflow-x-auto">
        <Link to="/">Intro</Link>
        <Link to="/overview">Overview</Link>
        <Link to="/compliance">Compliance</Link>
        <Link to="/non">Non-Compliance Issues</Link>
        <Link to="/recommendations">Recommendations</Link>
        <Link to="/handbook">Compliance Handbook</Link>
      </nav>
    </div>
  );
}













// import { Link } from "react-router-dom";

// export default function Sidebar() {
//   return (
//     <div className="w-64 bg-gray-900 text-white h-screen p-5">
//       <h2 className="text-xl font-bold mb-6">Dashboard</h2>

//       <nav className="flex flex-col gap-3">
//         <Link to="/">Introduction</Link>
//         <Link to="/overview">Overview</Link>
//         <Link to="/compliance">Compliance</Link>
//         <Link to="/non">Non-Compliance</Link>
//         <Link to="/recommendations">Recommendations</Link>
//         <Link to="/handbook">Handbook</Link>
//       </nav>
//     </div>
//   );
// }