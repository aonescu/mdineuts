import React from "react";
import styles from "./ReformHeader.module.css";

const ReformHeader: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headerWrapper}>
          <span className={styles.subtitle}>Key reforms</span>
          <h1 className={styles.title}>
            Transformative actions driving Moldova's EU integration
          </h1>
        </div>
        <p className={styles.description}>
          Moldova has undertaken a series of transformative reforms to align
          with EU standards and strengthen its democratic institutions. These
          reforms span governance, justice, economy, and foreign policy,
          demonstrating Moldova's commitment to European values.
        </p>
      </div>
    </header>
  );
};

export default ReformHeader;
