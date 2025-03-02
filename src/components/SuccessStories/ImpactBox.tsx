import React from "react";
import styles from "./SuccessStories.module.css";

interface ImpactBoxProps {
  impact: string;
}

export const ImpactBox: React.FC<ImpactBoxProps> = ({ impact }) => {
  return (
    <div className={styles.impactBox}>
      <p className={styles.impactLabel}>Impact</p>
      <div className={styles.impactContent}>
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_1749_5916"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="20"
            >
              <rect width="20" height="20" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_1749_5916)">
              <path
                d="M8.10427 14.149L4.36719 10.4327L5.13302 9.64583L8.10427 12.6171L14.8672 5.875L15.633 6.64104L8.10427 14.149Z"
                fill="black"
                fillOpacity="0.8"
              />
            </g>
          </svg>
        </div>
        <p className={styles.impactText}>{impact}</p>
      </div>
    </div>
  );
};
