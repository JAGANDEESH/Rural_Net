import React, { useEffect, useState } from "react";
import axios from "axios";

const GovernmentUpdates = () => {
  const [updates, setUpdates] = useState([]); // Store API data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch government updates from the API
  useEffect(() => {
    axios
      .post("http://localhost:5000/api/government")
      .then((response) => {
        setUpdates(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching updates:", error);
        setError("Failed to load government updates");
        setLoading(false);
      });
  }, []);

  return (
    <div className="py-12 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Government Updates
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Stay informed about the latest government schemes and services.
        </p>
      </div>

      {/* ✅ Show Loading State */}
      {loading && <p className="text-center text-xl">Loading updates...</p>}

      {/* ✅ Show Error Message */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* ✅ Display Updates */}
      {!loading && !error && (
        <div className="max-w-4xl mx-auto space-y-6">
          {updates.map((update) => (
            <div key={update.id} className="card p-6 border border-white/10 rounded-lg shadow-md hover:bg-white/5 transition">
              <h2 className="text-2xl font-bold text-primary">{update.title}</h2>
              <p className="text-text-secondary mt-2">{update.description}</p>
              <p className="text-sm text-gray-400 mt-4">📅 {new Date(update.date).toDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GovernmentUpdates;
