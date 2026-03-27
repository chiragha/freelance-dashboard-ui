import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Bell, Mail, Bookmark } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import profileImg from "../assets/user-avatar.jpg";

export default function Navbar() {
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigate = useNavigate();
  const dropdownRef = useRef();

  // ✅ Load + Listen bookmark updates
  useEffect(() => {
    const updateBookmarks = () => {
      try {
        const data = JSON.parse(localStorage.getItem("bookmarks"));
        setBookmarkCount(Array.isArray(data) ? data.length : 0);
      } catch {
        setBookmarkCount(0);
      }
    };

    updateBookmarks();

    // 🔥 custom event + storage event
    window.addEventListener("storage", updateBookmarks);
    window.addEventListener("bookmarkUpdated", updateBookmarks);

    return () => {
      window.removeEventListener("storage", updateBookmarks);
      window.removeEventListener("bookmarkUpdated", updateBookmarks);
    };
  }, []);

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <>
    <nav
      ref={dropdownRef}
      className="fixed top-0 left-0 w-full shadow bg-white z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-blue-600 text-white text-2xl font-bold px-2 py-1 rounded">
            F
          </div>
          <span className="text-lg font-semibold ml-1">ind.Jobs</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700">
          <Link to="/home" className="text-blue-600 font-medium">
            Home
          </Link>

          {/* Find Work */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("work")}
              className="flex items-center gap-1 hover:text-blue-600"
            >
              Find Work <ChevronDown size={16} />
            </button>

            {openDropdown === "work" && (
              <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md w-48 border">
                <Link to="/jobs" className="block px-4 py-2 hover:bg-gray-100">
                  Browse Jobs
                </Link>
                <Link
                  to="/companies"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Browse Companies
                </Link>
              </div>
            )}
          </li>

          {/* Employers */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("employer")}
              className="flex items-center gap-1 hover:text-blue-600"
            >
              For Employers <ChevronDown size={16} />
            </button>

            {openDropdown === "employer" && (
              <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md w-48 border">
                <Link
                  to="/post_job"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Post Job
                </Link>
                <Link
                  to="/freelancer/1"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Freelancer Profile
                </Link>
              </div>
            )}
          </li>

          {/* Dashboard */}
          <li className="relative">
            <button
              onClick={() => toggleDropdown("dashboard")}
              className="flex items-center gap-1 hover:text-blue-600"
            >
              Dashboard <ChevronDown size={16} />
            </button>

            {openDropdown === "dashboard" && (
              <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md w-48 border">
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
                <Link
                  to="/message"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Messages
                </Link>
                <Link
                  to="/bookmarks"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Bookmarks
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Settings
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* ✅ RIGHT SECTION */}
        <div className="hidden md:flex items-center gap-5">
          {/* 🔥 Bookmark Icon */}
          <div
            onClick={() => navigate("/bookmarks")}
            className="relative cursor-pointer"
          >
            <Bookmark size={20} />
            {bookmarkCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
                {bookmarkCount}
              </span>
            )}
          </div>

          {/* Notifications */}
          <div className="relative cursor-pointer">
            <Bell size={20} />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1 rounded-full">
              4
            </span>
          </div>

          <div className="relative cursor-pointer">
            <Mail size={20} />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1 rounded-full">
              3
            </span>
          </div>

          <img
            src={profileImg}
            alt="profile"
            className="w-9 h-9 rounded-full object-cover border border-gray-300 cursor-pointer"
          />
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
    {/* ✅ MOBILE MENU */}
{isOpen && (
  <div className="md:hidden bg-white border-t shadow-lg px-4 py-4 mt-4 space-y-4">
    
    <Link
      to="/home"
      onClick={() => setIsOpen(false)}
      className="block text-blue-600 font-medium"
    >
      Home
    </Link>

    {/* Find Work */}
    <div>
      <p className="text-gray-500 text-sm mb-1">Find Work</p>
      <Link
        to="/jobs"
        onClick={() => setIsOpen(false)}
        className="block py-1 text-gray-700"
      >
        Browse Jobs
      </Link>
      <Link
        to="/companies"
        onClick={() => setIsOpen(false)}
        className="block py-1 text-gray-700"
      >
        Browse Companies
      </Link>
    </div>

    {/* Employers */}
    <div>
      <p className="text-gray-500 text-sm mb-1">For Employers</p>
      <Link
        to="/post_job"
        onClick={() => setIsOpen(false)}
        className="block py-1 text-gray-700"
      >
        Post Job
      </Link>
      <Link
        to="/freelancer/1"
        onClick={() => setIsOpen(false)}
        className="block py-1 text-gray-700"
      >
        Freelancer Profile
      </Link>
    </div>

    {/* Dashboard */}
    <div>
      <p className="text-gray-500 text-sm mb-1">Dashboard</p>
      <Link
        to="/dashboard"
        onClick={() => setIsOpen(false)}
        className="block py-1 text-gray-700"
      >
        Dashboard
      </Link>
      <Link
        to="/message"
        onClick={() => setIsOpen(false)}
        className="block py-1 text-gray-700"
      >
        Messages
      </Link>
      <Link
        to="/bookmarks"
        onClick={() => setIsOpen(false)}
        className="block py-1 text-gray-700"
      >
        Bookmarks
      </Link>
      <Link
        to="/settings"
        onClick={() => setIsOpen(false)}
        className="block py-1 text-gray-700"
      >
        Settings
      </Link>
    </div>

    {/* Divider */}
    <hr />

    {/* Icons Section */}
    <div className="flex items-center justify-between">
      <div
        onClick={() => {
          navigate("/bookmarks");
          setIsOpen(false);
        }}
        className="relative cursor-pointer"
      >
        <Bookmark size={22} />
        {bookmarkCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
            {bookmarkCount}
          </span>
        )}
      </div>

      <Bell size={22} className="cursor-pointer" />
      <Mail size={22} className="cursor-pointer" />

      {/* Profile */}
      <img
        src={profileImg}
        alt="profile"
        className="w-9 h-9 rounded-full object-cover border"
      />
    </div>
  </div>
)}
    </>
  );
}
