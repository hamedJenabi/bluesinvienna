/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import styles from "./classes.module.scss";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Teaser from "../../components/Teaser/Teaser";
import EventCard from "../../components/EventCard/EventCard";
import GoogleMapReact from "google-map-react";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CollectionsOutlined } from "@material-ui/icons";
import Link from "next/link";

export default function Classes({
  title = "We start in September",
  description = "tba",
}) {
  return (
    <div>
      <Header
        menuItems={[
          { title: "Home", link: "/" },
          { title: "Register", link: "#register" },
        ]}
      />
      <div className={styles.container}>
        <img className={styles.image} src="/bluesinvienna.jpeg" />
        <div className={styles.contentWrapper}>
          {title && <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>}

          <p style={{ margin: "20px 0 0 0" }}>"date"</p>
          {description && (
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          )}

          <Link href="https://docs.google.com/forms/d/e/1FAIpQLScFtadEB9BUq3GnwHlymZSIQxCZjZvTglKDETaHHqdM-y5DlA/viewform">
            <button id="register" className={styles.button}>
              Reigter here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
