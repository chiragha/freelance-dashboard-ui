import { jobs } from "../data/jobs";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ApplyForm from "../components/ApplyForm";

// icons 
import { IoMdBusiness } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaBusinessTime } from "react-icons/fa";
import { MapPin, Clock, Briefcase } from "lucide-react";

export default function JobDetails() {
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();
  const job = jobs.find((j) => j.id === parseInt(id));

  if (!job) return <p>Job not found</p>;

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen py-10 px-4 mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {/* LEFT SECTION */}
          <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <img src={job.logo} alt="logo" className="w-16 h-16 rounded" />

              <div>
                <h1 className="text-2xl font-bold">{job.title}</h1>
                <p className="text-gray-500">{job.company}</p>

                <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                  <span>⭐ 4.9</span>
                  <span>📍 {job.location}</span>
                  <span className="text-green-600">✔ Verified</span>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Job Description</h2>

              <p className="text-gray-600 leading-relaxed">{job.description}</p>
            </div>

            {/* Location Map Placeholder */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Location</h2>

              <div className="h-72 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
                <img
                  src={job.map}
                  alt="map"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">
            {/* Apply Card */}
            <div className="bg-white p-6 rounded-xl shadow">
              <button
                onClick={() => setOpenModal(true)}
                className="w-full bg-blue-600 cursor-pointer text-white py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Apply Now →
              </button>
            </div>

            {/* Job Summary */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold bg-gray-200 p-4 text-2xl font-sans rounded text-center text-black mb-4">Job Summary</h3>

              <div className="space-y-3 text-sm text-gray-600">
                <p className="flex items-center gap-1">
                 <CiLocationOn />  <strong>Location:</strong> {job.location}
                </p>
                <p className="flex items-center gap-1">
                  <IoMdBusiness /><strong>Job Type:</strong> {job.type}
                </p>
                <p className="flex items-center gap-1">
                  <FaBusinessTime /> <strong>Salary:</strong> {job.salary}
                </p>
                <p className="flex items-center gap-1">
                  <Clock size={14} />  <strong>Date Posted:</strong> {job.posted}
                </p>
              </div>
            </div>

            {/* Bookmark */}
            <div className="bg-white p-6 rounded-xl shadow">
              <button className="w-full border cursor-pointer py-2 rounded hover:bg-gray-100">
                ⭐ Bookmark
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL (your existing ApplyForm) */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-xl p-6 relative shadow-xl animate-[fadeIn_0.3s_ease-in-out]">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-500 text-xl cursor-pointer"
            >
              ✕
            </button>

            <ApplyForm
              jobTitle={job.title}
              closeModal={() => setOpenModal(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
