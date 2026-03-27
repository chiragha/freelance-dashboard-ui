import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Bookmark } from 'lucide-react';

export default function BookmarkPage() {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("bookmarks")) || [];
    setBookmarks(saved);
  }, []);

  const removeBookmark = (id) => {
    const updated = bookmarks.filter((job) => job.id !== id);
    setBookmarks(updated);
    localStorage.setItem("bookmarks", JSON.stringify(updated));
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#fff] text-white min-h-screen p-2">
        <h2 className="text-2xl font-semibold mb-6">Saved Jobs</h2>

        {bookmarks.length === 0 ? (
          <p className="text-gray-400 text-center mt-20">
            No bookmarks here 🚫
          </p>
        ) : (
          <div className="space-y-4">
            {bookmarks.map((job) => (
              <div
                key={job.id}
                className="bg-[#111827] p-5 rounded-xl border border-gray-700 flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={job.logo}
                    alt=""
                    className="w-14 h-14 rounded-2xl"
                  />

                  <div>
                    <h3 className="text-lg font-semibold">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {job.company}
                    </p>
                  </div>
                </div>

                {/* Remove Bookmark */}
                <Bookmark
                  onClick={() => removeBookmark(job.id)}
                  className="cursor-pointer fill-red-500 text-red-500"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}