import React from "react";

export default function StatusBadge({ status }) {
  const base = "px-2 py-1 text-xs rounded-full font-medium";

  const styles =
    status === "Active"
      ? "bg-green-100 text-green-600"
      : status === "Pending"
      ? "bg-yellow-100 text-yellow-600"
      : "bg-red-100 text-red-600";

  return <span className={`${base} ${styles}`}>{status}</span>;
}