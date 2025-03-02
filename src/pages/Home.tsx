import React from "react";
import StatsShowcase from "../components/StatsShowcase/StatsShowcase";
import VideoContainer from "../components/VideoContainer/VideoContainer";
import { EUAccessionClusters } from "../components/EUAccessionClusters/EUAccessionClusters";
import { StoriesSection } from "../components/Stories/StoriesSection";
import KeyFactsSection from "../components/KeyFactsSection/KeyFactsSection";
import { MdOverview }from "../components/MdOverview/MdOverview";
import Newsletter from "../components/Newsletter/Newsletter";
import Partnerships from "../components/Partnerships/Partnerships";
import PartnershipsSection from "../components/PartnershipsSection/PartnershipsSection";
import Publications from "../components/Publications/Publications";
import SuccessStories from "../components/SuccessStories/SuccessStories";

const Home = () => {
  return (
    <div>
        <KeyFactsSection />
      <VideoContainer />
      <StatsShowcase />
      <StoriesSection />
      <SuccessStories />
      <Publications />
      <EUAccessionClusters />
      <PartnershipsSection />
      <Partnerships />
      <Newsletter />
      <MdOverview />
    </div>
  );
};

export default Home;