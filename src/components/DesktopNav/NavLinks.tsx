import React from "react";
import styles from "./DesktopNav.module.css";

export const NavLinks = () => {
  const links = [
    "Overview",
    "Moldova in EU",
    "EU in Moldova",
    "Stories",
    "Toolbox",
  ];

  return (
    <ul className={styles.navLinksContainer}>
      {links.map((link) => (
        <li key={link}>
          <a
            href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
            className={styles.navLink}
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
};
