import React from "react";
import StatsShowcase from "../components/StatsShowcase/StatsShowcase";
import VideoContainer from "../components/VideoContainer/VideoContainer";
import { EUAccessionClusters } from "../components/EUAccessionClusters/EUAccessionClusters";
import { StoriesSection } from "../components/Stories/StoriesSection";
import KeyFactsSection from "../components/KeyFactsSection/KeyFactsSection";
import { MdOverview }from "../components/MdOverview/MdOverview";

const Home = () => {
  return (
    <div>
        <MdOverview />
      <StatsShowcase />
      <VideoContainer />
      <EUAccessionClusters />
      <StoriesSection />
      <KeyFactsSection />
    </div>
  );
};

export default Home;