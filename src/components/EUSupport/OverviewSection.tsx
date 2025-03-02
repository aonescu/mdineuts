import React from "react";
import styles from "./OverviewSection.module.css";

interface OverviewSectionProps {
  title: string;
  heading: string;
  description: string;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({
  title,
  heading,
  description,
}) => {
  return (
    <section className={styles.overviewSection}>
      <h2 className={styles.overviewTitle}>{title}</h2>
      <h1 className={styles.overviewHeading}>{heading}</h1>
      <p className={styles.overviewDescription}>{description}</p>
    </section>
  );
};
