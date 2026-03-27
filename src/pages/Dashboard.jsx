import React, { useEffect, useState } from "react";
import NotesSection from "../components/NotesSection";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";
import Card from "../components/Card";
import Notifications from "../components/Notifications";
import { Briefcase, ClipboardList, Star, Eye } from "lucide-react";


export default function Dashboard() {
  const [stats, setStats] = useState({
    bids: 0,
    jobs: 0,
    reviews: 0,
    views: 0,
  });

  // Simulate API call
  useEffect(() => {
    setStats({
      bids: 22,
      jobs: 4,
      reviews: 28,
      views: 987,
    });
  }, []);

const data = [
  { name: "Jan", views: 200 },
  { name: "Feb", views: 150 },
  { name: "Mar", views: 220 },
  { name: "Apr", views: 300 },
  { name: "May", views: 210 },
  { name: "Jun", views: 250 },
];
  return (
    <div className="space-y-6">

      {/* 🔹 STATS CARDS */}
      <div className="grid md:grid-cols-4 gap-4">
       <Card
  title="Task Bids Won"
  value={stats.bids}
  icon={ClipboardList}
  color="bg-green-500"
/>

<Card
  title="Jobs Applied"
  value={stats.jobs}
  icon={Briefcase}
  color="bg-pink-500"
/>

<Card
  title="Reviews"
  value={stats.reviews}
  icon={Star}
  color="bg-yellow-500"
/>

<Card
  title="This Month Views"
  value={stats.views}
  icon={Eye}
  color="bg-blue-500"
/>
      </div>

      {/* 🔹 GRAPH + NOTES */}
      <div className="grid md:grid-cols-3 gap-4">

        {/* GRAPH */}
        <div className="md:col-span-2 bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-4">Profile Views</h2>

          {/* Placeholder (you will replace with chart) */}
          <div className="h-64 flex items-center justify-center text-gray-400">
            <ResponsiveContainer width="100%" height={250}>
  <LineChart data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="views" />
  </LineChart>
</ResponsiveContainer>
          </div>
        </div>

        {/* NOTES */}
        <NotesSection />
      </div>

      {/* 🔹 NOTIFICATIONS + ORDERS */}
      <div className="grid md:grid-cols-2 gap-4">

        {/* NOTIFICATIONS */}
        <Notifications />

        {/* ORDERS */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-4">Orders</h2>

          <ul className="text-sm space-y-2">
            <li>Premium Plan - Active</li>
            <li>Basic Plan - Expired</li>
          </ul>
        </div>

      </div>

    </div>
  );
}