import Sidebar from "../components/Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout({ children }) {
  return (
   <>
   <Navbar />
    <div className="flex min-h-screen">

      {/* LEFT SIDE - SIDEBAR */}
      <div className="fixed top-0 left-0 w-64 bg-gray-900 text-white h-screen">
        <Sidebar />
      </div>

      {/* RIGHT SIDE - MAIN CONTENT */}
      <div className="ml-64 mt-16 p-6 flex-1 bg-gray-100 min-h-screen overflow-y-auto">
        {children}
      </div>

    </div></>
  );
}