"use client";
import * as React from "react";
import styles from "./DesktopNav.module.css";
import { NavLinks } from "./NavLinks";
import { LanguageSelector } from "./LanguageSelector";
import logo from '../../assets/logo.svg';


function DesktopNav() {
  return (
    <nav className={styles.desktopNav}>
      <img
        src={logo}
        alt="Moldova in EU Logo"
        className={styles.moldovaInEu}
      />
      <div className={styles.navigationContainer}>
        <NavLinks />
        <LanguageSelector />
      </div>
    </nav>
  );
}

export default DesktopNav;
