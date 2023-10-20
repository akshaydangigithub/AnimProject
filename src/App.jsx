import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage";
import VendorContact from "./screens/VendorContact"
import VendorDashboard from "./screens/VendorDashboard";
import Track from "./components/Track";
import UploadLeads from "./components/UploadLeads";
import Ongoing from "./components/Ongoing";
import Closed from "./components/Closed";
import Reports from "./components/Reports";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/vendor/contact" element={<VendorContact />} />
      <Route path="/vendor/dashboard" element={<VendorDashboard />}>
        <Route path="track" element={<Track />} />
        <Route path="uploadLeads" element={<UploadLeads />} />
        <Route path="ongoing" element={<Ongoing />} />
        <Route path="closed" element={<Closed />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  );
};

export default App;
