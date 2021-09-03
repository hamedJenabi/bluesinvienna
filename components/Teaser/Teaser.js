/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styles from "./Teaser.module.scss";
import React from "react";
import Container from "../Container/Container";
import Link from "next/link";

const TeaserData = {
  image:
    "https://fraumayer.at/wp-content/uploads/2021/06/photo1624713196-300x174.jpeg",
  title: "Frau Mayer",
  content: "whatever",
  buttonText: "more info",
  buttonLink: "/beatbox",
};

const Teaser = ({
  isRevered = false,
  title,
  content,
  isZebra = false,
  button,
  link,
  image,
}) => {
  return (
    <Container isZebra={isZebra} isReversed={isRevered}>
      <div className={styles.title}>
        {title && <h1>{title}</h1>}
        {content && <p className={styles.content}> {content}</p>}
        <Link href={link || "/"}>
          <button className={styles.button}>{button}</button>
        </Link>
      </div>
      <img className={styles.teaserImage} src={image} />
    </Container>
  );
};
export default Teaser;
