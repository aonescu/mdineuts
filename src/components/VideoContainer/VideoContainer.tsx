"use client";

import * as React from "react";
import styles from "./VideoContainer.module.css";
import { PlayButton } from "./PlayButton";

function VideoContainer() {
  return (
    <section className={styles.videoContainer}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a627b5698ac9257b96bab3b92ebd639e17d99b93"
        alt="High-rise building"
        className={styles.backgroundImage}
      />
      <PlayButton />
    </section>
  );
}

export default VideoContainer;
