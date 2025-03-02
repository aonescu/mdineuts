"use client";
import React from "react";
import styles from "./GreetingHeader.module.css";
import { HeaderSection } from "./HeaderSection";
import { MiddleSection } from "./MiddleSection";
import { BottomSection } from "./BottomSection";

function GreetingHeader() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Onest:wght@100;400;900&display=swap"
        rel="stylesheet"
      />
      <main className={styles.container}>
        <div className={styles.content}>
          <HeaderSection />
          <MiddleSection />
          <BottomSection />
          <p className={styles.description}>
            Nestled in the heart of Europe, Moldova stands as a testament to
            resilience, ambition, and transformation. We are ready to contribute
            our energy, creativity, and dedication to the EU's shared future.
          </p>
        </div>
      </main>
    </>
  );
}

export default GreetingHeader;
