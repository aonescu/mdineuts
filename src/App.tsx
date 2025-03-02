import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/DesktopNav/DesktopNav";
import Footer from "./components/Footer/Footer";
import RoutesComponent from "./Routes"; // Import RoutesComponent
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="content-wrapper">
        <RoutesComponent /> {/* Load routes */}
      </main>
      <Footer />
    </Router>
  );
};

export default App;