"use client";
import * as React from "react";
import styles from "./Header.module.css";
import { ArticleMetadata } from "./ArticleMetadata";
import { ChipList } from "./Chiplist";

function Header() {
  return (
    <header className={styles.header}>
      <article className={styles.titleColumn}>
        <div className={styles.titleWrapper}>
          <div className={styles.titleContainer}>
            <h1 className={styles.categoryTitle}>People</h1>
            <h2 className={styles.mainTitle}>
              Article Title<span className={styles.titlePunctuation}>:</span>{" "}
              Lorem ipsum <span className={styles.titlePunctuation}>&</span>{" "}
              Lorem ipsum dolor sit amet
            </h2>
          </div>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <div className={styles.metadataContainer}>
            <ArticleMetadata />
            <ChipList />
          </div>
        </div>
      </article>
    </header>
  );
}

export default Header;
