import React from "react";
import styles from "./Newsletter.module.css";

export const NewsletterImage = () => {
  return (
    <div className={styles.imageContainer}>
      <figure className={styles.image}>
        <div className={styles.imageWrapper}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/8038b64b01afae049c2982002e8e72a6e4d213998591d72f466f754fff79f0a1?placeholderIfAbsent=true"
            className={styles.backgroundImage}
            alt=""
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/b24a7eec702a67c257e4caa830dfd2353677d0e1a1a34cf72ec8faaf89ec0bac?placeholderIfAbsent=true"
            className={styles.foregroundImage}
            alt="Newsletter illustration"
          />
        </div>
        <figcaption className={styles.imageCaption}>
          <span className={styles.materialSymbolsIcons} />
          <span className={styles.label}>Image caption</span>
        </figcaption>
      </figure>
    </div>
  );
};
