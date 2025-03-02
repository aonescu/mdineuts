"use client";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import styles from "./DesktopNav.module.css";
import { NavLinks } from "./NavLinks";
import { LanguageSelector } from "./LanguageSelector";
import logo from "../../assets/logo.svg";

function DesktopNav() {
  const [navBackgroundColor, setNavBackgroundColor] = useState<string>("");
  const sectionRef = useRef<HTMLDivElement | null>(null); // To reference the section below the nav

  // Function to update the navigation background color
  const updateNavColor = () => {
    if (sectionRef.current) {
      const computedStyle = window.getComputedStyle(sectionRef.current);
      const backgroundColor = computedStyle.backgroundColor;
      setNavBackgroundColor(backgroundColor); // Set the background color dynamically
    }
  };

  useEffect(() => {
    // Call once on initial load
    updateNavColor();

    // Optionally update on scroll if the background color changes while scrolling
    window.addEventListener("scroll", updateNavColor);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", updateNavColor);
    };
  }, []);

  return (
    <>
      {/* Desktop navigation bar with dynamic background color */}
      <nav
        className={styles.desktopNav}
        style={{ backgroundColor: navBackgroundColor }} // Apply dynamic color
      >
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

      {/* The section that sits below the DesktopNav */}
      <div ref={sectionRef} className={styles.heroContent}>
        {/* Other content */}
      </div>
    </>
  );
}

export default DesktopNav;