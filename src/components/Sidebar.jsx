import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LuMessagesSquare } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const navigate = useNavigate(); // ✅ correct place

  const linkStyle = ({ isActive }) =>
    `block px-3 py-2 rounded cursor-pointer ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-gray-800 hover:text-blue-400"
    }`;

  return (
    <>
      {/* Overlay (mobile only) */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpenSidebar(false)}
        />
      )}

      {/* Sidebar */}
    <div
  className="
    h-full w-64 bg-[#0B1120]
    md:relative fixed top-0 left-0
    z-50 md:z-auto
    transform transition-transform duration-300
    md:translate-x-0
    ${openSidebar ? 'translate-x-0' : '-translate-x-full'}
  "
>
        <div className="p-5 space-y-4 lg:mt-16">
          
          {/* Close button (mobile only) */}
          <button
            onClick={() => setOpenSidebar(false)}
            className="md:hidden text-white mb-4"
          >
            ✕ Close
          </button>

          <nav className="space-y-2 text-sm">
            <NavLink to="/dashboard" className={linkStyle}>
              Dashboard
            </NavLink>

            <NavLink to="/message" className={linkStyle}>
              <div className="flex items-center gap-2 font-semibold">
                <LuMessagesSquare /> Messages
              </div>
            </NavLink>

            <NavLink to="/review" className={linkStyle}>
              <div className="flex items-center gap-2 font-semibold">
                <FaRegStar /> Reviews
              </div>
            </NavLink>

            {/* ✅ FIXED Bookmarks */}
            <NavLink to="/bookmarks" className={linkStyle}>
              <div className="flex items-center gap-2 font-semibold">
                <CiBookmark /> Bookmarks
              </div>
            </NavLink>

            {/* ✅ FIXED Jobs (single link) */}
            <NavLink to="/jobs" className={linkStyle}>
              <div className="flex items-center gap-2 font-semibold">
                <RiShoppingBag4Line /> Jobs
              </div>
            </NavLink>

            <NavLink to="/settings" className={linkStyle}>
              <div className="flex items-center gap-2 font-semibold">
                <IoSettingsOutline /> Settings
              </div>
            </NavLink>

            <NavLink
              to="/home"
              className="block px-3 py-2 text-red-400 hover:bg-gray-800 rounded"
            >
              Logout
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;