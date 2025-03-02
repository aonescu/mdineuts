"use client";
import React from "react";
import styles from "./ImageCaption.module.css";

interface ImageCaptionProps {
  caption: string;
}

export const ImageCaption: React.FC<ImageCaptionProps> = ({ caption }) => {
  return (
    <figcaption className={styles.imageCaption}>
      <span className={styles.icon} aria-hidden="true" />
      <span className={styles.label}>{caption}</span>
    </figcaption>
  );
};
