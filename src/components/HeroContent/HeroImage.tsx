import React from "react";
import styles from "./HeroContent.module.css";

export const HeroImage: React.FC = () => {
  return (
    <figure className={styles.imageContainer}>
      <div className={styles.imageWrapper}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/0d941de440b1e3661a02a57af54b6c6579746fdeaac9812fd2a574a13a8b173a?placeholderIfAbsent=true"
          className={styles.backgroundImage}
          alt="Background"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/e38e221b77452dcaaa0fdcd4c1670b6610a34cf9e5ff7b6e052458f51a0ef3c6?placeholderIfAbsent=true"
          className={styles.foregroundImage}
          alt="Foreground"
        />
      </div>
      <figcaption className={styles.imageCaption}>
        <span className={styles.captionIcon} />
        <span className={styles.captionText}>Image caption</span>
      </figcaption>
    </figure>
  );
};
