import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './lib/context/UserContext';
import RegistrationForm from './pages/RegistrationForm';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;