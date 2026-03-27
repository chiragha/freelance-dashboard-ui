import React, { useState } from "react";
import { useJobs } from "../context/JobContext";

export default function PostJob() {
  const { addJob } = useJobs();

  const [formData, setFormData] = useState({
    title: "",
    type: "",
    category: "",
    location: "",
    salaryMin: "",
    salaryMax: "",
    tags: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addJob({
      title: formData.title,
      location: formData.location,
      salary: `${formData.salaryMin} - ${formData.salaryMax}`,
    });

    alert("Job Posted Successfully!");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* ✅ HEADER (separate) */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
        Post a Job
      </h1>

      {/* ✅ FORM CARD */}
      <div className="bg-white p-6 rounded-2xl shadow-md">

        <h2 className="text-lg font-semibold mb-4 text-gray-700">
          Job Submission Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* ROW 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Job Title"
              onChange={handleChange}
              className="input"
            />

            <select name="type" onChange={handleChange} className="input">
              <option value="">Select Job Type</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Remote</option>
              <option>Contract</option>
            </select>

            <select name="category" onChange={handleChange} className="input">
              <option value="">Select Category</option>
              <option>Development</option>
              <option>Design</option>
              <option>Marketing</option>
            </select>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="location"
              placeholder="Location"
              onChange={handleChange}
              className="input"
            />

            <input
              type="number"
              name="salaryMin"
              placeholder="Min Salary"
              onChange={handleChange}
              className="input"
            />

            <input
              type="number"
              name="salaryMax"
              placeholder="Max Salary"
              onChange={handleChange}
              className="input"
            />
          </div>

          {/* TAGS */}
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              name="tags"
              placeholder="Tags (React, Node...)"
              onChange={handleChange}
              className="input flex-1"
            />
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
            >
              +
            </button>
          </div>

          {/* DESCRIPTION */}
          <textarea
            name="description"
            placeholder="Job Description"
            rows="5"
            onChange={handleChange}
            className="input"
          />

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition"
          >
            Submit Job
          </button>

        </form>
      </div>
    </div>
  );
}