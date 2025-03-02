import React from "react";
import styles from "./StoriesSection.module.css";

export function StoriesHeader() {
  return (
    <header className={styles.headerSection}>
      <h2 className={styles.storiesLabel}>Stories</h2>
      <h1 className={styles.mainTitle}>Updates on our constant progress</h1>
    </header>
  );
}
