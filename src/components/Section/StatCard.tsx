"use client";
import React from "react";
import styles from "./Section.module.css";

interface StatCardProps {
  label: string;
  value: string;
  isFullWidth?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  isFullWidth = false,
}) => {
  return (
    <article className={isFullWidth ? styles.factCard2 : styles.factCard}>
      <p className={styles.label}>{label}</p>
      <div className={styles.container}>
        <div className={styles.label2}>
          <span className={styles.materialSymbolsIcons} />
          <p className={styles.label3}>{value}</p>
        </div>
        <div className={styles.subtext} />
      </div>
    </article>
  );
};

export default StatCard;
