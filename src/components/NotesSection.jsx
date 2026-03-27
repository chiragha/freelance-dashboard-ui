import React, { useState, useEffect } from "react";

export default function NotesSection() {
  const [notes, setNotes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newNote, setNewNote] = useState({
    priority: "",
    text: "",
  });

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes"));
    if (saved) setNotes(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleChange = (e) => {
    setNewNote({
      ...newNote,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    if (!newNote.text || !newNote.priority) return;

    setNotes([...notes, newNote]);
    setNewNote({ priority: "", text: "" });
    setShowModal(false);
  };

  return (
    <div className="bg-white p-4 rounded shadow">

      <h2 className="font-semibold mb-4">Notes</h2>

      {/* NOTES LIST */}
      <ul className="space-y-2 text-sm">
        {notes.map((note, index) => (
          <li
            key={index}
            className="p-2 rounded bg-gray-100 flex justify-between"
          >
            <span>{note.text}</span>
            <span
              className={`text-xs ${
                note.priority === "High"
                  ? "text-red-500"
                  : note.priority === "Medium"
                  ? "text-yellow-500"
                  : "text-green-500"
              }`}
            >
              {note.priority}
            </span>
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <button
        onClick={() => setShowModal(true)}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
      >
        Add Note
      </button>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

          <div className="bg-white p-6 rounded-lg w-80 space-y-4">

            <h2 className="text-lg font-semibold">Add Note</h2>

            <select
              name="priority"
              value={newNote.priority}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Select Priority</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

            <input
              type="text"
              name="text"
              placeholder="Enter note"
              value={newNote.text}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />

            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleAdd}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Add
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}