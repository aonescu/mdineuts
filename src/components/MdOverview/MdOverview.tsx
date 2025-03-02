"use client";
import * as React from "react";
import styles from "./MdOverview.module.css";
import { HistoryContent } from "./HistoryContent";
import { StatisticsGrid } from "./StatisticsGrid";

export function MdOverview() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Onest:wght@400;700;900&display=swap"
        rel="stylesheet"
      />
      <article className={styles.container}>
        <HistoryContent />
        <StatisticsGrid />
      </article>
    </>
  );
}
