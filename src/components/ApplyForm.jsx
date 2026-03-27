import { useState } from "react";
import { submitApplication } from "../api/applicationApi";

export default function ApplyForm({ jobTitle, closeModal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    file: null,
  });

  const [dragActive, setDragActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // ✅ Handle File Validation
  const validateFile = (file) => {
    if (!file) return false;

    if (file.type !== "application/pdf") {
      setError("Only PDF files allowed");
      return false;
    }

    setError("");
    return true;
  };

  // ✅ Handle Drop
  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    if (validateFile(file)) {
      setFormData({ ...formData, file });
    }
  };

  // ✅ Handle Drag
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  // ✅ Handle File Input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (validateFile(file)) {
      setFormData({ ...formData, file });
    }
  };

  // ✅ Submit with Progress Simulation

  // Simulate upload progress
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.file) {
      setError("All fields required");
      return;
    }

    setError("");
    setLoading(true);
    setProgress(0);

    try {
      const response = await submitApplication(formData, (prog) => {
        setProgress(prog); // 👈 progress comes from API
      });

      if (response.success) {
        setSuccess(true);

        setTimeout(() => {
          closeModal();
        }, 2000);
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Success UI
  if (success) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold text-green-600">
          Application submitted successfully ✅
        </h2>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Apply for<span className="text-blue-500 font-sans font-semibold text-xl p-2">{jobTitle}</span></h2>

      {/* Name */}
      <input
        type="text"
        placeholder="First and Last Name"
        className="w-full border p-2 rounded"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email Address"
        className="w-full border p-2 rounded"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      {/* ✅ Drag & Drop Area */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border-2 border-dashed p-6 text-center rounded cursor-pointer
        ${dragActive ? "border-blue-600 bg-blue-50" : "border-gray-300"}`}
      >
        <p className="text-sm text-gray-600">
          Drag & drop your CV here or click to upload
        </p>

        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="hidden"
          id="fileUpload"
        />

        <label htmlFor="fileUpload" className="text-blue-600 cursor-pointer">
          Select File
        </label>

        {/* Show file name */}
        {formData.file && (
          <p className="text-green-600 mt-2">{formData.file.name}</p>
        )}
      </div>

      {/* Error */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* ✅ Progress Bar */}
      {loading && (
        <div className="w-full bg-gray-200 rounded h-3">
          <div
            className="bg-blue-600 h-3 rounded transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}

      {/* Submit */}
      <button
        disabled={loading}
        className={`w-full py-2 rounded text-white ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
        }`}
      >
        {loading ? `Uploading ${progress}%` : "Apply Now"}
      </button>
    </form>
  );
}
