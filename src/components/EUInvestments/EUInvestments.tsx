"use client";
import React from "react";
import { InvestmentHeader } from "./InvestmentHeader";
import { InvestmentCard } from "./InvestmentCard";
import styles from "./EUInvestments.module.css";

const investmentData = [
  {
    label: "Label",
    icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px"> <mask style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"> <rect width="20" height="20" fill="#D9D9D9"></rect> </mask> <g mask="url(#mask0_767_7272)"> <path d="M4.0481 16.7917V15.7084H12.6314V16.7917H4.0481ZM8.42622 12.4728L4.46476 8.53214L5.94705 7.04984L9.88768 11.0113L8.42622 12.4728ZM13.0112 7.88776L9.0706 3.94714L10.5321 2.46484L14.4935 6.4263L13.0112 7.88776ZM16.9375 15.7115L7.10101 5.87505L7.87497 5.10109L17.7114 14.9376L16.9375 15.7115Z" fill="black" fill-opacity="0.8"></path> </g> </svg>`,
    title: "Economic and Investment Plan (EIP)",
    description:
      "The EU has mobilized €1.6 billion for flagship projects in Moldova, including the construction of an inland freight terminal in Chisinau, the rehabilitation of the Valcinet-Ungheni-Chisinau rail corridor, and the refurbishment of district heating systems.",
  },
  {
    label: "Label",
    icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px"> <mask style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"> <rect width="20" height="20" fill="#D9D9D9"></rect> </mask> <g mask="url(#mask0_767_7281)"> <path d="M4.0481 16.7917V15.7084H12.6314V16.7917H4.0481ZM8.42622 12.4728L4.46476 8.53214L5.94705 7.04984L9.88768 11.0113L8.42622 12.4728ZM13.0112 7.88776L9.0706 3.94714L10.5321 2.46484L14.4935 6.4263L13.0112 7.88776ZM16.9375 15.7115L7.10101 5.87505L7.87497 5.10109L17.7114 14.9376L16.9375 15.7115Z" fill="black" fill-opacity="0.8"></path> </g> </svg>`,
    title: "Energy Security",
    description:
      "The EU has provided €135 million to help Moldova diversify its energy sources and reduce energy dependence on Russia. This includes funding for the construction of new electricity power lines and the integration of Moldova into the EU energy market.",
  },
  {
    label: "Label",
    icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px"> <mask style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"> <rect width="20" height="20" fill="#D9D9D9"></rect> </mask> <g mask="url(#mask0_767_7290)"> <path d="M4.04834 16.7917V15.7084H12.6317V16.7917H4.04834ZM8.42647 12.4728L4.46501 8.53214L5.9473 7.04984L9.88792 11.0113L8.42647 12.4728ZM13.0115 7.88776L9.07084 3.94714L10.5323 2.46484L14.4938 6.4263L13.0115 7.88776ZM16.9377 15.7115L7.10126 5.87505L7.87522 5.10109L17.7117 14.9376L16.9377 15.7115Z" fill="black" fill-opacity="0.8"></path> </g> </svg>`,
    title: "Humanitarian Assistance",
    description:
      "The EU has allocated over €48 million in humanitarian aid to support Ukrainian refugees and vulnerable groups in Moldova. This includes funding for food, shelter, and healthcare.",
  },
  {
    label: "Label",
    icon: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 20px; height: 20px"> <mask style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20"> <rect width="20" height="20" fill="#D9D9D9"></rect> </mask> <g mask="url(#mask0_767_7299)"> <path d="M4.04834 16.7917V15.7084H12.6317V16.7917H4.04834ZM8.42647 12.4728L4.46501 8.53214L5.9473 7.04984L9.88792 11.0113L8.42647 12.4728ZM13.0115 7.88776L9.07084 3.94714L10.5323 2.46484L14.4938 6.4263L13.0115 7.88776ZM16.9377 15.7115L7.10126 5.87505L7.87522 5.10109L17.7117 14.9376L16.9377 15.7115Z" fill="black" fill-opacity="0.8"></path> </g> </svg>`,
    title: "Justice Reform",
    description:
      "The EU has provided €87 million to support justice reform in Moldova, including the vetting of judges and prosecutors and the establishment of anti-corruption measures. upported by EU funding.",
  },
];

export const EUInvestments: React.FC = () => {
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
        <InvestmentHeader
          subtitle="EU Investments and Grants"
          title="Driving Moldova's Development"
          description="The EU has provided significant financial assistance to Moldova through grants, loans, and investments. Below are some of the key initiatives funded by the EU:"
        />
        <div className={styles.cards}>
          {investmentData.map((investment, index) => (
            <InvestmentCard
              key={index}
              label={investment.label}
              icon={investment.icon}
              title={investment.title}
              description={investment.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default EUInvestments;
