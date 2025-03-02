"use client";
import React from "react";
import styles from "./GreetingHeader.module.css";

export const HeaderSection: React.FC = () => {
  return (
    <header className={styles.header}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fad354a6be582510ece668cb5eb29cc06c754cbe"
        alt=""
        className={styles.smallImage}
      />
      <h1 className={styles.title}>Moldova</h1>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bb46c1b0ff8e5a5648be13df3615eb281614dc3"
        alt=""
        className={styles.largeImage}
      />
      <span className={styles.colon}>:</span>
    </header>
  );
};
