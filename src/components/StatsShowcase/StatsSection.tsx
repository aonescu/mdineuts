"use client";
import React from "react";
import styles from "./StatsShowcase.module.css";

interface StatsSectionProps {
  number: string;
  title: string;
  description: string;
  variant?: "default" | "centered" | "spaced";
}

const StatsSection: React.FC<StatsSectionProps> = ({
  number,
  title,
  description,
  variant = "default",
}) => {
  const containerClass =
    variant === "centered"
      ? styles.statsSectionCentered
      : variant === "spaced"
        ? styles.statsSectionSpaced
        : styles.statsSection;

  return (
    <article className={containerClass}>
      <div className={styles.statsContent}>
        <header className={styles.statsHeader}>
          <p className={styles.statsNumber}>{number}</p>
          <h2 className={styles.statsTitle}>{title}</h2>
        </header>
        <p className={styles.statsDescription}>{description}</p>
      </div>
    </article>
  );
};

export default StatsSection;
