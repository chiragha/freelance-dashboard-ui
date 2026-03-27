import React, { useEffect,useState } from "react";
import { jobs } from "../data/jobs";
import Navbar from "../components/Navbar";

import { Bookmark } from 'lucide-react';

export default function JobsPage() {
  const [jobType, setJobType] = useState([]);
  const [experience, setExperience] = useState([]);
  const [salary, setSalary] = useState(200000);
  const [sort, setSort] = useState("recent");

  const [bookmarks, setBookmarks] = useState([]);

  // ✅ Load bookmarks from localStorage
  useEffect(() => {
  const saved = localStorage.getItem("bookmarks");

  try {
    const parsed = JSON.parse(saved);

    if (Array.isArray(parsed)) {
      setBookmarks(parsed);
    } else {
      setBookmarks([]);
    }
  } catch (error) {
    setBookmarks([]);
  }
}, []);

  // ✅ Save bookmarks
const toggleBookmark = (job) => {
  let updated;

  if (bookmarks.find((item) => item.id === job.id)) {
    updated = bookmarks.filter((item) => item.id !== job.id);
  } else {
    updated = [...bookmarks, job];
  }

  setBookmarks(updated);
  localStorage.setItem("bookmarks", JSON.stringify(updated));

  // ✅ FIX: trigger update AFTER saving
  window.dispatchEvent(new Event("storage"));
};

  // FILTER LOGIC
  const filteredJobs = jobs
    .filter((job) => (jobType.length ? jobType.includes(job.type) : true))
    .filter((job) =>
      experience.length ? experience.includes(job.experience) : true,
    )
    .sort((a, b) => {
      if (sort === "salary") {
        // convert "$35k - $38k" → number
        const getSalary = (salary) => parseInt(salary.replace(/[^0-9]/g, ""));
        return getSalary(b.salary) - getSalary(a.salary);
      }
      return b.id - a.id;
    });

  const handleCheckbox = (value, state, setState) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  return (
    <div className="relative mt-12">
      <Navbar />
      <div className="bg-[#0B1120] text-white min-h-screen p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* SIDEBAR */}
          <div className="bg-[#111827] font-sans p-5 rounded-xl h-fit sticky top-16 z-10 shadow-2xl border-1 border-[#2f3d5c]">
            <h2 className="font-semibold text-2xl mb-4">Filters</h2>

            {/* Job Type */}
            <div className="mb-4">
              <p className="mb-2 text-md text-gray-400">Job Type</p>
              {["Full-time", "Part-time", "Remote", "Contract"].map((type) => (
                <label key={type} className="block text-md mt-2">
                  <input
                    type="checkbox"
                    onChange={() => handleCheckbox(type, jobType, setJobType)}
                  />{" "}
                  {type}
                </label>
              ))}
            </div>

            {/* Experience */}
            <div className="mb-4">
              <p className="mb-2 text-md text-gray-400">Experience</p>
              {["Entry", "Intermediate", "Senior"].map((exp) => (
                <label key={exp} className="block  text-md mt-2">
                  <input
                    type="checkbox"
                    onChange={() =>
                      handleCheckbox(exp, experience, setExperience)
                    }
                  />{" "}
                  {exp}
                </label>
              ))}
            </div>

            {/* Salary */}
            <div>
              <p className="mb-2 text-md text-gray-400">
                Min-Salary: ${salary}
              </p>
              <input
                type="range"
                min="50000"
                max="200000"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:col-span-3">
            <div className="space-y-4">
              {filteredJobs.map((job) => {
                const isBookmarked = bookmarks.some(
                  (item) => item.id === job.id
                );

                return (
                  <div
                    key={job.id}
                    className="bg-[#111827] p-5 rounded-xl border border-gray-700 hover:border-blue-500 flex justify-between items-center"
                  >
                    {/* LEFT */}
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
                        <p className="text-xs text-gray-500">
                          {job.location} • {job.posted}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-4">
                      
                      {/* ✅ Bookmark Icon */}
                      <Bookmark
                        onClick={() => toggleBookmark(job)}
                        className={`cursor-pointer ${
                          isBookmarked
                            ? "fill-red-500 text-red-500"
                            : "text-gray-400"
                        }`}
                      />

                      <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500">
                        Apply Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
