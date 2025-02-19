import React from 'react';
import styles from './Footer.module.css';

const ContactColumn: React.FC = () => {
  return (
    <div className={styles.column}>
      <h3 className={styles.columnTitle}>Contact</h3>
      <div className={styles.linkList}>
        <div className={styles.link}>John Doe</div>
        <a href="mailto:john.doe@moldova-in.eu" className={styles.linkWithIcon}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/a69e942da70f102abbe076608000d83cd158cd4c34de0a694fdcded3f2f2d654?apiKey=7f57907064e542fb9bcf627f2673f5c1&"
            className={styles.icon}
            alt=""
          />
          <span className={styles.linkText}>john.doe@moldova-in.eu</span>
        </a>
        <a href="tel:+373XXXXXXXX" className={styles.linkWithIcon}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/7a1c22a1997af5ec72bb24a607e59aee85c7e24f66fa6a5bd69431d4c0463dcc?apiKey=7f57907064e542fb9bcf627f2673f5c1&"
            className={styles.icon}
            alt=""
          />
          <span className={styles.linkText}>+373 XXXX XXXX</span>
        </a>
        <div className={styles.linkWithIcon}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/60dd3c0df7305d94f634e25139abf11720f07714b608d62fc9caa78e556e2652?apiKey=7f57907064e542fb9bcf627f2673f5c1&"
            className={styles.icon}
            alt=""
          />
          <span className={styles.linkText}>Lorem ipsum Street 54, Chișinău</span>
        </div>
      </div>
    </div>
  );
};

export default ContactColumn;