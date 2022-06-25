import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home/component";
import Portfolio from "./Portfolio/component";
import Resume from "./Resume/component";

function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default RouteList;