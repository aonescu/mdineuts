import React from "react";
import styles from "./SupportCard.module.css";

interface SupportCardProps {
  icon: string;
  title: string;
  description: string;
}

export const SupportCard: React.FC<SupportCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className={styles.card}>
      <i className={`ti ti-${icon} ${styles.icon}`} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <a href="#" className={styles.readMore}>
          <span>Read more</span>
          <i className="ti ti-arrow-up-right" />
        </a>
      </div>
    </article>
  );
};
