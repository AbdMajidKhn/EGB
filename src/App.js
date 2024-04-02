import React, { useState, useEffect } from 'react';
import './App.css';
import LaptopApp from './Components/LaptopApp';
import MobileApp from './Components/MobileApp';
function App(){

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    return isMobile ? <MobileApp /> : <LaptopApp />;
}

export default App;
