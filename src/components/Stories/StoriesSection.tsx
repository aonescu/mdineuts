"use client";
import * as React from "react";
import styles from "./StoriesSection.module.css";
import { StoriesHeader } from "./StoriesHeader";
import { FeaturedStory } from "./FeaturedStory";
import { StoryList } from "./StoryList";

export function StoriesSection() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Onest:wght@400;700;900&display=swap"
        rel="stylesheet"
      />
      <section className={styles.storiesContainer}>
        <StoriesHeader />
        <div className={styles.contentSection}>
          <FeaturedStory />
          <StoryList />
        </div>
      </section>
    </>
  );
}
