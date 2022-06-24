import { Routes, Route, Navigate } from "react-router-dom";
import About from "./About";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/about" />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="*" element={<Navigate to="/about" />} />
    </Routes>
  );
};

export default RouteList;