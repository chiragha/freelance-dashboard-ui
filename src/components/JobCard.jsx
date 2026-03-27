import { useNavigate } from "react-router-dom";
import { useBookmarks } from "../context/BookmarkContext";
import { Heart } from "lucide-react";

export default function JobCard({ job }) {
  const navigate = useNavigate();
  const { bookmarks, addBookmark, removeBookmark } = useBookmarks();

  // ✅ Check if job is already bookmarked
  const isSaved = bookmarks.jobs.some((j) => j.id === job.id);

  const handleBookmark = () => {
    if (isSaved) {
      removeBookmark("jobs", job.id);
    } else {
      addBookmark("jobs", job);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow relative">

      {/* 🔖 Bookmark Icon (Top Right) */}
      <Heart
        size={22}
        onClick={handleBookmark}
        className={`absolute top-4 right-4 cursor-pointer transition ${
          isSaved
            ? "text-red-500 fill-red-500"
            : "text-gray-400 hover:text-red-400"
        }`}
      />

      {/* JOB INFO */}
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p>{job.location}</p>
      <p>{job.salary}</p>

      {/* APPLY BUTTON */}
      <button
        onClick={() => navigate(`/job/${job.id}`)}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Apply Job
      </button>
    </div>
  );
}