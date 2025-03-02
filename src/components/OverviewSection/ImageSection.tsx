import React from "react";
import styles from "./ImageSection.module.css";

const ImageSection: React.FC = () => {
  return (
    <figure className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/4e225b3e604e1b68cd30d582ab1744d426427ca24a75dd768195cf576a57a3ca?placeholderIfAbsent=true"
          alt=""
          className={styles.backgroundImage}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/d1f62e7c1cf60d4f76c8822a5ed6bda70bbd9881090f3d866ce09f8788936dc9?placeholderIfAbsent=true"
          alt=""
          className={styles.foregroundImage}
        />
      </div>
      <figcaption className={styles.caption}>
        <span className={styles.icon} />
        <span>Image caption</span>
      </figcaption>
    </figure>
  );
};

export default ImageSection;
