import React from "react";
import styles from "./LinkWithIcon.module.css";

interface LinkWithIconProps {
  href: string;
  label: string;
  iconSrc: string;
}

export const LinkWithIcon: React.FC<LinkWithIconProps> = ({
  href,
  label,
  iconSrc,
}) => {
  return (
    <a href={href} className={styles.link}>
      <span className={styles.label}>{label}</span>
      <img src={iconSrc} alt="" className={styles.icon} />
    </a>
  );
};
