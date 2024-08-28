import React, { useState, useEffect } from 'react';

const HallAvailability = ({ hallId }) => {
  const [availability, setAvailability] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAvailability = async () => {
      setLoading(true);
      try {
        // Replace with your API call
        const response = await fetch(`/api/halls/${hallId}/availability`);
        const data = await response.json();
        setAvailability(data);
      } catch (error) {
        console.error('Error fetching availability:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAvailability();

    // Optionally set up real-time updates
    const intervalId = setInterval(fetchAvailability, 5000); // Update every 5 seconds

    return () => clearInterval(intervalId);
  }, [hallId]);

  if (loading) {
    return <p>Loading availability...</p>;
  }

  if (availability.length === 0) {
    return <p>No availability data available.</p>;
  }

  return (
    <div>
      <h2>Available Time Slots for Hall ID: {hallId}</h2>
      <ul>
        {availability.map(slot => (
          <li key={slot.id}>
            {slot.time}: {slot.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HallAvailability;
