"use client";
import React from "react";
import styles from "./EUAccessionClusters.module.css";
import { IconCircle } from "./IconCircle";
import { ChapterProgress } from "./ChapterProgress";

interface Chapter {
  number: string;
  title: string;
  progress: number;
  total: number;
  progressClass: string;
}

interface ClusterCardProps {
  color: "blue" | "yellow" | "purple" | "green" | "pink";
  title: string;
  description?: string;
  chapters: Chapter[];
  className: string;
}

export const ClusterCard: React.FC<ClusterCardProps> = ({
  color,
  title,
  description,
  chapters,
  className,
}) => {
  return (
    <section className={className}>
      <header className={styles.clusterHeader}>
        <IconCircle color={color} />
        <h2 className={styles.clusterTitle}>{title}</h2>
      </header>
      {description && (
        <p className={styles.clusterDescription}>{description}</p>
      )}
      <div>
        {chapters.map((chapter, index) => (
          <article key={index} className={styles.chapter}>
            <div className={styles.chapterIcon}>
              <IconCircle color={color} />
            </div>
            <div className={styles.chapterContent}>
              <p className={styles.chapterLabel}>Chapter {chapter.number}</p>
              <h3 className={styles.chapterTitle}>{chapter.title}</h3>
              <ChapterProgress
                current={chapter.progress}
                total={chapter.total}
                color={color}
                progressClass={chapter.progressClass}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
