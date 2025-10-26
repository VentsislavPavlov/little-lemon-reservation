import React, { useState } from 'react';
import '../styles.css';

function TableBookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
    specialRequest: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // Fake API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setStatus('Reservation successful!');
      setFormData({
        name: '',
        date: '',
        time: '',
        guests: 1,
        specialRequest: '',
      });
    } catch (err) {
      setStatus('Network error. Please try again.');
    }
  };

  return (
    <div>
      <h2>Table Reservation - Little Lemon</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>Time:</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <label>Number of Guests:</label>
        <input
          type="number"
          name="guests"
          min="1"
          value={formData.guests}
          onChange={handleChange}
          required
        />

        <label>Special Requests:</label>
        <textarea
          name="specialRequest"
          value={formData.specialRequest}
          onChange={handleChange}
        />

        <button type="submit">Book Table</button>
      </form>

      {status && <p className="status">{status}</p>}
    </div>
  );
}

export default TableBookingForm;
