"use client";
import React from "react";
import styles from "./KeyFactsSection.module.css";
import { KeyFactCard } from "./KeyFactCard";
import { ImageGallery } from "./ImageGallery";

export const KeyFactsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.mainTitle}>Key facts</h1>
          <h2 className={styles.subtitle}>
            Nestled in Europe, between Romania and Ukraine, Moldova is a land of
            resilience, ambition, and transformation.
          </h2>
        </header>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>

      <ImageGallery />

      <div className={styles.factsGrid}>
        <KeyFactCard
          title="Get there"
          value="4h 25min"
          description="From XXX —> to Chișinău"
        />
        <KeyFactCard
          title="Population"
          value="2.487 million"
          description="Lorem ipsum"
        />
        <KeyFactCard
          title="Currency"
          value="Moldovan Leu"
          description="Lorem ipsum"
        />
        <KeyFactCard
          title="Capital"
          value="Chișinău"
          description="Lorem ipsum"
          link="https://www.google.com/search?sca_esv=98651d259623c413&rlz=1C5CHFA_enEE1074EE1074&q=Chi%C8%99in%C4%83u&si=APYL9bu1Sl4M4TWndGcDs6ZL5WJXWNYEL_kgEEwAe0iMZIocdRvTbbb2EV2MbCYWYuo3GGelKOC6UXlA9bveCWcxs15mT3CqQBhs-FB6fJ9IlOg5L1unYLhv7vM75NfDo6S8Y6Kbrzcx9wqvGZAi2tFPhGHmMSDi9sxj95H4qATpr_sehJGVhAhlbiAJNr12axYdJKDbTx2w&sa=X&ved=2ahUKEwiK2Jawx6eLAxVSHBAIHWzIK98QmxMoAHoECAsQAg"
        />
        <KeyFactCard
          title="Official language"
          value="Romanian"
          description="also Bulgarian, Gagauz, Russian, Ukrainian."
        />
        <KeyFactCard
          title="Area"
          value="33,843* km2"
          description="Incl. Transnistria"
        />
        <KeyFactCard
          title="Time zone"
          value="(GMT+2)"
          description="Lorem ipsum"
        />
        <KeyFactCard
          title="GDP total"
          value="$45.407 billion"
          description="Lorem ipsum"
        />
        <KeyFactCard
          title="President"
          value="Maia Sandu"
          description="Lorem ipsum"
        />
      </div>
    </section>
  );
};

export default KeyFactsSection;
