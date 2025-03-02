"use client";
import React from "react";
import styles from "./ArticleBody.module.css";
import { ArticleHeader } from "./ArticleHeader";
import { QuoteBlock } from "./QuoteBlock";
import { ImageGallery } from "./ImageGallery";
import { ImageCaption } from "./ImageCaption";

function ArticleBody() {
  return (
    <article className={styles.content}>
      <ArticleHeader
        title="Title"
        introduction="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
      />

      <section className={styles.articleBody}>
        <h2 className={styles.subtitle}>Subtitle</h2>
        <div className={styles.body}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore.
          </p>
        </div>
      </section>

      <figure className={styles.articleImageHighlight}>
        <div className={styles.placeholderImage} />
        <ImageCaption caption="Image caption" />
      </figure>

      <QuoteBlock
        quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        source="Source"
      />

      <ImageGallery
        images={[{ caption: "Image caption" }, { caption: "Image caption" }]}
      />
    </article>
  );
}

export default ArticleBody;
