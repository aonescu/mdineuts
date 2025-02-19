import React from "react";
import styles from "./Section.module.css";

const TextContent: React.FC = () => {
  return (
    <div className={styles.sectionTextContainer}>
      <div className={styles.div}>
        <header className={styles.sectionHeader}>
          <h2 className={styles.sectionHeader2}>Moldova at a glance</h2>
          <h1 className={styles.title}>A nation at the crossroads of Europe</h1>
        </header>
        <p
          className={
            styles.bodyTextLoremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQuisNostrudExercitationUllamcoLaborisNisiUtAliquipExEaCommodoConsequatDuisAuteIrureDolorInReprehenderitInVoluptateVelitEsseCillumDoloreEuFugiatNullaPariaturExcepteurSintOccaecatCupidatatNonProidentSuntInCulpaQuiOfficiaDeseruntMollitAnimIdEstLaborum
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>
    </div>
  );
};

export default TextContent;
