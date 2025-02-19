import React from "react";
import styles from "./Newsletter.module.css";

export const NewsletterContent = () => {
  return (
    <article className={styles.sectionTextContainer}>
      <div className={styles.contentWrapper}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionHeader2}>Newsletter</h2>
          <h3 className={styles.title}>
            Join Moldova on its journey to the European Union
          </h3>
        </header>
        <p className={styles.bodyText}>
          Stay updated on the latest events, conferences, and collaborative
          initiatives between Moldova and the European Union. These events
          highlight the ongoing partnership and dialogue between Moldova and EU
          institutions.
        </p>
        <div className={styles.buttonRow}>
          <button className={styles.button}>Subscribe for updates</button>
        </div>
      </div>
    </article>
  );
};
