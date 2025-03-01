"use client";

import * as React from "react";
import styles from "./PlayButton.module.css";

export function PlayButton() {
  return (
    <button className={styles.playButton} aria-label="Play video">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.playIcon}
      >
        <rect width="80" height="80" rx="40" fill="white" fillOpacity="0.4" />
        <mask
          id="mask0_1749_422"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="16"
          y="16"
          width="48"
          height="48"
        >
          <rect
            x="64"
            y="64"
            width="48"
            height="48"
            transform="rotate(-180 64 64)"
            fill="#D9D9D9"
          />
        </mask>
        <g mask="url(#mask0_1749_422)">
          <path
            d="M31.9999 25.9995L53.9999 39.9995L31.9999 53.9995L31.9999 25.9995Z"
            fill="white"
          />
        </g>
      </svg>
    </button>
  );
}
