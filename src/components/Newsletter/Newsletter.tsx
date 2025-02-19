"use client";
import React from "react";
import styles from "./Newsletter.module.css";
import { NewsletterContent } from "./NewsletterContent";
import { NewsletterImage } from "./NewsletterImage";

export const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <NewsletterContent />
      <NewsletterImage />
    </section>
  );
};

export default Newsletter;
