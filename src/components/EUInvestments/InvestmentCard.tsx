import React from "react";
import { IconComponent } from "./IconComponent";
import styles from "./EUInvestments.module.css";

interface InvestmentCardProps {
  label: string;
  icon: string;
  title: string;
  description: string;
}

export const InvestmentCard: React.FC<InvestmentCardProps> = ({
  label,
  icon,
  title,
  description,
}) => {
  const arrowIcon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px"> <mask style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"> <rect width="20" height="20" fill="#D9D9D9"></rect> </mask> <g mask="url(#mask0_1749_4994)"> <path d="M5.76604 15.4952L5 14.7292L13.6379 6.08333H5.91188V5H15.4952V14.5833H14.4119V6.85729L5.76604 15.4952Z" fill="black" fill-opacity="0.8"></path> </g> </svg>`;

  return (
    <article className={styles.card}>
      <p className={styles.label}>{label}</p>
      <div className={styles.cardContent}>
        <IconComponent svgContent={icon} />
        <div className={styles.cardText}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
        <button className={styles.readMore}>
          <span>Read more</span>
          <IconComponent svgContent={arrowIcon} />
        </button>
      </div>
    </article>
  );
};
