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
import DocsSection from './pages/DocsSection';
import ScrollToTop from './ScrollToTop';
import UiSamples from './pages/UiSamples';
import ColorPicker from './components/colorpicker/ColorPicker';
import Blogs from './pages/blogs/Blogs';
import SingleBlog from './pages/blogs/SingleBlog';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <div id="app-scroll-container" className="h-screen overflow-y-auto">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/documentation" element={<DocsSection />} />
          <Route path="/templates" element={<EmailTemplates />} />
          <Route path="/dashboards" element={<Dashboards />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/ui-samples" element={<UiSamples />} />
          <Route path="/color-picker" element={<ColorPicker />} />
          <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/blog/:id/:slug" element={<SingleBlog />} />
        </Routes>
        </div>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
