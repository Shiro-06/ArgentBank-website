import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; 
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import './css/main.css'; 
// import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;