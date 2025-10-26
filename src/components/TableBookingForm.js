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
      // Симулираме call към API
      await new Promise(resolve => setTimeout(resolve, 500));
      setStatus('Reservation successful!');
      setFormData({
        name: '',
        date: '',
        time: '',
        guests: 1,
        specialRequest: '',
      });
    } catch {
      setStatus('Network error. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="date">Date:</label>
      <input
        id="date"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="time">Time:</label>
      <input
        id="time"
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />

      <label htmlFor="guests">Number of Guests:</label>
      <input
        id="guests"
        type="number"
        name="guests"
        min="1"
        value={formData.guests}
        onChange={handleChange}
        required
      />

      <label htmlFor="specialRequest">Special Requests:</label>
      <textarea
        id="specialRequest"
        name="specialRequest"
        value={formData.specialRequest}
        onChange={handleChange}
      />

      <button type="submit">Book Table</button>

      {status && <p className="status">{status}</p>}
    </form>
  );
}

export default TableBookingForm;
