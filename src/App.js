import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LaptopApp from './Components/LaptopApp';
import MobileApp from './Components/MobileApp';
import Blog from './Components/Blog';
import './App.css';
import i18n from './i18n';

function App() {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Routes for different components */}
          <Route path="/" element={isMobile ? <MobileApp /> : <LaptopApp />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
