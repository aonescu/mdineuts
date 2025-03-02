import React from "react";
import styles from "./QuoteBlock.module.css";

interface QuoteBlockProps {
  quote: string;
  source: string;
}

export const QuoteBlock: React.FC<QuoteBlockProps> = ({ quote, source }) => {
  return (
    <blockquote className={styles.quoteContainer}>
      <p className={styles.quote}>{quote}</p>
      <cite className={styles.source}>{source}</cite>
    </blockquote>
  );
};
