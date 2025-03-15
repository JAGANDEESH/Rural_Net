import { useEffect, useState } from "react";
import axios from "axios";

const GovernmentUpdates = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/government")
      .then(response => setUpdates(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold">Government Updates</h2>
      {updates.map(update => (
        <div key={update.id}>
          <h3>{update.title}</h3>
          <p>{update.description}</p>
          <p className="text-sm text-gray-500">Date: {update.date}</p>
        </div>
      ))}
    </div>
  );
};

export default GovernmentUpdates;
