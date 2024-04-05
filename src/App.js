import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LaptopApp from './Components/LaptopApp';
import MobileApp from './Components/MobileApp';
import Blog from './Components/Blog';
import BuildingInstruction from './Components/buildingInstruction';
import ModularConstruction from './Components/modularConstruction';
import PropertyBuilding from './Components/propertyBuildings'; // Import PropertyBuilding component
import SustainableBuildings from './Components/sustainableBuildings';
import TurnkeyConstruction from './Components/turnkeyConstruction';
import WoodGreen from './Components/woodGreen';
import EcoFriendlyPaint from './Components/ecoFriendlyPaint';
import CLTPanels from './Components/cltPanels';
import DronesConstruction from './Components/dronesConstruction';
import ManagementSoftware from './Components/managementSoftware';
import SafetyProcedure from './Components/safetyProcedure';
import './App.css';

function App() {
  const isMobile = window.matchMedia("(max-width: 767px)").matches;

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={isMobile ? <MobileApp /> : <LaptopApp />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/buildingInstruction" element={<BuildingInstruction />} />
          <Route path="/modularConstruction" element={<ModularConstruction />} />
          <Route path="/propertyBuildings" element={<PropertyBuilding />} /> {/* Add route for PropertyBuilding component */}
          <Route path="/sustainableBuildings" element={<SustainableBuildings />} /> {/* Add route for PropertyBuilding component */}
          <Route path="/turnkeyConstruction" element={<TurnkeyConstruction />} /> {/* Add route for PropertyBuilding component */}
          <Route path="/woodGreen" element={<WoodGreen />} /> {/* Add route for PropertyBuilding component */}
          <Route path="/ecoFriendlyPaint" element={<EcoFriendlyPaint />} /> {/* Add route for PropertyBuilding component */}
          <Route path="/cltPanels" element={<CLTPanels />} /> {/* Add route for PropertyBuilding component */}
          <Route path="/dronesConstruction" element={<DronesConstruction />} /> {/* Add route for PropertyBuilding component */}
          <Route path="/managementSoftware" element={<ManagementSoftware />} /> {/* Add route for PropertyBuilding component */}
          <Route path="/safetyProcedure" element={<SafetyProcedure />} /> {/* Add route for PropertyBuilding component */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
