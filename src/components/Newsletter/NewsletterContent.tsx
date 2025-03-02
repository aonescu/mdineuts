import React from "react";
import styles from "./Newsletter.module.css";

export function NewsletterContent() {
  return (
    <div className={styles.newsletterText}>
      <h2 className={styles.label}>Newsletter</h2>
      <h1 className={styles.title}>
        Join Moldova on its journey to the European Union
      </h1>
      <p className={styles.description}>
        Stay updated on the latest events, conferences, and collaborative
        initiatives between Moldova and the European Union. These events
        highlight the ongoing partnership and dialogue between Moldova and EU
        institutions.
      </p>
    </div>
  );
}
