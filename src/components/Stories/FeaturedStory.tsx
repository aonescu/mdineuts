import React from "react";
import styles from "./StoriesSection.module.css";

export function FeaturedStory() {
  return (
    <article className={styles.featuredStory}>
      <div className={styles.imageContainer}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/78709fc3abc12eba997d81c79cb8433d4518e9d4"
          alt="Ballet dancers at barre"
          className={styles.featuredImage}
        />
      </div>
      <div className={styles.storyContent}>
        <p className={styles.label}>Header</p>
        <h3 className={styles.title}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </h3>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <a href="#" className={styles.linkContainer}>
          <span>Link</span>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_1749_1351" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"><rect width="20" height="20" fill="#D9D9D9"/></mask><g mask="url(#mask0_1749_1351)"><path d="M9.70719 17.0314V10.9897H3.66553V9.90641H9.70719V3.86475H10.7905V9.90641H16.8322V10.9897H10.7905V17.0314H9.70719Z" fill="black" fill-opacity="0.8"/></g></svg>',
            }}
          />
        </a>
      </div>
    </article>
  );
}
