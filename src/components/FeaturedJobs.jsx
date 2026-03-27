import { MapPin, Clock, Briefcase } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdBusiness } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaBusinessTime } from "react-icons/fa";
import { jobs } from "../data/jobs"


export default function FeaturedJobs() {
  
const navigate = useNavigate();
  return (
    <section className="py-16 bg-gray-50">
      {/* Header */}
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 mb-8">
        <h2 className="text-2xl font-semibold">Featured Jobs</h2>

        {/* Redirect Link */}



<button onClick={() => navigate("/jobs")}>
  Browse All Jobs
</button>
      </div>

      {/* Job List */}
      <div className="max-w-6xl mx-auto bg-white cursor-pointer shadow-2xl rounded-lg overflow-hidden">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="group flex items-center justify-between p-5  bg-white border-l-4  hover:border-blue-600"
          >
            {/* Left */}
            <div>
              <h3 className="font-medium">{job.title}</h3>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2">
                <div className="flex items-center gap-4">
                  <img
                    src={job.logo}
                    alt="logo"
                    className="w-12 h-12 rounded bg-gray-100 p-2 transition group-hover:scale-105"
                  />
                  {/* content */}
                  <div>
                    <h3 className="font-medium group-hover:text-blue-600 transition">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2">
                      <span className="flex items-center gap-1">
                        <IoMdBusiness /> {job.company}
                      </span>

                      <span className="flex items-center gap-1">
                        <CiLocationOn /> {job.location}
                      </span>

                      <span className="flex items-center gap-1">
                        <FaBusinessTime /> {job.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <Link to={`/job/${job.id}`} className="bg-gray-200 text-gray-600 px-4 py-2 rounded transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
              Apply Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
