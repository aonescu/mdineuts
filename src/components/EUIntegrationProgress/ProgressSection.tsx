import React from "react";
import styles from "./EUIntegrationProgress.module.css";

export const ProgressSection: React.FC = () => {
  return (
    <section className={styles.leftSection}>
      <h1 className={styles.title}>
        What's next for Moldova's EU integration?
      </h1>
      <p className={styles.description}>
        Moldova has undertaken a series of transformative reforms to align with
        EU standards and strengthen its democratic institutions. These reforms
        span governance, justice, economy, and foreign policy, demonstrating
        Moldova's commitment to European values.
      </p>
    </section>
  );
};
