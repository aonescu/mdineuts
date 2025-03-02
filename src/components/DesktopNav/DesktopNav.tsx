"use client";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "./DesktopNav.module.css";
import { NavLinks } from "./NavLinks";
import { LanguageSelector } from "./LanguageSelector";
import logo from "../../assets/logo.svg";

function DesktopNav() {
  const [navBackgroundColor, setNavBackgroundColor] = useState<string>("");
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const updateNavColor = () => {
    if (sectionRef.current) {
      const computedStyle = window.getComputedStyle(sectionRef.current);
      setNavBackgroundColor(computedStyle.backgroundColor);
    }
  };

  useEffect(() => {
    updateNavColor();
    window.addEventListener("scroll", updateNavColor);
    return () => {
      window.removeEventListener("scroll", updateNavColor);
    };
  }, []);

  return (
    <>
      <nav
        className={styles.desktopNav}
        style={{ backgroundColor: navBackgroundColor }}
      >
        <Link to="/"> {/* Wrap the logo with Link */}
          <img
            src={logo}
            alt="Moldova in EU Logo"
            className={styles.moldovaInEu}
          />
        </Link>
        <div className={styles.navigationContainer}>
          <NavLinks />
          <LanguageSelector />
        </div>
      </nav>

      <div ref={sectionRef} className={styles.heroContent}></div>
    </>
  );
}

export default DesktopNav;