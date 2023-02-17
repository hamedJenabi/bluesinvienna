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
  anchor = title,
}) => {
  return (
    <Container isZebra={isZebra} isReversed={isRevered}>
      <div id={anchor} className={styles.title}>
        {title && <h1 dangerouslySetInnerHTML={{ __html: title }} />}
        {content && (
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
        <Link href={link || "/"}>
          <button className={styles.button}>{button}</button>
        </Link>
      </div>
      <img className={styles.teaserImage} src={image} />
    </Container>
  );
};
export default Teaser;
