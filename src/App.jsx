import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Components from './pages/Components';
import EmailTemplates from './pages/EmailTemplates';
import Dashboards from './pages/Dashboards';
import Admin from './pages/Admin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/templates" element={<EmailTemplates />} />
        <Route path="/dashboards" element={<Dashboards />} />
        <Route path="/admin" element={<Admin />} /> 
        <Route path="/coming-soon" element={<ComingSoon />} /> 
      </Routes>
      <ToastContainer position="bottom-center" theme="dark" autoClose={2000} />
    </Router>
  );
}

export default App;
