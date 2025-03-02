"use client";
import * as React from "react";
import styles from "./EUSupport.module.css";
import { OverviewSection } from "./OverviewSection";
import { SupportCard } from "./SupportCard";

export default function EUSupport() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Onest:wght@400;900&display=swap"
        rel="stylesheet"
      />
      <section className={styles.container}>
        <OverviewSection
          title="EU Support Overview"
          heading="How the EUdsupports Molova's Development and EU integration"
          description="The EU is Moldova's largest provider of financial assistance, offering a wide range of programs and instruments to support the country's socio-economic development and EU accession process. Since 2021, the EU has allocated over €1.2 billion in grants, loans, and investments to Moldova, focusing on key areas such as energy security, economic growth, justice reform, and humanitarian assistance."
        />
        <div className={styles.cardsGrid}>
          <SupportCard
            icon="chart-line"
            title="Economic Development"
            description="The EU's Economic and Investment Plan (EIP) for Moldova aims to mobilize up to €1.6 billion in investments, focusing on infrastructure, energy efficiency, and support for small and medium-sized enterprises (SMEs)."
          />
          <SupportCard
            icon="bolt"
            title="Energy Security"
            description="The EU has provided significant support to help Moldova diversify its energy sources, reduce energy dependence, and improve energy efficiency."
          />
          <SupportCard
            icon="scale"
            title="Justice Reform"
            description="The EU supports Moldova's efforts to strengthen the rule of law, combat corruption, and reform the judiciary."
          />
          <SupportCard
            icon="heart-handshake"
            title="Humanitarian Assistance"
            description="The EU has provided over €48 million in humanitarian aid to support Ukrainian refugees and vulnerable groups in Moldova."
          />
          <SupportCard
            icon="shield-lock"
            title="Security and Resilience"
            description="The EU has launched the EU Partnership Mission in Moldova (EUPM) to strengthen the country's resilience against hybrid threats and cybersecurity challenges."
          />
        </div>
      </section>
    </>
  );
}
