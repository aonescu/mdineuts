import React from 'react';
import styles from './Footer.module.css';

const socialLinks = [
  { name: 'Linkedin', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/5cc22a76626a6ce5d749f59f0477bb5882df4167ae4e5831008ba496c88a5ce7?apiKey=7f57907064e542fb9bcf627f2673f5c1&', href: '#' },
  { name: 'Instagram', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/d44e1af56cc04279fc7c02e2bf5ed1f60bd461e2e17dd10cb8984e6b96985a96?apiKey=7f57907064e542fb9bcf627f2673f5c1&', href: '#' },
  { name: 'YouTube', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/7acd5a7d40bbd3dad69c526432771a543df42382f7ef35bece271aca8760886a?apiKey=7f57907064e542fb9bcf627f2673f5c1&', href: '#' },
  { name: 'Facebook', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/db748b6476e56bcc83a54fa21e8b98324022d064eaeb3528ea8d9166c36da9e5?apiKey=7f57907064e542fb9bcf627f2673f5c1&', href: '#' },
  { name: 'TikTok', iconSrc: 'https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/4d2985ff155eff79cd3c2ad731ca04f753ade3ba0c84307a404f8fe9f05dcf8c?apiKey=7f57907064e542fb9bcf627f2673f5c1&', href: '#' },
];

const SocialLinksColumn: React.FC = () => {
  return (
    <div className={styles.column}>
      <h3 className={styles.columnTitle}>Discover us</h3>
      <div className={styles.linkList}>
        {socialLinks.map((link, index) => (
          <a key={index} href={link.href} className={styles.linkWithIcon}>
            <img
              loading="lazy"
              src={link.iconSrc}
              className={styles.icon}
              alt=""
            />
            <span className={styles.linkText}>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinksColumn;