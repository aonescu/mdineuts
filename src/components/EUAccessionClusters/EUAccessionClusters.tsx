"use client";
import React from "react";
import styles from "./EUAccessionClusters.module.css";
import { ClusterCard } from "./ClusterCard";

export const EUAccessionClusters: React.FC = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Onest:wght@400;700;900&display=swap"
        rel="stylesheet"
      />
      <main className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>EU accession clusters</h1>
          <p className={styles.subtitle}>
            The EU accession process is structured around 35 thematic clusters,
            which group related policy areas. Moldova will need to align its
            laws, institutions, and practices with EU standards in each of these
            clusters. Below are some of the key clusters and their focus areas:
          </p>
        </header>
        <div className={styles.clusters}>
          <ClusterCard
            color="blue"
            title="Fundamentals"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
            className={styles.clusterfundamentals}
            chapters={[
              {
                number: "23",
                title: "Judiciary & Fundamental Rights",
                progress: 2,
                total: 5,
                progressClass: styles.progress,
              },
              {
                number: "23",
                title: "Judiciary & Fundamental Rights",
                progress: 0,
                total: 5,
                progressClass: styles.progress2,
              },
              {
                number: "23",
                title: "Judiciary & Fundamental Rights",
                progress: 5,
                total: 5,
                progressClass: styles.progress3,
              },
              {
                number: "23",
                title: "Judiciary & Fundamental Rights",
                progress: 5,
                total: 5,
                progressClass: styles.progress4,
              },
            ]}
          />

          <ClusterCard
            color="yellow"
            title="Internal market"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
            className={styles.clusterinternalMarket}
            chapters={[
              {
                number: "1",
                title: "Free Movement of Goods",
                progress: 1,
                total: 5,
                progressClass: styles.progress5,
              },
              {
                number: "2",
                title: "Freedom of Movement for Workers",
                progress: 2,
                total: 5,
                progressClass: styles.progress6,
              },
              {
                number: "3",
                title: "Right of Establishment & Freedom to Provide Services",
                progress: 2,
                total: 5,
                progressClass: styles.progress7,
              },
              {
                number: "4",
                title: "Free Movement of Capital",
                progress: 2,
                total: 5,
                progressClass: styles.progress8,
              },
              {
                number: "6",
                title: "Company Law",
                progress: 3,
                total: 5,
                progressClass: styles.progress9,
              },
              {
                number: "7",
                title: "Intellectual Property Law",
                progress: 2,
                total: 5,
                progressClass: styles.progress10,
              },
              {
                number: "8",
                title: "Competition Policy",
                progress: 2,
                total: 5,
                progressClass: styles.progress11,
              },
              {
                number: "9",
                title: "Financial Services",
                progress: 2,
                total: 5,
                progressClass: styles.progress12,
              },
            ]}
          />

          <ClusterCard
            color="purple"
            title="Competitiveness & Inclusive Growth Cluster"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
            className={styles.clustercompetitiveness}
            chapters={[
              {
                number: "10",
                title: "Information Society & Media",
                progress: 2,
                total: 5,
                progressClass: styles.progress13,
              },
              {
                number: "16",
                title: "Taxation",
                progress: 2,
                total: 5,
                progressClass: styles.progress14,
              },
              {
                number: "17",
                title: "Economic & Monetary Policy",
                progress: 2,
                total: 5,
                progressClass: styles.progress15,
              },
              {
                number: "19",
                title: "Social Policy & Employment",
                progress: 2,
                total: 5,
                progressClass: styles.progress16,
              },
              {
                number: "20",
                title: "Enterprise & Industrial Policy",
                progress: 2,
                total: 5,
                progressClass: styles.progress17,
              },
              {
                number: "25",
                title: "Science & Research",
                progress: 4,
                total: 5,
                progressClass: styles.progress18,
              },
              {
                number: "26",
                title: "Education & Culture",
                progress: 2,
                total: 5,
                progressClass: styles.progress19,
              },
            ]}
          />

          <ClusterCard
            color="green"
            title="Green Agenda & Sustainable Connectivity Cluster"
            className={styles.clustergreenAgenda}
            chapters={[
              {
                number: "14",
                title: "Transport Policy",
                progress: 2,
                total: 5,
                progressClass: styles.progress20,
              },
              {
                number: "15",
                title: "Energyt",
                progress: 2,
                total: 5,
                progressClass: styles.progress21,
              },
              {
                number: "21",
                title: "Trans-European Networks",
                progress: 2,
                total: 5,
                progressClass: styles.progress22,
              },
              {
                number: "27",
                title: "Environment & Climate Change",
                progress: 2,
                total: 5,
                progressClass: styles.progress23,
              },
            ]}
          />

          <ClusterCard
            color="pink"
            title="Resources, Agriculture & Cohesion Cluster"
            className={styles.clusterresources}
            chapters={[
              {
                number: "11",
                title: "Agriculture & Rural Development",
                progress: 4,
                total: 5,
                progressClass: styles.progress24,
              },
              {
                number: "12",
                title: "Food Safety, Veterinary & Phytosanitary Policy",
                progress: 2,
                total: 5,
                progressClass: styles.progress25,
              },
              {
                number: "13",
                title: "Fisheries",
                progress: 0,
                total: 5,
                progressClass: styles.progress26,
              },
              {
                number: "22",
                title:
                  "Regional Policy & Coordination of Structural Instruments",
                progress: 5,
                total: 5,
                progressClass: styles.progress27,
              },
            ]}
          />
        </div>
      </main>
    </>
  );
};
