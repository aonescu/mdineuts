import React from "react";
import styles from "./MdOverview.module.css";

export function HistoryContent() {
  return (
    <section className={styles.contentWrapper}>
      <div className={styles.textSection}>
        <h1 className={styles.heading}>A rich history rooted in resilience</h1>
        <p className={styles.description}>
          Moldova's story began in 1359, when it emerged as a principality
          facilitating trade between the Black Sea ports and Central European
          cities. Over centuries, the country endured the expansion of Ottoman
          and Russian empires, but its people preserved their Romanian language
          and culture, resisting historical hardships, deportations, and forced
          demographic shifts.
        </p>
        <p className={styles.description}>
          In 1991, Moldova reclaimed its independence, opening a new chapter in
          its national identity. Despite early challenges, Moldova has
          transformed its economy, achieving a sixfold GDP growth since Soviet
          times and securing its place as a rising European economy.
        </p>
        <p className={styles.description}>
          In 2022, Moldova's European path became official with
          <strong className={styles.bold}>EU candidate status</strong>
          —a milestone driven by resilience and a clear vision for the future.
          Committed to progress, the nation is accelerating reforms,
          strengthening institutions, and turning its aspiration into a European
          future.
        </p>
      </div>
      <div className={styles.imageSection}>
        <figure className={styles.imageContainer}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3da427660fd0c68874e417da0ff557db8974ac2e"
            alt="Landscape"
            className={styles.mainImage}
          />
          <figcaption className={styles.captionContainer}>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  '<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_1787_6615" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="21"><rect x="0.827637" y="0.303223" width="20" height="20" fill="#D9D9D9"></rect></mask><g mask="url(#mask0_1787_6615)"><path d="M10.2859 16.8864V11.6187L6.5551 15.3414L5.78926 14.5756L9.51197 10.8447H4.24426V9.76139H9.51197L5.78926 6.03056L6.5551 5.27264L10.2859 8.99535V3.71973H11.3693V8.99535L15.1001 5.27264L15.858 6.03056L12.1353 9.76139H17.4109V10.8447H12.1353L15.858 14.5756L15.1001 15.3414L11.3693 11.6187V16.8864H10.2859Z" fill="black" fill-opacity="0.4"></path></g></svg>',
              }}
            />
            <span className={styles.captionText}>Image caption</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
