import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PersonPage from './pages/PersonPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:name" element={<PersonPage />} />
      </Routes>
    </Router>
  );
}

export default App;