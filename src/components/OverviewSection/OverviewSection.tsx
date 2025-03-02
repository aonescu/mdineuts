"use client";
import React from "react";
import styles from "./OverviewSection.module.css";
import ReformHeader from "./ReformHeader";
import ImageSection from "./ImageSection";
import ReformCard from "./ReformCard";

const OverviewSection: React.FC = () => {
  const reforms = [
    {
      label: "Label",
      title: "Justice Reform",
      description:
        "Comprehensive efforts to ensure judicial independence, combat corruption, and strengthen the rule of law.",
    },
    {
      label: "Label",
      title: "Deoligarchisation",
      description:
        "Measures to reduce the influence of oligarchs and promote fair economic competition.",
    },
    {
      label: "Label",
      title: "Economic Growth",
      description:
        "Investments in digital transformation, IT, and agriculture, supported by EU funding.",
    },
    {
      label: "Label",
      title: "Foreign Policy Alignment",
      description:
        "Moldova's consistent support for EU common foreign and security policy, particularly in the context of regional stability.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.mainContent}>
        <ReformHeader />
        <ImageSection />
      </div>
      <div className={styles.reformGrid}>
        {reforms.map((reform, index) => (
          <ReformCard
            key={index}
            label={reform.label}
            title={reform.title}
            description={reform.description}
          />
        ))}
      </div>
    </section>
  );
};

export default OverviewSection;
