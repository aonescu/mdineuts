"use client";
import * as React from "react";
import styles from "./TitleColumn.module.css";

function TitleColumn() {
  return (
    <section className={styles.titleSection}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/40c5b649abd95e99f0bae68cf498a38114ee7e7342b9e2412ebcfdf0499bd214?placeholderIfAbsent=true"
        className={styles.backgroundImage}
        alt=""
      />
      <div className={styles.contentContainer}>
        <div className={styles.textWrapper}>
          <header className={styles.headerContent} />
        </div>
      </div>
    </section>
  );
}

export default TitleColumn;
