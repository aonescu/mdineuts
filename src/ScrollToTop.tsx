// ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top of the page on route change
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;


// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from "./components/DesktopNav/DesktopNav";
// import Footer from "./components/Footer/Footer";
// import RoutesComponent from "./Routes"; // Import RoutesComponent
// import ScrollToTop from "./ScrollToTop"; // Import ScrollToTop
// import "./styles/global.css";

// const App = () => {
//   return (
//     <Router>
//       <ScrollToTop /> {/* Ensure ScrollToTop is rendered inside Router */}
//       <Navbar />
//       <main className="content-wrapper">
//         <RoutesComponent /> {/* Load routes */}
//       </main>
//       <Footer />
//     </Router>
//   );
// };

// export default App;
