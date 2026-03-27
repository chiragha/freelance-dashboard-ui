import React, { useState } from "react";
import { Upload, X, ArrowUp } from "lucide-react";

const countries = ["India", "USA", "UK", "Canada", "Australia"];

export default function SettingsPage() {
  const [avatar, setAvatar] = useState(null);
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [coverLetter, setCoverLetter] = useState(null);
  const [contract, setContract] = useState(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    accountType: "",
    email: "tom@example.com",
    hourlyRate: 35,
    tagline: "",
    nationality: "",
    about: "",
    currentPassword: "",
    newPassword: "",
    repeatPassword: "",
    twoStep: false,
  });
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  // Avatar Upload
  const handleAvatar = (e) => {
    const file = e.target.files[0];
    if (file) setAvatar(URL.createObjectURL(file));
  };

  // Skills Add
  const addSkill = () => {
    if (skillInput && !skills.includes(skillInput)) {
      setSkills([...skills, skillInput]);
      setSkillInput("");
    }
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  // Scroll to top
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
   <div className="bg-gray-50 min-h-screen px-4 sm:px-6 md:px-10 py-6 relative">

  <h1 className="text-2xl sm:text-3xl font-semibold text-blue-500 mb-6">
    Settings
  </h1>

  {/* MAIN GRID */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

    {/* LEFT - ACCOUNT */}
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
      <h2 className="text-lg sm:text-2xl text-gray-500 mb-4">
        My Account
      </h2>

      {/* Avatar */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 text-center sm:text-left">
        <div className="relative group">
          <img
            src={avatar || "https://i.pravatar.cc/100"}
            className="w-20 h-20 rounded-full object-cover border"
          />
          <label className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 cursor-pointer rounded-full transition">
            Change
            <input type="file" onChange={handleAvatar} className="hidden" />
          </label>
        </div>
        <p className="text-sm text-gray-500">
          Upload a profile picture
        </p>
      </div>

      {/* Inputs */}
      <div className="space-y-4">
        <input name="firstName" onChange={handleChange} placeholder="First Name" className="input" />
        <input name="lastName" onChange={handleChange} placeholder="Last Name" className="input" />
      </div>

      {/* Account Type */}
      <div className="relative mt-4">
        <label className="label">Account Type</label>
        <select name="accountType" onChange={handleChange} className="select">
          <option value="">Select Account Type</option>
          <option value="freelancer">Freelancer</option>
          <option value="employer">Employer</option>
        </select>
      </div>

      {/* Email */}
      <input
        value={form.email}
        disabled
        className="input mt-4 bg-gray-100"
      />
    </div>

    {/* RIGHT - PROFILE */}
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
      <h2 className="font-semibold mb-4 text-lg">My Profile</h2>

      {/* Rate */}
      <label className="text-sm">
        Hourly Rate: <span className="text-blue-600">${form.hourlyRate}</span>
      </label>
      <input
        type="range"
        min="10"
        max="200"
        name="hourlyRate"
        value={form.hourlyRate}
        onChange={handleChange}
        className="w-full accent-blue-600 mb-4"
      />

      {/* Skills */}
      <div className="mb-4">
        <input
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type skill and press Enter"
          className="input"
        />
        <button
          onClick={addSkill}
          className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add Skill
        </button>

        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill) => (
            <span key={skill} className="tag">
              {skill}
              <X size={12} onClick={() => removeSkill(skill)} />
            </span>
          ))}
        </div>
      </div>

      {/* Upload */}
      <div className="border-2 border-dashed p-4 rounded text-center mb-4">
        <p className="text-sm text-gray-500">Upload Cover Letter</p>
        <input type="file" onChange={(e) => setCoverLetter(e.target.files[0])} />
      </div>

      {/* Tagline */}
      <input name="tagline" onChange={handleChange} placeholder="Tagline" className="input mb-4" />

      {/* Nationality */}
      <div className="relative mb-4">
        <label className="label">Nationality</label>
        <select name="nationality" onChange={handleChange} className="select">
          <option value="">Select Country</option>
          {countries.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* About */}
      <textarea name="about" onChange={handleChange} placeholder="Introduce yourself" className="input" />
    </div>
  </div>

  {/* PASSWORD */}
  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm mt-6">
    <h2 className="font-semibold mb-4">Password & Security</h2>

    <div className="space-y-4">
      <input type="password" name="currentPassword" placeholder="Current Password" onChange={handleChange} className="input" />
      <input type="password" name="newPassword" placeholder="New Password" onChange={handleChange} className="input" />
      <input type="password" name="repeatPassword" placeholder="Repeat Password" onChange={handleChange} className="input" />
    </div>

    <label className="flex items-center gap-2 mt-3 text-sm">
      <input type="checkbox" name="twoStep" onChange={handleChange} />
      Enable two-step verification
    </label>
  </div>

  {/* SAVE BUTTON */}
  <div className="sticky bottom-0 bg-white py-3 mt-6 border-t flex justify-center md:justify-end">
    <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg">
      Save Changes
    </button>
  </div>

  {/* SCROLL TOP */}
  <button
    onClick={scrollTop}
    className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow"
  >
    <ArrowUp size={18} />
  </button>
</div>
  );
}
