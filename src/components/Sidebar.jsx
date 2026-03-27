import React from "react";
import { NavLink } from "react-router-dom";
import { LuMessagesSquare } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

const Sidebar = () => {
  const linkStyle = ({ isActive }) =>
    `block px-3 py-2 rounded cursor-pointer ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-gray-800 hover:text-blue-400"
    }`;

  return (
    <div className="p-5 space-y-4">
      <h2 className="text-xl font-bold mb-6 text-white">Dashboard</h2>

      <nav className="space-y-2 text-sm">
        <NavLink to="/dashboard" className={linkStyle}>
          Dashboard
        </NavLink>

        <NavLink to="/message" className={linkStyle}>
          <div className="flex text-md text-center gap-2 mt-2 font-semibold">
            {" "}
            <LuMessagesSquare /> Messages
          </div>
        </NavLink>

        <NavLink to="/review" className={linkStyle}>
          <div className="flex text-md text-center gap-2 mt-2 font-semibold">
            {" "}
            <FaRegStar />
            Reviews
          </div>
        </NavLink>

        <NavLink to="/bookmarks" className={linkStyle}>
          <div className="flex text-md text-center gap-2 mt-2 font-semibold">
            <CiBookmark />
            <button onClick={() => navigate("/bookmarks")}>Bookmarks</button>
          </div>
        </NavLink>

        <NavLink to="/jobs" className={linkStyle}>
          Jobs
        </NavLink>

        <NavLink to="/jobs" className={linkStyle}>
          <div className="flex text-md text-center gap-2 mt-2 font-semibold">
            {" "}
            <RiShoppingBag4Line />
            Jobs
          </div>
        </NavLink>

        {/* <NavLink to="/candidates" className={linkStyle}>
          Candidates
        </NavLink>

        <NavLink to="/tasks" className={linkStyle}>
          Tasks
        </NavLink> */}

        <NavLink to="/settings" className={linkStyle}>
          <div className="flex text-md text-center gap-2 mt-2 font-semibold">
            {" "}
            <IoSettingsOutline />
            Settings
          </div>
        </NavLink>

        <NavLink to="/home" className="block px-3 py-2 text-red-400 hover:bg-gray-800 rounded w-full text-left">
          Logout
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
