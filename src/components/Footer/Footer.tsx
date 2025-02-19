import React from 'react';
import styles from './Footer.module.css';
import ContactColumn from './ContactColumn';
import LinksColumn from './LinksColumn';
import SocialLinksColumn from './SocialLinksColumn';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoWrapper}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/39d96d445b6e786e0b1ad82a802962428d4f0c5f33be999daa298132d92209cd?apiKey=7f57907064e542fb9bcf627f2673f5c1&"
          className={styles.logo}
          alt="Company Logo"
        />
      </div>
      <div className={styles.contentWrapper}>
        <ContactColumn />
        <div className={styles.column}>
          <LinksColumn
            title="Moldova-in.eu"
            links={[
              { text: "Overview", href: "#" },
              { text: "Moldova in EU", href: "#" },
              { text: "EU in Moldova", href: "#" },
              { text: "Stories", href: "#" },
              { text: "Toolbox", href: "#" },
            ]}
          />
        </div>
        <div className={styles.column}>
          <LinksColumn
            title="Useful links"
            links={[
              { text: "Visit Moldova", href: "#", iconSrc: "https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/313c1119071a2980e6f06cb84c931c22dbafd4ed9d65c87987b0c8afa98c60e8?apiKey=7f57907064e542fb9bcf627f2673f5c1&" },
              { text: "Invest Moldova", href: "#", iconSrc: "https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/d9438fb3ae562b1aba7a057bdcfb245fb7c470de65d3f59592b647a96f09c203?apiKey=7f57907064e542fb9bcf627f2673f5c1&" },
              { text: "Link", href: "#", iconSrc: "https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/1b3b715478ed57e97cba8becdf7fafed42b67c7392ffcb4fba1f9d6fb6a763c5?apiKey=7f57907064e542fb9bcf627f2673f5c1&" },
              { text: "Link", href: "#", iconSrc: "https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/100c4ba6d9f2302695e27966496c6a6c5e90d0a8a58e09f31622f6b9b3e1a107?apiKey=7f57907064e542fb9bcf627f2673f5c1&" },
              { text: "Link", href: "#", iconSrc: "https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/fba0ebc34a846567b187c4ba2fb7500c447c32c493f67630bfa6ce7acb62edfd?apiKey=7f57907064e542fb9bcf627f2673f5c1&" },
            ]}
          />
        </div>
        <SocialLinksColumn />
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.bottomWrapper}>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Cookies</a>
          </div>
          <div className={styles.copyright}>Copyright Lorem ipsum</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;