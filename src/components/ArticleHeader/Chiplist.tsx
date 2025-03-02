import React from "react";
import styles from "./Header.module.css";

export const ChipList: React.FC = () => {
  return (
    <div className={styles.chipContainer}>
      <span className={styles.chip}>Chip</span>
      <span className={styles.chip}>Chip</span>
      <span className={styles.chip}>Chip</span>
    </div>
  );
};
