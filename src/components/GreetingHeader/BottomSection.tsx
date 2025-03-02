"use client";
import React from "react";
import styles from "./GreetingHeader.module.css";

export const BottomSection: React.FC = () => {
  return (
    <section className={styles.bottomRow}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f99aa74f9062c4ac415078c85cf21f83b454277"
        alt=""
        className={styles.statueImage}
      />
      <span className={styles.forText}>for</span>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0fa1ff81743f87764aaef7f7fda8201a2504b5d"
        alt=""
        className={styles.wheatImage}
      />
      <span className={styles.europeText}>Europe</span>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4e3366b2ec673d5253d2212f72c13853aaf036a"
        alt=""
        className={styles.flagImage}
      />
    </section>
  );
};
