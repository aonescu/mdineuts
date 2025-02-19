"use client";
import React from "react";
import styles from "./Section.module.css";
import StatCard from "./StatCard";
import TextContent from "./TextContent";

const Section: React.FC = () => {
  return (
    <section className={styles.section}>
      <TextContent />
      <div className={styles.grid}>
        <StatCard label="Population" value="2.9 million" />
        <StatCard label="GDP total (2024)" value="$18.145 billion" />
        <StatCard label="Area" value="33,700 km²" isFullWidth />
      </div>
    </section>
  );
};

export default Section;
