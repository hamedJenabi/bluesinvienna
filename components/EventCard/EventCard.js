/* eslint-disable @next/next/no-img-element */
import styles from "./EventCard.module.scss";
import React from "react";
import Link from "next/link";
import Card from "../Card/Card";

const EventCard = ({ event }) => (
  <div className={styles.container}>
    {event.image && (
      <img className={styles.image} alt={event.title} src={event.image} />
    )}
    {event.title && <h2>{event.title}</h2>}
    {/* <p>01.09.2021</p> */}
    {event.content && <p style={{ paddingBottom: "20px" }}>{event.content}</p>}
    <Link href={event.link}>
      <a target="_blank" className={styles.button}>
        More About This
      </a>
    </Link>
  </div>
);
export default EventCard;
