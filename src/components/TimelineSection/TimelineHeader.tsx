import styles from "./TimelineSection.module.css";

export function TimelineHeader() {
  return (
    <header className={styles.header}>
      <h2 className={styles.sectionLabel}>Integration timeline</h2>
      <h1 className={styles.title}>
        Main milestones marking Moldova's progress
      </h1>
    </header>
  );
}