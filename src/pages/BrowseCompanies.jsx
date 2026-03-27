import React, { useState } from "react";
import { companies } from "../data/companies";
import Navbar from "../components/Navbar";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function BrowseCompanies() {
  const [selectedLetter, setSelectedLetter] = useState("A");

  // FILTER
  const filteredCompanies = companies.filter((c) =>
    c.name.startsWith(selectedLetter)
  );

  return (
   <>
   <Navbar />
    <div className="bg-[#0B1120] min-h-screen pt-24  p-6">
      
      {/* HEADER */}
      <h1 className="text-3xl  mb-6 mt-6 font-sans text-gray-700">
        Browse Companies
      </h1>

      {/* ALPHABET FILTER */}
      <div className="bg-white p-4 rounded-lg justify-center shadow flex flex-wrap gap-2 mb-6">
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => setSelectedLetter(letter)}
            className={`px-3 py-1 rounded ${
              selectedLetter === letter
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {letter}
          </button>
        ))}
      </div>

      {/* COMPANY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredCompanies.length > 0 ? (
          filteredCompanies.map((company) => (
            <div
              key={company.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              {/* LOGO */}
              {company.logo ? (
                <img
                  src={company.logo}
                  alt=""
                  className="w-16 h-16 mx-auto mb-3"
                />
              ) : (
                <div className="w-16 h-16 bg-gray-300 mx-auto mb-3 rounded" />
              )}

              {/* NAME */}
              <h3 className="font-medium">{company.name}</h3>

              {/* RATING */}
              {company.rating ? (
                <div className="mt-2 text-yellow-500 text-sm">
                  ⭐ {company.rating}
                </div>
              ) : (
                <p className="text-xs text-gray-400 mt-2">
                  Minimum of 3 votes required
                </p>
              )}
            </div>
          ))
        ) : (
          <p>No companies found</p>
        )}
      </div>
    </div>
   </>
  );
}