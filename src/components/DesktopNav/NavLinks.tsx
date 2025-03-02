import React from "react";
import { Link } from "react-router-dom"; // Use Link from react-router-dom
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
          <Link
            to={`/${link.toLowerCase().replace(/\s+/g, "-")}`} // Use Link and remove the # symbol
            className={styles.navLink}
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
};