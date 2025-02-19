import React from 'react';
import Navbar from './components/DesktopNav/DesktopNav';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer'; 
import StatsShowcase from './components/StatsShowcase/StatsShowcase';
import StoriesSection from './components/Stories/StoriesSection';
import KeyFactsSection from './components/KeyFactsSection/KeyFactsSection';
import TitleColumn from './components/TitleColumn/TitleColumn';
import PartnershipsSection from './components/PartnershipsSection/PartnershipsSection';
import Newsletter from './components/Newsletter/Newsletter';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        {/* Your main content goes here */}
        <StatsShowcase /> {/* Add Glance component inside main */}
        <Section /> {/* Add Section component inside main */}
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
        /> {/* Add StoriesSection component inside main */}
        <KeyFactsSection /> {/* Add KeyFactsSection component inside main */}
        <TitleColumn /> {/* Add TitleColumn component inside main */}
        <PartnershipsSection /> {/* Add PartnershipsSection component inside main */}
        <Newsletter /> {/* Add Newsletter component inside main */}
      </main>
      <Footer /> {/* Add Footer component outside main */}
    </div>
  );
};

export default App;