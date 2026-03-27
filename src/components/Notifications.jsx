import React from "react";
import { Bell, Briefcase, User } from "lucide-react";

export default function Notifications() {
  const data = [
    {
      id: 1,
      text: "New job application received",
      icon: Briefcase,
    },
    {
      id: 2,
      text: "Your profile was viewed",
      icon: User,
    },
    {
      id: 3,
      text: "Reminder: Update your job post",
      icon: Bell,
    },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">

      <h2 className="font-semibold mb-4">Notifications</h2>

      <ul className="space-y-3">
        {data.map((item) => {
          const Icon = item.icon;

          return (
            <li
              key={item.id}
              className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 transition"
            >
              <div className="bg-blue-100 p-2 rounded">
                <Icon size={16} className="text-blue-600" />
              </div>

              <p className="text-sm text-gray-700">
                {item.text}
              </p>
            </li>
          );
        })}
      </ul>

    </div>
  );
}