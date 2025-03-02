import React from "react";
import styles from "./ArticleHeader.module.css";

interface ArticleHeaderProps {
  title: string;
  introduction: string;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  title,
  introduction,
}) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.introduction}>{introduction}</p>
    </header>
  );
};
