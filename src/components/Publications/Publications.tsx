"use client";
import { Publication } from "./types";
import PublicationCard from "./PublicationCard";
import styles from "./Publications.module.css";

const publicationsData: Publication[] = [
  {
    label: "Report",
    title: "Moldova report 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    label: "Report",
    title: "EU Support package for Moldova",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    label: "Report",
    title: "EU Support package for Moldova",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
  {
    label: "Report",
    title: "EU Support package for Moldova",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
];

const Publications = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Onest:wght@400;900&display=swap"
      />
      <section className={styles.section}>
        <header className={styles.header}>
          <h2 className={styles.subtitle}>Publications</h2>
          <h1 className={styles.title}>
            Key publications and reports on Moldova's EU integration
          </h1>
        </header>
        <div className={styles.cardsContainer}>
          {publicationsData.map((publication, index) => (
            <PublicationCard
              key={`publication-${index}`}
              publication={publication}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Publications;
