import React from "react";
import styles from "./StoriesSection.module.css";
import { StoryCard } from "./StoryCard";

export function StoryList() {
  return (
    <div className={styles.storyList}>
      <StoryCard
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/5d35237fa1e0a2993ed089d38e5a2784843c6c3e"
        imageAlt="Yellow field"
      />
      <StoryCard
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/5d35237fa1e0a2993ed089d38e5a2784843c6c3e"
        imageAlt="Yellow field"
      />
      <StoryCard
        imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/5d35237fa1e0a2993ed089d38e5a2784843c6c3e"
        imageAlt="Yellow field"
      />
      <button className={styles.viewAll}>View all</button>
    </div>
  );
}
