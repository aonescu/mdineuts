"use client";
import React from "react";
import styles from "./GreetingHeader.module.css";

const PlaneIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_1749_3638"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="20"
      height="20"
    >
      <rect width="20" height="20" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1749_3638)">
      <path
        d="M6.29648 17.5832V15.9838L8.73231 14.2738V11.1153L2.41669 13.6553V11.588L8.73231 7.22025V3.68421C8.73231 3.33574 8.85697 3.03734 9.10627 2.789C9.35544 2.54067 9.65481 2.4165 10.0044 2.4165C10.354 2.4165 10.6519 2.54067 10.8981 2.789C11.1445 3.03734 11.2677 3.33574 11.2677 3.68421V7.22025L17.5834 11.588V13.6553L11.2677 11.1153V14.2738L13.6954 15.9838V17.5832L10 16.4632L6.29648 17.5832Z"
        fill="black"
        fillOpacity="0.8"
      />
    </g>
  </svg>
);

export const MiddleSection: React.FC = () => {
  return (
    <section className={styles.middleRow}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb2a054f10cc266accaa8aecfd78c57acf4aa0a4"
        alt=""
        className={styles.grassImage}
      />
      <h2 className={styles.readyText}>Ready</h2>
      <article className={styles.yellowBox}>
        <p className={styles.getThere}>Get there</p>
        <div className={styles.flightInfo}>
          <div className={styles.timeContainer}>
            <PlaneIcon />
            <span className={styles.time}>3h</span>
          </div>
          <div className={styles.route}>
            <span>From Brussels</span>
            <span>to Chișinău</span>
          </div>
        </div>
      </article>
    </section>
  );
};
