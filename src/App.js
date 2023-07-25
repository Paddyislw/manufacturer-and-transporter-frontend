import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Manufacturer from "./pages/Manufacturer";
import Transporter from "./pages/Transporter";
import "./index.css";
import AuthPage from "./pages/AuthPage";

const App = () => {
  return (
    <div className="font-sans">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/manufacturer" element={<Manufacturer />} />
        <Route path="/transporter" element={<Transporter />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
};

export default App;
