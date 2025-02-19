import React from 'react';
import styles from './StoriesSection.module.css';
import ArticleCard from './ArticleCard';

interface StoriesSectionProps {
  title: string;
  subtitle: string;
  description: string;
  articles: Array<{
    image: string;
    header: string;
    description: string;
    content: string;
    linkText: string;
    linkIcon: string;
  }>;
}

const StoriesSection: React.FC<StoriesSectionProps> = ({ title, subtitle, description, articles }) => {
  return (
    <section className={styles.storiesSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.textContainer}>
          <div className={styles.headerWrapper}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <h3 className={styles.sectionSubtitle}>{subtitle}</h3>
          </div>
          <p className={styles.sectionDescription}>{description}</p>
          <button className={styles.learnMoreButton}>Learn more</button>
        </div>
        <div className={styles.articleList}>
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;