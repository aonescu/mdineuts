import React from "react";
import styles from "./StoriesSection.module.css";

interface StoryCardProps {
  imageUrl: string;
  imageAlt: string;
}

export function StoryCard({ imageUrl, imageAlt }: StoryCardProps) {
  return (
    <article className={styles.storyCard}>
      <img src={imageUrl} alt={imageAlt} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <p className={styles.label}>Header</p>
        <h3 className={styles.cardTitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </h3>
        <p className={styles.cardDescription}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>
    </article>
  );
}
