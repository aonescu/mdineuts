import React from "react";
import styles from "./EUIntegrationProgress.module.css";
import { NavigationProps } from "./types";

export const StageNavigation: React.FC<NavigationProps> = ({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
}) => {
  return (
    <nav className={styles.navigation}>
      <button
        onClick={onPrevious}
        disabled={!canGoPrevious}
        aria-label="Previous stage"
      >
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0571 17.0634L8.40332 11.4096L14.0571 5.75586L14.9858 6.68461L10.2608 11.4096L14.9858 16.1346L14.0571 17.0634Z"
            fill="black"
            fillOpacity={canGoPrevious ? "0.8" : "0.2"}
          />
        </svg>
      </button>
      <button onClick={onNext} disabled={!canGoNext} aria-label="Next stage">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9765 5.75598L15.688 11.4097L10.9765 17.0635L10.2026 16.1347L14.1401 11.4097L10.2026 6.68472L10.9765 5.75598Z"
            fill="black"
            fillOpacity={canGoNext ? "0.8" : "0.2"}
          />
        </svg>
      </button>
    </nav>
  );
};
