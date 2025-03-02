import React from "react";
import styles from "./Header.module.css";

export const ArticleMetadata: React.FC = () => {
  return (
    <div className={styles.metadataWrapper}>
      <div className={styles.authorInfo}>
        <h3 className={styles.authorName}>First-Name Lastname</h3>
        <p className={styles.authorRole}>XYZ, founder</p>
      </div>
      <div className={styles.articleInfo}>
        <time className={styles.publishDate}>December 2024</time>
        <p className={styles.readTime}>3 min read</p>
      </div>
    </div>
  );
};
