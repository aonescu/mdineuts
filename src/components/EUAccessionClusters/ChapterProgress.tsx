"use client";
import React from "react";
import styles from "./EUAccessionClusters.module.css";

interface ChapterProgressProps {
  current: number;
  total: number;
  color: "blue" | "yellow" | "purple" | "green" | "pink";
  progressClass: string;
}

export const ChapterProgress: React.FC<ChapterProgressProps> = ({
  current,
  total,
  color,
  progressClass,
}) => {
  const getProgressBarClass = () => {
    switch (color) {
      case "yellow":
        return styles.progressBaryellow;
      case "purple":
        return styles.progressBarpurple;
      case "green":
        return styles.progressBargreen;
      case "pink":
        return styles.progressBarpink;
      default:
        return styles.progressBar;
    }
  };

  return (
    <div className={getProgressBarClass()}>
      <div className={progressClass}>
        <div className={styles.progressText}>
          {current}/{total}
        </div>
      </div>
    </div>
  );
};
