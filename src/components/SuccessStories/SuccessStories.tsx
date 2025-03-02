"use client";
import * as React from "react";
import styles from "./SuccessStories.module.css";
import { ProjectCard } from "./ProjectCard";

export default function SuccessStories() {
  return (
    <section className={styles.successStories}>
      <header className={styles.header}>
        <div className={styles.titleSection}>
          <h2 className={styles.subtitle}>Success Stories</h2>
          <h1 className={styles.title}>
            EU-Funded Projects Making a Difference in Moldova
          </h1>
          <p className={styles.description}>
            The EU's support has led to tangible improvements in the lives of
            Moldovan citizens. Below are some success stories that highlight the
            impact of EU-funded projects in Moldova.
          </p>
        </div>
      </header>
      <div className={styles.projects}>
        <ProjectCard
          number="Project 1"
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_767_7061"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="20"
              >
                <rect width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_767_7061)">
                <path
                  d="M4.0481 16.7917V15.7084H12.6314V16.7917H4.0481ZM8.42622 12.4728L4.46476 8.53214L5.94705 7.04984L9.88768 11.0113L8.42622 12.4728ZM13.0112 7.88776L9.0706 3.94714L10.5321 2.46484L14.4935 6.4263L13.0112 7.88776ZM16.9375 15.7115L7.10101 5.87505L7.87497 5.10109L17.7114 14.9376L16.9375 15.7115Z"
                  fill="black"
                  fillOpacity="0.8"
                />
              </g>
            </svg>
          }
          title="Energy Efficiency in Public Buildings"
          description="The EU has funded the refurbishment of district heating systems in residential buildings in Chisinau and Balti, improving energy efficiency and reducing heating costs for thousands of households."
          impact="Over 30,000 residents now benefit from more reliable and affordable heating."
        />
        <ProjectCard
          number="Project 2"
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_767_7143"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="21"
                height="20"
              >
                <rect x="0.333496" width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_767_7143)">
                <path
                  d="M4.38184 16.7917V15.7084H12.9652V16.7917H4.38184ZM8.75996 12.4728L4.7985 8.53214L6.28079 7.04984L10.2214 11.0113L8.75996 12.4728ZM13.345 7.88776L9.40434 3.94714L10.8658 2.46484L14.8273 6.4263L13.345 7.88776ZM17.2712 15.7115L7.43475 5.87505L8.20871 5.10109L18.0452 14.9376L17.2712 15.7115Z"
                  fill="black"
                  fillOpacity="0.8"
                />
              </g>
            </svg>
          }
          title="Support for Small and Medium-Sized Enterprises (SMEs)"
          description="The EU has provided direct support to 50,000 Moldovan SMEs, helping them access finance, improve their business operations, and create jobs."
          impact="Over 33,000 new jobs have been created, and SMEs have seen a significant increase in productivity and exports"
        />
        <ProjectCard
          number="Project 3"
          icon={
            <svg
              width="20"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_767_7166"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="21"
                height="20"
              >
                <rect x="0.666504" width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_767_7166)">
                <path
                  d="M4.71484 16.7917V15.7084H13.2982V16.7917H4.71484ZM9.09297 12.4728L5.13151 8.53214L6.6138 7.04984L10.5544 11.0113L9.09297 12.4728ZM13.678 7.88776L9.73734 3.94714L11.1988 2.46484L15.1603 6.4263L13.678 7.88776ZM17.6042 15.7115L7.76776 5.87505L8.54172 5.10109L18.3782 14.9376L17.6042 15.7115Z"
                  fill="black"
                  fillOpacity="0.8"
                />
              </g>
            </svg>
          }
          title="Solidarity Lanes Initiative"
          description="The EU has supported Moldova's efforts to ensure secure supply chains and food security through the Solidarity Lanes initiative, which facilitates the export of agricultural products to the EU."
          impact="Moldovan exports to the EU increased from €1.8 billion in 2021 to €2.6 billion in 2022."
        />
      </div>
    </section>
  );
}
