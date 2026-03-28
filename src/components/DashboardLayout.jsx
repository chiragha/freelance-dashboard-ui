import Sidebar from "../components/Sidebar";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex h-screen bg-[#0B1120]">

      {/* Sidebar */}
      <div className="hidden md:block w-64">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <Navbar setOpenSidebar={setOpenSidebar} />

        {/* Content */}
        <div className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>

      {/* Mobile Sidebar (overlay only on mobile) */}
      {openSidebar && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
          <div
            className="flex-1 bg-black/50"
            onClick={() => setOpenSidebar(false)}
          />
        </div>
      )}
    </div>
  );
}