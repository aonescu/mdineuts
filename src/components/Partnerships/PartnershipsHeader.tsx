import React from "react";
import styles from "./PartnershipsHeader.module.css";

interface PartnershipsHeaderProps {
  subtitle: string;
  title: string;
  description: string;
}

export const PartnershipsHeader: React.FC<PartnershipsHeaderProps> = ({
  subtitle,
  title,
  description,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.textContainer}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <h1 className={styles.title}>{title}</h1>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </header>
  );
};
