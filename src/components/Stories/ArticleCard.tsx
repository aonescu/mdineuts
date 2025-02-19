import React from 'react';
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
  image: string;
  header: string;
  description: string;
  content: string;
  linkText: string;
  linkIcon: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ image, header, description, content, linkText, linkIcon }) => {
  return (
    <article className={styles.articleCard}>
      <div className={styles.cardContent}>
        <img src={image} alt="" className={styles.articleImage} />
        <div className={styles.textContent}>
          <div className={styles.headerWrapper}>
            <h4 className={styles.articleHeader}>{header}</h4>
            <p className={styles.articleDescription}>{description}</p>
          </div>
          <p className={styles.articleContent}>{content}</p>
          <a href="#" className={styles.articleLink}>
            <span>{linkText}</span>
            <img src={linkIcon} alt="" className={styles.linkIcon} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;