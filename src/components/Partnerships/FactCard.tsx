import React from "react";
import { LinkWithIcon } from "./LinkWithIcon";
import styles from "./FactCard.module.css";

interface FactCardProps {
  title: string;
  description: string;
  linkUrl: string;
  iconUrl: string;
}

export const FactCard: React.FC<FactCardProps> = ({
  title,
  description,
  linkUrl,
  iconUrl,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <div className={styles.icon} />
        <div className={styles.cardContent}>
          <div className={styles.textContent}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
          <LinkWithIcon href={linkUrl} label="Read more" iconSrc={iconUrl} />
        </div>
      </div>
    </article>
  );
};
