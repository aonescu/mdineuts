import React from "react";
import styles from "./ImageGallery.module.css";

export const ImageGallery: React.FC = () => {
  return (
    <div className={styles.gallery}>
      <figure className={styles.imageWrapper}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/6648c1a9ac2a618208183cba7c3a714489a3ba5ea981f3bcd745139c22291e30?placeholderIfAbsent=true"
          alt="Moldova landscape"
          className={styles.image}
        />
      </figure>
      <figure className={styles.imageWrapper}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/b13d5f40bd3cf78c972755da45662a3e1eeb6ada061e2fda1fb3a5fcb10770eb?placeholderIfAbsent=true"
          alt="Moldova culture"
          className={styles.image}
        />
      </figure>
      <figure className={styles.imageWrapper}>
        <div className={styles.imageContainer}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/3f8941e0d69281ceecc3198700a4f40623f045ec6b1efd1c20bf3e9ab0f26a4b?placeholderIfAbsent=true"
            alt="Moldova background"
            className={styles.backgroundImage}
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/6446ec82d4fb8e604624439fd10a698e0c58e6e41792c1dc47fc94c46377085f?placeholderIfAbsent=true"
            alt="Moldova foreground"
            className={styles.image}
          />
        </div>
      </figure>
    </div>
  );
};
