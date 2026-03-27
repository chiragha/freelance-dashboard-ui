import React, { useState } from "react";
import { Star } from "lucide-react";
import ReviewModal from "../components/ReviewModal";

const reviews = [
  {
    id: 1,
    freelancerId: 101,
    name: "David Peterson",
    avatar: "https://i.pravatar.cc/50?img=3",
    rating: 4.5,
    date: "2 days ago",
    text: "Great experience working with this freelancer. Highly recommended!",
  },
  {
    id: 2,
    freelancerId: 102,
    name: "Marcin Kowalski",
    avatar: "https://i.pravatar.cc/50?img=5",
    rating: 5,
    date: "1 week ago",
    text: "Excellent communication and fast delivery. Will hire again!",
  },
  {
    id: 3,
    freelancerId: 103,
    name: "Marcin Kowalski",
    avatar: "https://i.pravatar.cc/50?img=5",
    rating: 5,
    date: "1 week ago",
    text: "Excellent communication and fast delivery. Will hire again!",
  },
  {
    id: 4,
    freelancerId: 104,
    name: "Marcin Kowalski",
    avatar: "https://i.pravatar.cc/50?img=5",
    rating: 5,
    date: "1 week ago",
    text: "Excellent communication and fast delivery. Will hire again!",
  },
];

export default function ReviewsSection({ freelancerId }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Reviews</h2>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="flex gap-4 border-b pb-6">
            {/* AVATAR */}
            <img src={review.avatar} className="w-12 h-12 rounded-full" />

            {/* CONTENT */}
            <div className="flex-1">
              {/* TOP */}
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{review.name}</h3>
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>

              {/* RATING */}
              <div className="flex items-center gap-1 mt-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
                <span className="text-gray-500 text-sm ml-2">
                  {review.rating}
                </span>
              </div>

              {/* TEXT */}
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {review.text}
              </p>
              <div className="p-6">
                {/* BUTTON */}
                <button
                  onClick={() => setOpen(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Leave a Review
                </button>

                {/* MODAL */}
                <ReviewModal
                  open={open}
                  setOpen={setOpen}
                  freelancerId={freelancerId}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
