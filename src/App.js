import React from 'react';
import { ReactComponent as LemonLogo } from './assets/lemon-logo.svg';
import TableBookingForm from './components/TableBookingForm';
import './styles.css';

function App() {
  return (
    <div className="app-container">
      <div className="logo-container">
        <LemonLogo className="logo" />
      </div>
      <TableBookingForm />
    </div>
  );
}

export default App;
