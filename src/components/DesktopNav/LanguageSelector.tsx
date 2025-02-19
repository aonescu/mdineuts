"use client";
import React, { useState } from "react";
import styles from "./DesktopNav.module.css";

export const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className={styles.languageSelector}
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
    >
      <span className={styles.languageIcon} aria-hidden="true" />
      <span className={styles.languageLabel}>English</span>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/29dffb579cdb3c182d5a9e3faeb6a353bb3d64ba15c1b151733e605a35df33f7"
        alt="Language selector icon"
        className={styles.languageArrow}
        loading="lazy"
      />
    </button>
  );
};
