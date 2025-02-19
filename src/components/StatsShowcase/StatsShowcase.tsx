"use client";
import React from "react";
import styles from "./StatsShowcase.module.css";
import StatsSection from "./StatsSection";

const StatsShowcase: React.FC = () => {
  return (
    <section className={styles.statsShowcase}>
      <StatsSection
        number="40%"
        title="women in parliament"
        description="We show the way in gender equality, with women holding top positions in public administration, business, and technology."
      />
      <StatsSection
        number="2x"
        title="economic growth"
        description="We have doubled our economy in just 8 years, transitioning Moldova to a middle-upper income status."
        variant="centered"
      />
      <StatsSection
        number="10%"
        title="of GDP from IT"
        description="Our software and IT sector is growing rapidly, with exports exceeding €350 million in recent years."
        variant="spaced"
      />
    </section>
  );
};

export default StatsShowcase;
