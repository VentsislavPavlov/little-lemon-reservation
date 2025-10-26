import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableBookingForm from '../TableBookingForm';

describe('TableBookingForm', () => {
  test('renders all form fields', () => {
    render(<TableBookingForm />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
  });

  test('updates input values correctly', () => {
    render(<TableBookingForm />);
    const nameInput = screen.getByLabelText(/Name/i);
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput.value).toBe('John Doe');
  });

  test('shows success message after form submission', async () => {
    render(<TableBookingForm />);
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Date/i), { target: { value: '2025-12-31' } });
    fireEvent.change(screen.getByLabelText(/Time/i), { target: { value: '18:00' } });
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: '2' } });
    fireEvent.click(screen.getByRole('button', { name: /Book Table/i }));
    expect(await screen.findByText(/Reservation successful/i)).toBeInTheDocument();
  });
});
