import React from "react";

export default function Card({ title, value, icon: Icon, color }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">

      {/* LEFT */}
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
      </div>

      {/* RIGHT ICON */}
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="text-white" size={20} />
      </div>

    </div>
  );
}