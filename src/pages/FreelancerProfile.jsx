import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Clipboard from "../components/Clipboard";

export default function FreelancerProfile() {
   
  const navigate = useNavigate();
 const freelancers = [
  {
    id: 1,
    name: "Marcin Kowalski",
    role: "Front-End Developer",
    rating: 4.9,
    reviews: 120,
    location: "Warsaw, Poland",
    rate: "$50/hr",
    description: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment, Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line",
    skills: ["React", "JavaScript","iOS","Android","mobile apps","design"],
    experience: [],
    portfolio: [],
    image: "https://i.pravatar.cc/150?img=12",
  },
];

const { id } = useParams();

const freelancer = freelancers.find(
  (f) => f.id === parseInt(id)
);

if (!freelancer) {
  return <div className="text-white pt-24">Freelancer not found</div>;
}
  return (
  <>
  <Navbar />

  <div className="bg-[#0B1120] text-white min-h-screen pt-20 md:pt-24 px-4 sm:px-6">
    
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* LEFT SIDE */}
      <div className="lg:col-span-2 space-y-6">

        {/* PROFILE HEADER */}
        <div className="bg-[#111827] p-5 sm:p-6 rounded-xl flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left">
          
          <img
            src={freelancer.image}
            alt=""
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full"
          />

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">
              {freelancer.name}
            </h2>

            <p className="text-gray-400">{freelancer.role}</p>

            <div className="flex justify-center sm:justify-start items-center gap-2 mt-2 text-yellow-400">
              ⭐ {freelancer.rating} ({freelancer.reviews} reviews)
            </div>

            <p className="text-sm text-gray-500 mt-1">
              📍 {freelancer.location}
            </p>
          </div>
        </div>

        {/* ABOUT */}
        <div className="bg-[#111827] p-5 sm:p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <p className="text-gray-400 text-sm sm:text-base">
            {freelancer.description}
          </p>
        </div>

        {/* SKILLS */}
        <div className="bg-[#111827] p-5 sm:p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {freelancer.skills?.map((skill, i) => (
              <span
                key={i}
                className="bg-gray-700 px-3 py-1 rounded text-xs sm:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="bg-[#111827] p-5 sm:p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-3">Experience</h3>

          {freelancer.experience?.length ? (
            freelancer.experience.map((exp, i) => (
              <div key={i} className="mb-3">
                <p className="font-medium">{exp.role}</p>
                <p className="text-sm text-gray-400">
                  {exp.company} • {exp.duration}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No experience added</p>
          )}
        </div>

        {/* PORTFOLIO */}
        <div className="bg-[#111827] p-5 sm:p-6 rounded-xl">
          <div className="flex items-center gap-2 text-yellow-400 mb-3">
            <FaRegThumbsUp />
            <h3>Work History & Feedback</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {freelancer.portfolio?.length ? (
              freelancer.portfolio.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="rounded-lg"
                />
              ))
            ) : (
              <p className="text-gray-500 text-sm col-span-full">
                No portfolio items
              </p>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="space-y-6">

        {/* PRICE CARD */}
        <div className="bg-[#111827] p-5 sm:p-6 rounded-xl text-center">
          <p className="text-gray-400">Hourly Rate</p>
          <h2 className="text-xl sm:text-2xl font-semibold mt-2">
            {freelancer.rate}
          </h2>

          <button
            onClick={() => navigate(`/freelancer/${freelancer.id}`)}
            className="mt-4 w-full bg-blue-600 py-2 rounded hover:bg-blue-500 transition"
          >
            Hire Me
          </button>
        </div>

        {/* STATS */}
        <div className="bg-[#111827] p-5 sm:p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-3">Stats</h3>

          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">Job Success</span>
            <span>98%</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-400">Completed Jobs</span>
            <span>120</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-400">On Time</span>
            <span>95%</span>
          </div>
        </div>

        {/* ATTACHMENTS */}
        <div className="bg-[#111827] p-5 sm:p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-3">Attachments</h3>

          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            <span className="bg-gray-700 px-3 py-3 rounded text-sm">
              Cover Letter
            </span>
            <span className="bg-gray-700 px-3 py-3 rounded text-sm">
              Contract
            </span>
          </div>
        </div>

        {/* BOOKMARK */}
        <div className="bg-[#111827] p-5 sm:p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-3">
            Bookmark or Share
          </h3>

          <div className="flex justify-center sm:justify-start">
            <div className="flex items-center px-4 py-2 rounded gap-2 bg-[#404040] text-yellow-400">
              <FaStar />
              <span>Bookmarks</span>
            </div>
          </div>

          <div className="mt-4">
            <Clipboard />
          </div>
        </div>

      </div>
    </div>
  </div>
</>
  );
}
