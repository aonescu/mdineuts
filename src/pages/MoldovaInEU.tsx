import React from "react";
import { StoriesSection } from "../components/Stories/StoriesSection";
import KeyFactsSection from "../components/KeyFactsSection/KeyFactsSection";
import TitleColumn from "../components/TitleColumn/TitleColumn";
import PartnershipsSection from "../components/PartnershipsSection/PartnershipsSection";
import Newsletter from "../components/Newsletter/Newsletter";
import Partnerships from "../components/Partnerships/Partnerships";

const MoldovaInEU = () => {
  return (
    <div>
      <Partnerships />
      <StoriesSection />
      <KeyFactsSection />
      <TitleColumn />
      <PartnershipsSection />
      <Newsletter />
    </div>
  );
};

export default MoldovaInEU;
