"use client";
import React from 'react';
import styles from './PartnershipsSection.module.css';

interface PartnerLogoProps {
  src: string;
  className: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ src, className }) => (
  <div className={styles.logoContainer}>
    <img loading="lazy" src={src} className={className} alt="Partner logo" />
  </div>
);

const PartnershipsContent = () => (
  <div className={styles.contentContainer}>
    <div className={styles.contentWrapper}>
      <header className={styles.headerContainer}>
        <h2 className={styles.sectionTitle}>Partnerships</h2>
        <h3 className={styles.mainTitle}>
          Organisations and companies helping us to move forward{" "}
        </h3>
      </header>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore
      </p>
    </div>
  </div>
);

const PartnersGrid = () => (
  <div className={styles.partnersGrid}>
    <PartnerLogo
      src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/2512009f3cbe0e13213858bba1a2fa87c45064902b9e80bb994d06b54e4b65d1?placeholderIfAbsent=true"
      className={styles.partnerLogo}
    />
    <PartnerLogo
      src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/55d564bc11112a05f20e339c5d8ddf2129a12195a3d0b27020176467b40b9415?placeholderIfAbsent=true"
      className={styles.partnerLogo2}
    />
    <PartnerLogo
      src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/c945b14023ea8b161c418a01063b4f953fc44ad09b084c0d4fe3dbcaa105e99c?placeholderIfAbsent=true"
      className={styles.partnerLogo}
    />
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/d6e6c470d9128baaddcbac5e53ebe46bd1d5bf8e2ec740cda610c1e1d11c07bf?placeholderIfAbsent=true"
      className={styles.standaloneLogo}
      alt="Partner logo"
    />
    <PartnerLogo
      src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/977a211b5562581682f5a394c5b550e38c5cadeebfd5000e65ad0779a9e4812a?placeholderIfAbsent=true"
      className={styles.partnerLogo2}
    />
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/dac49d9e8aa7e60de7f9ba282adaaefe0bc9cd082e4088954145799f87ee2c9d?placeholderIfAbsent=true"
      className={styles.standaloneLogo}
      alt="Partner logo"
    />
  </div>
);

const PartnershipsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <PartnershipsContent />
        <PartnersGrid />
      </div>
    </section>
  );
};

export default PartnershipsSection;
