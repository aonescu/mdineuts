"use client";
import * as React from "react";
import styles from "./HeroContent.module.css";
import { HeroHeader } from "./HeroHeader";
import { HeroImage } from "./HeroImage";

function HeroContent() {
  return (
    <section className={styles.heroContent}>
      <HeroHeader />
      <HeroImage />
    </section>
  );
}

export default HeroContent;
