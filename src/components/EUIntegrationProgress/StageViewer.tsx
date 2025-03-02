import React from "react";
import styles from "./EUIntegrationProgress.module.css";
import { NumberIndicator } from "./NumberIndicator";
import { StageNavigation } from "./StageNavigation";
import { Stage } from "./types";

interface StageViewerProps {
  currentStage: number;
  stages: Stage[];
  onPrevious: () => void;
  onNext: () => void;
}

export const StageViewer: React.FC<StageViewerProps> = ({
  currentStage,
  stages,
  onPrevious,
  onNext,
}) => {
  return (
    <section className={styles.rightSection}>
      <div className={styles.numberRow}>
        {stages.map((stage, index) => (
          <NumberIndicator
            key={stage.number}
            number={stage.number}
            isActive={index + 1 === currentStage}
          />
        ))}
      </div>
      <article>
        <h2 className={styles.contentTitle}>
          {stages[currentStage - 1].title}
        </h2>
        <p className={styles.contentDescription}>
          {stages[currentStage - 1].description}
        </p>
      </article>
      <StageNavigation
        onPrevious={onPrevious}
        onNext={onNext}
        canGoPrevious={currentStage > 1}
        canGoNext={currentStage < stages.length}
      />
    </section>
  );
};
