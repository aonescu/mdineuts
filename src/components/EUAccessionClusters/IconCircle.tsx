"use client";
import React from "react";
import styles from "./EUAccessionClusters.module.css";

interface IconCircleProps {
  color: "blue" | "yellow" | "purple" | "green" | "pink";
}

export const IconCircle: React.FC<IconCircleProps> = ({ color }) => {
  const getColorClass = () => {
    switch (color) {
      case "blue":
        return styles.iconCircleblue;
      case "yellow":
        return styles.iconCircleyellow;
      case "purple":
        return styles.iconCirclepurple;
      case "green":
        return styles.iconCirclegreen;
      case "pink":
        return styles.iconCirclepink;
    }
  };

  return (
    <div className={getColorClass()}>
      <div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="21"
            height="20"
          >
            <rect x="0.688" width="20" height="20" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0)">
            <path
              d="M4.73608 16.7917V15.7084H13.3194V16.7917H4.73608ZM9.11421 12.4728L5.15275 8.53214L6.63504 7.04984L10.5757 11.0113L9.11421 12.4728ZM13.6992 7.88776L9.75858 3.94714L11.22 2.46484L15.1815 6.4263L13.6992 7.88776ZM17.6255 15.7115L7.789 5.87505L8.56296 5.10109L18.3994 14.9376L17.6255 15.7115Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
