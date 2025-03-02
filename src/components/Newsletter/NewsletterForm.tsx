"use client";
import React, { useState } from "react";
import styles from "./Newsletter.module.css";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Subscribing email:", email);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className={styles.inputWrapper}>
        <input
          type="email"
          placeholder="Your e-mail address"
          className={styles.emailInput}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address"
          required
        />
      </div>
      <button type="submit" className={styles.subscribeButton}>
        Subscribe for updates
      </button>
    </form>
  );
}
