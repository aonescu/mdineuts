"use client";
import React, { useState } from "react";
import styles from "./EUIntegrationProgress.module.css";
import { ProgressSection } from "./ProgressSection";
import { StageViewer } from "./StageViewer";
import { Stage } from "./types";

const stages: Stage[] = [
  {
    number: 1,
    title: "Screening Process (Ongoing)",
    description: `The European Commission is currently conducting a detailed examination of Moldova's alignment with EU laws and standards (the acquis communautaire). This process, known as screening, involves analyzing Moldova's legal and institutional framework across 35 policy areas (clusters).

The screening process is expected to continue through 2025, after which the EU will provide feedback and recommendations for further reforms.`,
  },
  {
    number: 2,
    title: "Negotiation Framework",
    description:
      "The EU will establish a framework for negotiations, outlining the principles and procedures for the accession talks.",
  },
  {
    number: 3,
    title: "Chapter Negotiations",
    description:
      "Moldova will negotiate each chapter of the EU acquis, implementing necessary reforms and adjustments.",
  },
  {
    number: 4,
    title: "Accession Treaty",
    description:
      "Upon successful completion of negotiations, an accession treaty will be drafted and signed by all EU member states.",
  },
];

const EUIntegrationProgress: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(1);

  const handlePrevious = () => {
    if (currentStage > 1) {
      setCurrentStage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentStage < stages.length) {
      setCurrentStage((prev) => prev + 1);
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Onest:wght@400;900&display=swap"
      />
      <main className={styles.mainContainer}>
        <ProgressSection />
        <StageViewer
          currentStage={currentStage}
          stages={stages}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </main>
    </>
  );
};

export default EUIntegrationProgress;
