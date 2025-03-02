import React from "react";
import styles from "./ImageGallery.module.css";
import { ImageCaption } from "./ImageCaption";

interface ImageGalleryProps {
  images: Array<{
    src?: string;
    caption: string;
  }>;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <figure key={index} className={styles.imageContainer}>
          <div className={styles.image}>
            <div className={styles.placeholder} />
          </div>
          <ImageCaption caption={image.caption} />
        </figure>
      ))}
    </div>
  );
};
