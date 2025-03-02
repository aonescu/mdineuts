"use client";

import { useState } from "react";
import { TimelineHeader } from "./TimelineHeader";
import { TimelineNavigation } from "./TimelineNavigation";
import { TimelineContent } from "./TimelineContent";
import { NavigationControls } from "./NavigationControls";
import { TimelineItem } from "./types";
import styles from "./TimelineSection.module.css";

const timelineData: TimelineItem[] = [
  {
    date: "June 2014",
    content:
      "Signature of the Association Agreement and Deep and Comprehensive Free Trade Area (DCFTA).",
    image: {
      src: "https://placehold.co/648x511/FFD200/FFD200",
      alt: "Moldova EU flags",
      caption: "Image caption",
    },
  },
  {
    date: "July 2016",
    content: "Next milestone in Moldova's progress",
    image: {
      src: "https://placehold.co/648x511/FFD200/FFD200",
      alt: "Moldova progress image",
      caption: "Image caption",
    },
  },
  {
    date: "March 2022",
    content: "Further developments in integration",
    image: {
      src: "https://placehold.co/648x511/FFD200/FFD200",
      alt: "Integration progress",
      caption: "Image caption",
    },
  },
  {
    date: "June 2022",
    content: "Milestone achievement",
    image: {
      src: "https://placehold.co/648x511/FFD200/FFD200",
      alt: "Milestone image",
      caption: "Image caption",
    },
  },
  {
    date: "November 2023",
    content: "Recent developments",
    image: {
      src: "https://placehold.co/648x511/FFD200/FFD200",
      alt: "Recent progress",
      caption: "Image caption",
    },
  },
  {
    date: "June 2024",
    content: "Upcoming milestone",
    image: {
      src: "https://placehold.co/648x511/FFD200/FFD200",
      alt: "Future progress",
      caption: "Image caption",
    },
  },
  {
    date: "October 2024",
    content: "Future plans",
    image: {
      src: "https://placehold.co/648x511/FFD200/FFD200",
      alt: "Future plans image",
      caption: "Image caption",
    },
  },
];

export function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prev) => Math.min(timelineData.length - 1, prev + 1));
  };

  return (
    <section className={styles.timelineContainer}>
      <TimelineHeader />
      <TimelineNavigation
        items={timelineData}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
      />
      <div className={styles.contentRight}>
        <TimelineContent item={timelineData[activeIndex]} />
        <NavigationControls
          onPrevClick={handlePrevClick}
          onNextClick={handleNextClick}
          canGoPrev={activeIndex > 0}
          canGoNext={activeIndex < timelineData.length - 1}
        />
      </div>
    </section>
  );
}
