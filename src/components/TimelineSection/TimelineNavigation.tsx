import { TimelineNavigationProps } from "./types";
import styles from "./TimelineSection.module.css";

export function TimelineNavigation({
  items,
  activeIndex,
  onSelect,
}: TimelineNavigationProps) {
  return (
    <nav className={styles.navigation}>
      {items.map((item, index) => (
        <button
          key={item.date}
          className={
            index === activeIndex
              ? styles.timelineItemActive
              : styles.timelineItem
          }
          onClick={() => onSelect(index)}
          aria-current={index === activeIndex ? "true" : undefined}
        >
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id={`mask-${index}`}
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="21"
              height="20"
            >
              <rect x="0.688" width="20" height="20" fill="#D9D9D9" />
            </mask>
            <g mask={`url(#mask-${index})`}>
              <path
                d="M10.6952 17.5832C9.65196 17.5832 8.66946 17.3858 7.74765 16.9911C6.82585 16.5964 6.01904 16.0532 5.32724 15.3617C4.63543 14.6702 4.09203 13.864 3.69703 12.9432C3.30217 12.0225 3.10474 11.0387 3.10474 9.99171C3.10474 8.94477 3.3021 7.96386 3.69682 7.049C4.09154 6.13414 4.63467 5.33081 5.32619 4.639C6.01772 3.9472 6.8239 3.4038 7.74474 3.0088C8.66543 2.61393 9.64925 2.4165 10.6962 2.4165C11.7431 2.4165 12.724 2.61386 13.6389 3.00859C14.5538 3.40331 15.3571 3.94643 16.0489 4.63796C16.7407 5.32949 17.2841 6.134 17.6791 7.0515C18.074 7.96914 18.2714 8.94956 18.2714 9.99275C18.2714 11.0359 18.074 12.0184 17.6793 12.9403C17.2846 13.8621 16.7415 14.6689 16.0499 15.3607C15.3584 16.0525 14.5539 16.5959 13.6364 16.9909C12.7188 17.3857 11.7383 17.5832 10.6952 17.5832Z"
                fill="black"
                fillOpacity={index === activeIndex ? "0.8" : "0.2"}
              />
            </g>
          </svg>
          <span
            className={
              index === activeIndex
                ? styles.timelineDateActive
                : styles.timelineDate
            }
          >
            {item.date}
          </span>
        </button>
      ))}
    </nav>
  );
}
