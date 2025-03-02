import { NavigationControlsProps } from "./types";
import styles from "./TimelineSection.module.css";

export function NavigationControls({
  onPrevClick,
  onNextClick,
  canGoPrev,
  canGoNext,
}: NavigationControlsProps) {
  return (
    <div className={styles.navigationControls}>
      <button
        className={styles.navButton}
        onClick={onPrevClick}
        disabled={!canGoPrev}
        aria-label="Previous timeline item"
      >
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_prev"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="25"
            height="24"
          >
            <rect x="0.688" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_prev)">
            <path
              d="M14.0571 17.0634L8.40332 11.4096L14.0571 5.75586L14.9858 6.68461L10.2608 11.4096L14.9858 16.1346L14.0571 17.0634Z"
              fill="black"
              fillOpacity={canGoPrev ? "0.8" : "0.2"}
            />
          </g>
        </svg>
      </button>
      <button
        className={styles.navButton}
        onClick={onNextClick}
        disabled={!canGoNext}
        aria-label="Next timeline item"
      >
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_next"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="25"
            height="24"
          >
            <rect x="0.688" width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_next)">
            <path
              d="M10.9765 5.75598L15.688 11.4097L10.9765 17.0635L10.2026 16.1347L14.1401 11.4097L10.2026 6.68472L10.9765 5.75598Z"
              fill="black"
              fillOpacity={canGoNext ? "0.8" : "0.2"}
            />
          </g>
        </svg>
      </button>
    </div>
  );
}
