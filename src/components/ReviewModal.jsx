import React, { useState } from "react";
import { Star, X } from "lucide-react";

export default function ReviewModal({ open, setOpen }) {
  const [rating, setRating] = useState(0);
  const [budget, setBudget] = useState("");
  const [time, setTime] = useState("");
  const [comment, setComment] = useState("");

  if (!open) return null;
  const handleSubmit = () => {
  const newReview = {
    id: Date.now(),
    freelancerId: freelancerId, // 🔥 IMPORTANT
    rating,
    comment,
  };

  console.log(newReview);
};

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6 relative">

        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X />
        </button>

        <h2 className="text-xl font-semibold mb-2">Leave a Review</h2>

        {/* Budget */}
        <div className="mb-4">
          <p className="font-medium mb-2">Was this delivered on budget?</p>
          <div className="flex gap-4">
            {["Yes", "No"].map((val) => (
              <button
                key={val}
                onClick={() => setBudget(val)}
                className={`px-4 py-2 border rounded ${
                  budget === val ? "bg-blue-600 text-white" : ""
                }`}
              >
                {val}
              </button>
            ))}
          </div>
        </div>

        {/* Time */}
        <div className="mb-4">
          <p className="font-medium mb-2">Was this delivered on time?</p>
          <div className="flex gap-4">
            {["Yes", "No"].map((val) => (
              <button
                key={val}
                onClick={() => setTime(val)}
                className={`px-4 py-2 border rounded ${
                  time === val ? "bg-blue-600 text-white" : ""
                }`}
              >
                {val}
              </button>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="mb-4">
          <p className="font-medium mb-2">Your Rating</p>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((num) => (
              <Star
                key={num}
                onClick={() => setRating(num)}
                className={`cursor-pointer ${
                  rating >= num
                    ? "text-yellow-500 fill-yellow-500"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Comment */}
        <textarea
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border p-2 rounded"
          placeholder="Write your experience..."
        />

        {/* Submit */}
        <button
          onClick={() => {
            console.log({ rating, budget, time, comment });
            setOpen(false);
          }}
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
}