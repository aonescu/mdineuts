import React from "react";
import styles from "./Newsletter.module.css";

export function NewsletterImage() {
  return (
    <div className={styles.imageSection}>
      <figure className={styles.imageWrapper}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d10a0618723b1524e33cd53044ef04c3cb49ebc3"
          alt="Moldovan landscape"
          className={styles.landscapeImage}
        />
        <figcaption className={styles.imageCaption}>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=&quot;I639:15279;639:15048;639:14778;306:6383;639:22811&quot; width=&quot;20&quot; height=&quot;20&quot; viewBox=&quot;0 0 20 20&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;caption-icon&quot; style=&quot;width: 20px; height: 20px&quot;> <mask id=&quot;mask0_1787_1016&quot; style=&quot;mask-type:alpha&quot; maskUnits=&quot;userSpaceOnUse&quot; x=&quot;-1&quot; y=&quot;0&quot; width=&quot;21&quot; height=&quot;21&quot;> <rect x=&quot;-0.029541&quot; y=&quot;0.303711&quot; width=&quot;20&quot; height=&quot;20&quot; fill=&quot;#D9D9D9&quot;></rect> </mask> <g mask=&quot;url(#mask0_1787_1016)&quot;> <path d=&quot;M9.42878 16.8874V11.6197L5.69795 15.3424L4.93212 14.5765L8.65482 10.8457H3.38712V9.76237H8.65482L4.93212 6.03154L5.69795 5.27362L9.42878 8.99633V3.7207H10.5121V8.99633L14.2429 5.27362L15.0009 6.03154L11.2782 9.76237H16.5538V10.8457H11.2782L15.0009 14.5765L14.2429 15.3424L10.5121 11.6197V16.8874H9.42878Z&quot; fill=&quot;white&quot; fill-opacity=&quot;0.6&quot;></path> </g> </svg>",
            }}
          />
          <span className={styles.captionText}>Image caption</span>
        </figcaption>
      </figure>
    </div>
  );
}
