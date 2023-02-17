/* eslint-disable @next/next/no-img-element */
import styles from "./EventCard.module.scss";
import React from "react";
import Link from "next/link";
import Card from "../Card/Card";

const EventCard = ({ event }) => (
  <div className={styles.container}>
    {event.image && <img className={styles.image} src={event.image.url} />}
    {event.title && <h2 className={styles.title}>{event.title}</h2>}
    {/* <p>01.09.2021</p> */}
    {event.detail && (
      <div
        style={{ paddingBottom: "20px" }}
        dangerouslySetInnerHTML={{ __html: event.detail.html }}
      />
    )}
    <div className={styles.button} style={{ marginTop: "auto" }}>
      <Link href={event.link}>
        <a target="_blank">More About This</a>
      </Link>
    </div>
  </div>
);
export default EventCard;
