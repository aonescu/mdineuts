"use client";
import React from "react";
import styles from "./KeyFactCard.module.css";

interface KeyFactCardProps {
  title: string;
  value: string;
  description?: string;
  extraInfo?: string;
  link?: string;
}

export const KeyFactCard: React.FC<KeyFactCardProps> = ({
  title,
  value,
  description,
  extraInfo,
  link,
}) => {
  const ValueContent = () => {
    if (link) {
      return (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.value}
        >
          {value}
        </a>
      );
    }
    return <span className={styles.value}>{value}</span>;
  };

  return (
    <article className={styles.factCard}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        <div className={styles.valueWrapper}>
          <span className={styles.icon} />
          <ValueContent />
        </div>
        {description && <p className={styles.description}>{description}</p>}
        {extraInfo && <p className={styles.extraInfo}>{extraInfo}</p>}
      </div>
    </article>
  );
};
