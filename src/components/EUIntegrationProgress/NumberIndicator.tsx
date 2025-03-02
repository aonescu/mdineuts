import React from "react";
import styles from "./EUIntegrationProgress.module.css";
import { NumberIndicatorProps } from "./types";

export const NumberIndicator: React.FC<NumberIndicatorProps> = ({
  number,
  isActive,
}) => {
  return (
    <span className={isActive ? styles.numberactive : styles.number}>
      {number}
    </span>
  );
};
