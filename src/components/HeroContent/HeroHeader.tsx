import React from "react";
import styles from "./HeroContent.module.css";

export const HeroHeader: React.FC = () => {
  return (
    <header className={styles.heroTextContent}>
      <div className={styles.textWrapper}>
        <h1 className={styles.headerText}>Overview</h1>
        <h2 className={styles.titleText}>
          A nation at the crossroads of Europe
        </h2>
      </div>
    </header>
  );
};
