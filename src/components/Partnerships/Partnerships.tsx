"use client";
import React from "react";
import { PartnershipsHeader } from "./PartnershipsHeader";
import { FactCard } from "./FactCard";
import styles from "./Partnerships.module.css";

const Partnerships: React.FC = () => {
  const factCards = [
    {
      title: "EU Partnership Mission in Moldova (EUPM)",
      description:
        "Launched in 2023, the EUPM aims to strengthen Moldova's resilience against hybrid threats, including cybersecurity challenges and foreign information manipulation.",
      linkUrl: "#",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/216d03d3cef614463a09bddfbfc1352354cbb78155787007ee69ca9aaba6e15b?placeholderIfAbsent=true",
    },
    {
      title: "Solidarity Lanes Initiative",
      description:
        "The EU, Moldova, and Ukraine have collaborated to ensure secure supply chains and food security through the Solidarity Lanes initiative, which facilitates the export of agricultural products to the EU.",
      linkUrl: "#",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/00a71b7a2174c0762a0d635142489308747557ab22944a55afd12eb8190d1203?placeholderIfAbsent=true",
    },
    {
      title: "Energy Security Partnership",
      description:
        "The EU has supported Moldova's efforts to diversify its energy sources and reduce energy dependence on Russia. This includes funding for the construction of new electricity power lines and the integration of Moldova into the EU energy market.",
      linkUrl: "#",
      iconUrl:
        "https://cdn.builder.io/api/v1/image/assets/7f57907064e542fb9bcf627f2673f5c1/42fa7a3ef46f1614e2fef7f5157f934ab58a91cb36709da598eb411603ed24fb?placeholderIfAbsent=true",
    },
  ];

  return (
    <section className={styles.section}>
      <PartnershipsHeader
        subtitle="EU-Moldova Collaborative Initiatives"
        title="Strengthening Partnerships"
        description="The EU and Moldova have launched several collaborative initiatives to address shared challenges and promote mutual interests. These initiatives focus on areas such as security, energy, and regional stability."
      />
      <div className={styles.cardGrid}>
        {factCards.map((card, index) => (
          <FactCard
            key={index}
            title={card.title}
            description={card.description}
            linkUrl={card.linkUrl}
            iconUrl={card.iconUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Partnerships;
