"use client";
import * as React from "react";
import styles from "./Newsletter.module.css";
import { NewsletterContent } from "./NewsletterContent";
import { NewsletterForm } from "./NewsletterForm";
import { NewsletterImage } from "./NewsletterImage";

export default function Newsletter() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Onest:wght@400;900&family=Inter:wght@400&display=swap"
      />
      <section className={styles.newsletterContainer}>
        <div className={styles.newsletterContent}>
          <NewsletterContent />
          <NewsletterForm />
        </div>
        <NewsletterImage />
      </section>
    </>
  );
}
