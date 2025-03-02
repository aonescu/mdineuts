"use client";
import React from "react";
import styles from "./ReformCard.module.css";

interface ReformCardProps {
  label: string;
  title: string;
  description: string;
  iconUrl?: string;
}

const ReformCard: React.FC<ReformCardProps> = ({
  label,
  title,
  description,
}) => {
  return (
    <article className={styles.card}>
      <span className={styles.label}>{label}</span>
      <div className={styles.content}>
        <div className={styles.iconContainer} />
        <div className={styles.textContent}>
          <div className={styles.titleWrapper}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
          </div>
          <a href="#" className={styles.link}>
            <span>Read more</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/eded537c43ae18ddece10a6ea859254a9493c15b2879e363c0f9d732e8a6b0fa?placeholderIfAbsent=true"
              alt=""
              className={styles.linkIcon}
            />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ReformCard;
