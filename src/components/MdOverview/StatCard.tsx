import React from "react";
import styles from "./MdOverview.module.css";

interface StatCardProps {
  icon: string;
  text: string;
}

export function StatCard({ icon, text }: StatCardProps) {
  return (
    <div className={styles.statCard}>
      <div dangerouslySetInnerHTML={{ __html: icon }} />
      <p className={styles.statText}>{text}</p>
    </div>
  );
}
