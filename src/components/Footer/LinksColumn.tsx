import React from 'react';
import styles from './Footer.module.css';

interface LinkItem {
  text: string;
  href: string;
  iconSrc?: string;
}

interface LinksColumnProps {
  title: string;
  links: LinkItem[];
}

const LinksColumn: React.FC<LinksColumnProps> = ({ title, links }) => {
  return (
    <>
      <h3 className={styles.columnTitle}>{title}</h3>
      <div className={styles.linkList}>
        {links.map((link, index) => (
          <a key={index} href={link.href} className={link.iconSrc ? styles.linkWithIcon : styles.link}>
            {link.iconSrc && (
              <img
                loading="lazy"
                src={link.iconSrc}
                className={styles.icon}
                alt=""
              />
            )}
            <span className={styles.linkText}>{link.text}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default LinksColumn;