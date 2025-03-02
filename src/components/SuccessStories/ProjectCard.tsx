import React from "react";
import styles from "./SuccessStories.module.css";
import { ImpactBox } from "./ImpactBox";

interface ProjectCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  impact: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  number,
  icon,
  title,
  description,
  impact,
}) => {
  return (
    <article className={styles.projectCard}>
      <p className={styles.projectNumber}>{number}</p>
      <div className={styles.projectContent}>
        <div>{icon}</div>
        <div className={styles.projectDetails}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <p className={styles.projectDescription}>{description}</p>
        </div>
        <ImpactBox impact={impact} />
      </div>
    </article>
  );
};
