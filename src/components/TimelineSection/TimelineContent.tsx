import { TimelineContentProps } from "./types";
import styles from "./TimelineSection.module.css";

export function TimelineContent({ item }: TimelineContentProps) {
  return (
    <article className={styles.contentCard}>
      <div className={styles.contentLeft}>
        <h3 className={styles.dateLabel}>{item.date}</h3>
        <p className={styles.milestoneText}>{item.content}</p>
      </div>
      <div className={styles.contentRight}>
        <figure className={styles.imageContainer}>
          <img
            src={item.image.src}
            alt={item.image.alt}
            className={styles.mainImage}
          />
          <figcaption className={styles.imageCaption}>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_caption"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="21"
                height="21"
              >
                <rect
                  x="0.658"
                  y="0.303"
                  width="20"
                  height="20"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_caption)">
                <path
                  d="M10.1169 16.8864V11.6187L6.38603 15.3414L5.6202 14.5756L9.3429 10.8447H4.0752V9.76139H9.3429L5.6202 6.03056L6.38603 5.27264L10.1169 8.99535V3.71973H11.2002V8.99535L14.931 5.27264L15.6889 6.03056L11.9662 9.76139H17.2419V10.8447H11.9662L15.6889 14.5756L14.931 15.3414L11.2002 11.6187V16.8864H10.1169Z"
                  fill="black"
                  fillOpacity="0.4"
                />
              </g>
            </svg>
            <span>{item.image.caption}</span>
          </figcaption>
        </figure>
      </div>
    </article>
  );
}
