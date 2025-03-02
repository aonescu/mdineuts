import React from "react";
import styles from "./EUInvestments.module.css";

interface InvestmentHeaderProps {
  subtitle: string;
  title: string;
  description: string;
}

export const InvestmentHeader: React.FC<InvestmentHeaderProps> = ({
  subtitle,
  title,
  description,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.titleSection}>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </header>
  );
};
