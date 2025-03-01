import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/DesktopNav/DesktopNav';
import Footer from './components/Footer/Footer';
import StatsShowcase from './components/StatsShowcase/StatsShowcase';
import StoriesSection from './components/Stories/StoriesSection';
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
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main className="content-wrapper">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/moldova-in-eu" element={<MoldovaInEU />} />
            <Route path="/eu-in-moldova" element={<EUInMoldova />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/toolbox" element={<Toolbox />} />
          </Routes>
          <StatsShowcase />
          <EUAccessionClusters />
          <StoriesSection 
            title="Sample Title" 
            subtitle="Sample Subtitle" 
            description="Sample Description" 
            articles={[
              { image: '', header: 'Article 1', description: 'Description for article 1', content: 'Content for article 1', linkText: 'Read more', linkIcon: 'icon1' },
              { image: 'src/assets/story.svg', header: 'Article 2', description: 'Description for article 2', content: 'Content for article 2', linkText: 'Read more', linkIcon: 'icon2' },
              { image: 'src/assets/story.svg', header: 'Article 3', description: 'Description for article 3', content: 'Content for article 3', linkText: 'Read more', linkIcon: 'icon3' },
              { image: 'src/assets/story.svg', header: 'Article 4', description: 'Description for article 4', content: 'Content for article 4', linkText: 'Read more', linkIcon: 'icon4' }
            ]} 
          />
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