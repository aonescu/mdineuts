import React from "react";
import { Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import MoldovaInEU from "./pages/MoldovaInEU";
import EUInMoldova from "./pages/EUInMoldova";
import Home from "./pages/Home";
import Stories from "./pages/Stories";
import Toolbox from "./pages/Toolbox";
import HeaderAnim from "./pages/HeaderAnim";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/moldova-in-eu" element={<MoldovaInEU />} />
      <Route path="/eu-in-moldova" element={<EUInMoldova />} />
      <Route path="/stories" element={<Stories />} />
      <Route path="/toolbox" element={<Toolbox />} />
      <Route path="/anim" element={<HeaderAnim />} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
};

export default RoutesComponent;
