import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/DesktopNav/DesktopNav';
import Footer from './components/Footer/Footer';
import StatsShowcase from './components/StatsShowcase/StatsShowcase';
import { StoriesSection } from './components/Stories/StoriesSection';
import KeyFactsSection from './components/KeyFactsSection/KeyFactsSection';
import TitleColumn from './components/TitleColumn/TitleColumn';
import PartnershipsSection from './components/PartnershipsSection/PartnershipsSection';
import Newsletter from './components/Newsletter/Newsletter';
import Overview from './pages/Overview';
import MoldovaInEU from './pages/MoldovaInEU';
import EUInMoldova from './pages/EUInMoldova';
import Stories from './pages/Stories';
import Toolbox from './pages/Toolbox';
import { EUAccessionClusters } from './components/EUAccessionClusters/EUAccessionClusters';
import VideoContainer from './components/VideoContainer/VideoContainer';
import GreetingHeader from './components/GreetingHeader/GreetingHeader';
import HeroContent from './components/HeroContent/HeroContent';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <GreetingHeader />
        <main className="content-wrapper">
          <Routes>
            {/* <Route path="/" element={<Overview />} /> */}
            <Route path="/moldova-in-eu" element={<MoldovaInEU />} />
            <Route path="/eu-in-moldova" element={<EUInMoldova />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/toolbox" element={<Toolbox />} />
          </Routes>
          
          <StatsShowcase />
          {/* <HeroContent /> */}
          <VideoContainer />
          <EUAccessionClusters />
          <StoriesSection />
          <KeyFactsSection />
          <TitleColumn />
          <PartnershipsSection />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </Router>
  );
};


export default App;